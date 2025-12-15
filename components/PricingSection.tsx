"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Sparkles, Zap, Target } from "lucide-react";

const included = [
  "Algorithme + Python (نظري وتطبيقي)",
  "شرح مبسط و فهم واضح",
  "حصص مباشرة online أسبوعيا",
  "تسجيلات لكل الحصص",
  "تمارين مصححة بمنهجية الباك",
  "مرافقة من أساتذة تونسيين",
];

export default function PricingSection() {
  return (
    <section className="bg-slate-50 px-4 py-14 text-right" dir="rtl">
      <div className="mx-auto max-w-6xl space-y-10">
        {/* Header */}
        <div className="space-y-3 text-center">
          <span className="mx-auto inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-700">
            <Sparkles className="h-4 w-4" />
            عرض خاص محدود
          </span>

          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
            سعر خيالي: أقل من 25 دينارا في الشهر
          </h2>

          <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
            دفع واحد فقط = تغطية سنة دراسية كاملة.
          </p>
        </div>

        {/* Main pricing card */}
        <Card className="mx-auto max-w-3xl overflow-hidden border-emerald-200 bg-white shadow-lg">
          {/* Top price area */}
          <CardHeader className="relative space-y-4 bg-gradient-to-l from-emerald-600 to-emerald-500 p-8 text-white">
            <div className="flex items-center justify-center gap-2">
              <Zap className="h-5 w-5" />
              <p className="text-sm font-semibold">العرض محدود - المقاعد محدودة</p>
            </div>

            <div className="text-center">
              <p className="text-sm opacity-90">عرض خاص محدود</p>
              <p className="mt-2 text-5xl font-extrabold tracking-tight">
                147 <span className="text-xl font-bold">TND</span>
              </p>
              <p className="mt-2 text-sm opacity-95">
                أقل من 25 دينارا في الشهر
              </p>
            </div>
          </CardHeader>

          <CardContent className="space-y-6 p-7 md:p-8">
            {/* Included list */}
            <div className="space-y-3">
              <p className="text-lg font-bold text-slate-900">
                ما يشملو الإشتراك:
              </p>

              <ul className="grid gap-3 md:grid-cols-2">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 text-emerald-600">
                      <CheckCircle2 className="h-5 w-5" />
                    </span>
                    <span className="text-sm leading-relaxed text-slate-700 md:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* One payment highlight */}
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50/70 p-4">
              <div className="flex items-center gap-2 text-emerald-800">
                <Target className="h-5 w-5" />
                <p className="text-sm font-semibold">
                  دفع واحد فقط = تغطية سنة دراسية كاملة
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="space-y-3">
              <Button
                asChild
                className="h-12 w-full bg-emerald-600 text-base font-semibold hover:bg-emerald-500"
              >
                <a href="#registration">سجل الآن واستفد من العرض</a>
              </Button>

              <p className="text-center text-xs text-slate-500">
                ⚡ العرض محدود - المقاعد محدودة
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
