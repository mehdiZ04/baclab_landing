"use client";

import { Card, CardContent } from "@/components/ui/card";

const steps = [
  { number: "1", title: "تسجل معلوماتك الكاملة بكل دقة" },
  {
    number: "2",
    title: "نتصلو بيك في ظرف 24 ساعة باش نأكدو إشتراكك (إذا تبقالك مقعد)",
  },
  {
    number: "3",
    title:
      "تجيك شركة توصيل لباب الدار، تعطيك ورقة فيها معطيات حسابك كل (الـadresse والـmot de passe) وحتى الـlien متاع الـplatform الي بش تقرا فيها من عندنا و تاخو منك معلوم إشتراك سنة دراسية كاملة (147 دينار)",
  },
  {
    number: "4",
    title:
      "تتحصل على معطيات الوصول للدروس المسجلة و رزنامة الدروس المباشرة online",
  },
];

export default function RegistrationSteps() {
  return (
    <section className="bg-slate-50 px-4 py-14" dir="rtl">
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="space-y-3 text-center">
          <span className="mx-auto inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-700">
            كيفاش يتم الاشتراك؟
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
            طريقة التسجيل في المنصة
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
            أربع خطوات بسيطة وواضحة، من تعمير الاستمارة حتى الدخول للمنصة والبدء في الدروس.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {steps.map((step) => (
            <Card
              key={step.number}
              className="relative overflow-hidden border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <CardContent className="p-6">
                {/* Number badge ALWAYS on the RIGHT */}
                <div className="absolute right-6 top-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-md shadow-emerald-100">
                  <span className="text-2xl font-extrabold">{step.number}</span>
                </div>

                {/* Text with padding-right so it doesn't collide with badge */}
                <p className="pr-20 text-base leading-relaxed text-slate-800 md:text-lg">
                  {step.title}
                </p>

                <div className="mt-6 h-1 w-full rounded-full bg-emerald-100" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
