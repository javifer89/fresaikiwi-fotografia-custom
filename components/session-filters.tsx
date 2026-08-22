"use client";

import { useState } from "react";

type FilterOption = {
  value: string;
  label: string;
  icon: React.ComponentType<{ className?: string; color?: string }>;
};

const filterOptions: FilterOption[] = [
  { value: "all", label: "Todas las sesiones", icon: () => null },
  { value: "embarazo", label: "Embarazo", icon: () => /* Camera icon would go here */ null },
  { value: "newborn", label: "Newborn", icon: () => null },
  { value: "cumpleanos", label: "Cumpleaños", icon: () => null },
  { value: "comunión", label: "Comunión", icon: () => null },
  { value: "navidad", label: "Navidad", icon: () => null },
  { value: "familia", label: "Familia", icon: () => null },
  { value: "musical", label: "Musical", icon: () => null },
  { value: "moros-y-cristianos", label: "Moros y Cristianos", icon: () => null },
];

export function SessionFilters() {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  const handleFilterChange = (value: string) => {
    setSelectedFilter(value);
  };

  return (
    <div className="py-6 px-4 md:px-8 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => handleFilterChange("all")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              selectedFilter === "all"
                ? "bg-[var(--fresa)] text-white"
                : "text-[var(--gris)] hover:bg-gray-100"
            }`}
            style={{ color: selectedFilter === "all" ? "white" : "#3D3D3D" }}
          >
            Todas
          </button>
          {filterOptions.map((option) => {
            if (option.value === "all") return null;
            return (
              <button
                key={option.value}
                onClick={() => handleFilterChange(option.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedFilter === option.value
                    ? "bg-[var(--fresa)] text-white"
                    : "text-[var(--gris)] hover:bg-gray-100"}
                }`}
                style={{ color: selectedFilter === option.value ? "white" : "#3D3D3D" }}
              >
                {option.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}