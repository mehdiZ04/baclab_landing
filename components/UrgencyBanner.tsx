"use client";

import { useState } from "react";
import { AlertCircle } from "lucide-react";

export default function UrgencyBanner() {
  const [availablePlaces] = useState(10);

  return (
    <section
      dir="rtl"
      className="w-full bg-red-600 text-white shadow-[0_8px_20px_rgba(0,0,0,0.25)]"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        {/* Main urgency text */}
        <div className="flex flex-1 items-center justify-center gap-2 text-sm md:text-base">
          <AlertCircle className="h-4 w-4 text-white/90" />
          <span className="font-medium">
            {" "}
            <span className="mx-1 font-extrabold text-white">
              {availablePlaces}
            </span>
            مقاعد متاحة! المقاعد محدودة.
          </span>
        </div>

        {/* CTA pill */}
        <a
          href="#registration"
          className="rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-red-600 shadow-sm transition hover:bg-red-50 md:text-sm"
        >
          سارع بالتسجيل
        </a>
      </div>
    </section>
  );
}
