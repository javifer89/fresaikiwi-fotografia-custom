"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Heart, Star, Camera, Users, Gift, Music, Crown } from "lucide-react";
import { cn } from "@/lib/utils";
import { sessionsForFilters } from "@/lib/data/sessions";

const iconComponents = {
  Heart,
  Star,
  Camera,
  Users,
  Gift,
  Music,
  Crown,
} as const;

export function SessionFilters() {
  const pathname = usePathname();
  const currentSlug = pathname.split("/sesiones/")[1] || "all";

  return (
    <div className="py-6 px-4 md:px-8 bg-white border-b border-gray-100 mb-5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap gap-2 justify-center">
          <Link
            href="/sesiones"
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-all",
              currentSlug === "all" || currentSlug === ""
                ? "bg-[var(--fresa)] text-white"
                : "text-[var(--gris)] hover:bg-gray-100",
            )}
            style={{ color: currentSlug === "all" || currentSlug === "" ? "white" : "var(--gris)" }}
          >
            Todas
          </Link>
          {sessionsForFilters.map((option) => {
            const Icon = iconComponents[option.iconName];
            return (
              <Link
                key={option.value}
                href={`/sesiones/${option.value}`}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-1.5",
                  currentSlug === option.value
                    ? "bg-[var(--fresa)] text-white"
                    : "text-[var(--gris)] hover:bg-gray-100",
                )}
                style={{ color: currentSlug === option.value ? "white" : "var(--gris)" }}
              >
                <Icon className="w-3.5 h-3.5" />
                {option.label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}