"use client";

import { useState, useEffect } from "react";
import { AlertCircle } from "lucide-react";

export default function UrgencyBanner() {
  const [availablePlaces, setAvailablePlaces] = useState(10);

  return (
    <div className="bg-red-600 text-white py-2 px-4" dir="rtl">
      <div className="max-w-6xl mx-auto flex items-center justify-center gap-2 flex-wrap">
        <AlertCircle className="flex-shrink-0 animate-pulse" size={18} />
        <p className="text-sm md:text-base font-bold text-center">
            باقي فقط <span className="text-yellow-300 text-lg mx-1">{availablePlaces}</span> مقعد متاح!
        </p>
        <span className="text-xs md:text-sm bg-white text-red-600 px-2 py-1 rounded-full font-semibold animate-pulse">
          سارع بالتسجيل
        </span>
      </div>
    </div>
  );
}
