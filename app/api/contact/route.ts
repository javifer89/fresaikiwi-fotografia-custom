import { NextRequest, NextResponse } from "next/server";

const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 3; // 3 requests per minute per IP
// Required: without it we must fail closed instead of leaking submissions
// to a fallback endpoint that is not ours.
const FORMSPREE_ENDPOINT = process.env.FORMSPREE_ENDPOINT;

const ipRequestCounts = new Map<string, { count: number; resetTime: number }>();

function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  const realIp = request.headers.get("x-real-ip");
  const ip = forwarded?.split(",")[0]?.trim() || realIp || "unknown";
  return ip;
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = ipRequestCounts.get(ip);

  if (!record || now > record.resetTime) {
    ipRequestCounts.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return false;
  }

  if (record.count >= MAX_REQUESTS) {
    return true;
  }

  record.count++;
  return false;
}

export async function POST(request: NextRequest) {
  if (!FORMSPREE_ENDPOINT) {
    console.error(
      "FORMSPREE_ENDPOINT is not configured. Set it in .env.local or in the Vercel project environment variables.",
    );
    return NextResponse.json(
      { error: "El formulario no está disponible en este momento." },
      { status: 500 }
    );
  }

  const ip = getClientIp(request);

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Demasiadas solicitudes. Intenta de nuevo en un minuto." },
      { status: 429 }
    );
  }

  try {
    const body = await request.json();

    const honeypot = body._gotcha;
    if (honeypot) {
      return NextResponse.json(
        { error: "Spam detectado" },
        { status: 400 }
      );
    }

    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error("Formspree error:", errorData);
      return NextResponse.json(
        { error: "Error al enviar el formulario" },
        { status: response.status }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Form submission error:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}