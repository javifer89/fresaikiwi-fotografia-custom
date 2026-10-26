"use client";

import React, { useState, FormEvent } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "./ui/button";

interface FormField {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "textarea" | "select" | "number";
  placeholder?: string;
  required?: boolean;
  options?: string[]; // For select
  rows?: number; // For textarea
}

interface FormspreeFormProps {
  title?: string;
  description?: string;
  fields: FormField[];
  submitText?: string;
  successMessage?: string;
  className?: string;
}

export function FormspreeForm({
  title,
  description,
  fields,
  submitText = "Enviar",
  successMessage = "¡Gracias! Tu mensaje ha sido enviado correctamente.",
  className = "",
}: FormspreeFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const payload = { ...formData, _gotcha: "" };
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({});
        return;
      }

      // The route answers with { error: string }. Surfacing it is the whole point:
      // console.error is stripped from production builds by next.config.mjs.
      const data: unknown = await response.json().catch(() => null);
      const apiError =
        typeof data === "object" && data !== null && "error" in data
          ? (data as { error?: unknown }).error
          : undefined;

      setError(
        typeof apiError === "string" && apiError.length > 0
          ? apiError
          : "No pudimos enviar el formulario. Inténtalo de nuevo en unos minutos.",
      );
    } catch {
      setError(
        "No pudimos conectar con el servidor. Revisa tu conexión e inténtalo de nuevo.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Card className={className}>
      {title && (
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
      )}
      <CardContent>
        {submitted ? (
          <div className="text-center py-12">
            <div className="mb-4 text-4xl">✓</div>
            <p className="text-green-600 font-semibold text-lg">
              {successMessage}
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-6"
            aria-busy={isLoading}
            data-webmcp="contacto"
            data-webmcp-schema="contactForm"
          >
            {fields.map((field) => (
              <div key={field.name} className="space-y-2">
                <Label htmlFor={field.name} className="text-base font-semibold">
                  {field.label}
                  {field.required && <span className="text-red-500 ml-1">*</span>}
                </Label>

                {field.type === "textarea" ? (
                  <Textarea
                    id={field.name}
                    name={field.name}
                    placeholder={field.placeholder}
                    required={field.required}
                    rows={field.rows || 4}
                    value={formData[field.name] || ""}
                    onChange={handleChange}
                    className="resize-none"
                  />
                ) : field.type === "select" ? (
                  <select
                    id={field.name}
                    name={field.name}
                    required={field.required}
                    value={formData[field.name] || ""}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Selecciona una opción</option>
                    {field.options?.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                ) : (
                  <Input
                    id={field.name}
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    required={field.required}
                    value={formData[field.name] || ""}
                    onChange={handleChange}
                  />
                )}
              </div>
            ))}

            {error && (
              <div
                role="alert"
                aria-live="assertive"
                className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
              >
                {error}
              </div>
            )}

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full"
              size="lg"
            >
              {isLoading ? "Enviando..." : submitText}
            </Button>
          </form>
        )}
      </CardContent>
    </Card>
  );
}
