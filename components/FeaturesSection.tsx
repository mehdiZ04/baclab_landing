"use client";

import { CheckCircle2 } from "lucide-react";

const features = [
  "حصص Live كل أسبوع: تسأل، تفهم، وتصلّح أخطائك في الوقت.",
  "تسجيلات Live: ترجع للدرس وقت ما تحب.",
  "حصص مسجّلين ببيداغوجيا واضحة: الأستاذ يفسّرلك خطوة بخطوة، بلا تعقيد.",
  "تمارين مُصحّحة بمنهجية باك: طريقة تضمنلك تحسن معدلاتك.",
  "أساتذة في تونس بش يرافقوك من بداية الرحلة معانا.",
  "خارطة طريق واضحة من ال0 للباك.",
];

export default function FeaturesSection() {
  return (
    <section className="bg-slate-50 px-4 py-14" dir="rtl">
      <div className="mx-auto max-w-6xl">
        {/* Outer premium card */}
        <div className="rounded-3xl border border-slate-200 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.06)]">
          {/* Header */}
          <div className="px-6 pb-7 pt-9 md:px-12">
            <h2 className="text-center text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
              تفاصيل عرض <span className="text-slate-900">BacLab</span>
            </h2>
            <p className="mt-3 text-center text-base leading-relaxed text-slate-600 md:text-lg">
              العرض اللي بش يضمنلك التميز في مادة الإعلامية
            </p>

            {/* subtle underline (not purple) */}
            <div className="mx-auto mt-6 h-1 w-40 rounded-full bg-emerald-500/70" />
          </div>

          {/* Content */}
          <div className="px-6 pb-10 md:px-12">
            {/* Features in 2 columns */}
            <div className="grid gap-x-14 gap-y-8 md:grid-cols-2">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  {/* Icon */}
                  <span className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100">
                    <CheckCircle2 className="h-5 w-5" />
                  </span>

                  {/* Text bigger + clearer */}
                  <p className="text-lg leading-relaxed text-slate-800 md:text-xl">
                    {feature}
                  </p>
                </div>
              ))}
            </div>

            {/* Goal box */}
            <div className="mt-12 rounded-2xl border border-emerald-200 bg-emerald-50/60 px-6 py-7 text-center">
              <p className="text-xl font-extrabold text-slate-900 md:text-2xl">
                الهدف؟
              </p>
              <p className="mt-3 text-2xl font-extrabold tracking-tight text-emerald-700 md:text-3xl">
                تفهم، تضمن، وتنجّم.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
