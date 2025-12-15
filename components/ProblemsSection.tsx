"use client";

import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, ArrowLeft } from "lucide-react";

const problems = [
  {
    title: "مادة الإعلامية بش تطيحني في المعدل و الscore",
    impact: "هذا يخلّيك تخسر نقاط حتى كان باهي في مواد أخرى.",
  },
  {
    title: "الأستاذ يفسر بسرعة و كيف نرجع وحدي نضيع",
    impact: "تبدأ تجمع في الدروس وتدخل في ضغط قبل الفروض والباك.",
  },
  {
    title: "نفهم ال problème أما ما نعرفش نعمل solution",
    impact: "المشكل موش في الفهم—في التطبيق والمنهجية متاع الحل.",
  },
];

export default function ProblemsSection() {
  return (
    <section className="bg-white px-4 py-14" dir="rtl">
      <div className="mx-auto max-w-6xl space-y-10">
        {/* Header */}
        <div className="space-y-4 text-center">
          <span className="mx-auto inline-flex items-center gap-2 rounded-full bg-rose-50 px-3 py-1 text-sm font-semibold text-rose-700">
            <AlertTriangle className="h-4 w-4" />
            قبل ما نبدأو… هاذم أكثر مشاكل تتعاود
          </span>

          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
            المشاكل اللي يعيشها كل تلميذ باك
          </h2>

          <p className="mx-auto max-w-3xl text-base leading-relaxed text-slate-600 md:text-lg">
            كان تحس روحك في وحدة منهم، طبيعي برشة—المهم تلقى طريقة منظمة باش
            تحول المشكلة لخطوات واضحة وتمارين.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {problems.map((p, index) => (
            <Card
              key={p.title}
              className="group h-full border-slate-200 bg-slate-50/60 shadow-sm transition hover:-translate-y-1 hover:border-rose-200 hover:bg-white hover:shadow-md"
            >
              <CardContent className="relative p-7">
  {/* badge ALWAYS on the RIGHT */}
  <div className="absolute right-7 top-7 flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-50 text-rose-700 ring-1 ring-rose-100">
    <span className="text-xl font-extrabold">{index + 1}</span>
  </div>

  {/* text shifted left to make room for badge */}
  <div className="space-y-4 pr-20">
    <p className="text-lg font-semibold leading-relaxed text-slate-900 md:text-xl">
      {p.title}
    </p>

    <p className="text-base leading-relaxed text-slate-600">
      {p.impact}
    </p>
  </div>

  <div className="mt-7 h-px w-full bg-gradient-to-l from-transparent via-slate-200 to-transparent" />
</CardContent>
            </Card>
          ))}
        </div>

        {/* Transition line to next section */}
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 px-6 py-6 text-center">
          <p className="text-base font-semibold text-slate-900 md:text-lg">
            في الأقسام الجاية باش تشوف كيفاش BacLab يحوّل المشاكل هاذم لخطة
            واضحة وتمارين مصححة.
          </p>
        </div>
      </div>
    </section>
  );
}
