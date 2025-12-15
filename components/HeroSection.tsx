"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle2, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-14 text-right" dir="rtl">
      {/* soft background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 right-10 h-72 w-72 rounded-full bg-emerald-200/30 blur-3xl" />
        <div className="absolute -bottom-24 left-10 h-72 w-72 rounded-full bg-slate-200/50 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
        {/* Text */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-700">
            <Sparkles className="h-4 w-4" />
            برنامج باك إعلامية منظم وواضح
          </div>

          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-5xl">
            معانا، مادة الإعلامية تولي ساهلة
            <span className="block text-slate-900">وتضمنلك التفوق فالباك</span>
          </h1>

          <p className="text-lg leading-relaxed text-slate-600 md:text-xl">
            برنامج واضح و مفهوم مع أساتذة متميزين قادر يهزّك للـ{" "}
            <span className="font-extrabold text-emerald-700">+15/20</span>{" "}
            في الباك.
          </p>

          <ul className="space-y-3 text-base text-slate-700">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-600" />
              <span>حصص مباشرة online + تسجيلات لكل الحصص.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-600" />
              <span>تمارين مصححة بمنهجية الباك باش تزيد نقاطك.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-600" />
              <span>مرافقة من أساتذة متميزين طول السنة.</span>
            </li>
          </ul>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              asChild
              className="h-12 bg-emerald-600 px-6 text-base font-semibold text-white hover:bg-emerald-500"
            >
              <a href="#registration">سجل الآن واحجز مقعدك</a>
            </Button>

            <p className="text-sm text-slate-500">
              سنتصل بك في ظرف 24 ساعة لتأكيد الإشتراك.
            </p>
          </div>
        </div>

        {/* Right card (visual proof / summary) */}
        <div className="md:justify-self-end">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
            <p className="text-sm font-semibold text-slate-700">
              الهدف متاعنا واضح:
            </p>

            <div className="mt-4 rounded-2xl bg-emerald-50 p-5 text-center">
              <p className="text-sm font-semibold text-slate-700">توصل لـ</p>
              <p className="mt-1 text-4xl font-extrabold text-emerald-700">
                +15/20
              </p>
              <p className="mt-1 text-sm text-slate-600">في مادة الإعلامية</p>
            </div>

            <div className="mt-5 space-y-3 text-sm text-slate-600">
              <div className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3">
                <span>مدة التغطية</span>
                <span className="font-semibold text-slate-800">سنة كاملة</span>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3">
                <span>النظام</span>
                <span className="font-semibold text-slate-800">Live + تسجيلات</span>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3">
                <span>الدعم</span>
                <span className="font-semibold text-slate-800">مرافقة مستمرة</span>
              </div>
            </div>

            <div className="mt-6 text-center text-xs text-slate-500">
              المقاعد محدودة — سجّل قبل ما يوفاو البلايص.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
