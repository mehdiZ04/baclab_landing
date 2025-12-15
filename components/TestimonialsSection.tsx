"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle } from "lucide-react";

const testimonials = [
  "avis1.png",
  "avis2.png",
  "avis 3.png",
  "avis 3.png",
  "avis 4.png",
  "avis 5.png",
  "avis 6.png",
  "avis 7.png",
  "avis 8.png",
  "avis 9.png",
  "avis 10.png",
  "avis 11.png",
  "avis 12.png",
  "avis 13.png",
  "avis 14.png",
  "avis 15.png",
];

export default function TestimonialsSection() {
  return (
    <section className="bg-white px-4 py-14" dir="rtl">
      <div className="mx-auto max-w-6xl space-y-10">
        {/* Header */}
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
            شهادات تلاميذنا
          </h2>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
            إكتشف تجارب الطلاب اللي حققوا نتائج باهرة معانا. صور حقيقية من
            المحادثات ورسائل الشكر.
          </p>

          {/* Trust stats strip */}
          <div className="mx-auto mt-4 grid max-w-3xl grid-cols-3 gap-2 text-center text-xs text-slate-600 md:text-sm">
            <div className="rounded-xl bg-slate-50 px-3 py-2">
              +300 رسالة شكر موثقة
            </div>
            <div className="rounded-xl bg-slate-50 px-3 py-2">
              معدل رضا يتجاوز 96%
            </div>
            <div className="rounded-xl bg-slate-50 px-3 py-2">
              نتائج ملموسة في الفروض والباك
            </div>
          </div>
        </div>

        {/* Grid of screenshots */}
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((file, i) => (
            <Card
              key={file + i}
              className="group overflow-hidden border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-md"
            >
              <CardContent className="p-3">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl ring-1 ring-slate-200/60">
                  <Image
              src={`/testimonials/${file}`}
              alt="شهادة طالب"
              width={1200}
              height={2000}
              quality={100}
              className="h-auto w-full object-contain"
              sizes="(min-width: 1280px) 420px, (min-width: 768px) 520px, 100vw"
            />
                </div>

                {/* small caption */}
                <p className="mt-3 line-clamp-2 text-xs text-slate-500">
                  رسالة شكر حقيقية من طالب بعد تحسّن ملحوظ في المستوى.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center gap-3">
          <p className="text-sm font-medium text-slate-700 md:text-base">
            انضم لمئات الطلاب الناجحين. نجاحهم بدا من هنا، والدور دورك.
          </p>
          <a
            href="https://wa.me/216XXXXXXXX" // ضع رقم WhatsApp الصحيح
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-500 md:text-base"
          >
            <MessageCircle className="h-5 w-5" />
            تواصل عبر واتساب
          </a>
        </div>
      </div>
    </section>
  );
}
