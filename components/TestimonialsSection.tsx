"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Facebook } from "lucide-react";

const testimonials = [
  "avis 3.png",
  "avis 5.png",
  "avis 7.png",
  "avis 8.png",
  "avis 10.png",
  "avis 11.png",
  "avis 15.png"
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 px-4 bg-white" dir="rtl">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
          شهادات تلاميذنا
        </h2>
        <p className="text-xl text-center mb-12 text-gray-600">
          إكتشف تجارب الطلاب اللي حققوا نتائج باهرة معانا
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
              <CardContent className="p-4">
                <div className="relative w-full aspect-square">
                  <Image
                    src={`/testimonials/${testimonial}`}
                    alt={`شهادة ${index + 1}`}
                    fill
                    className="object-contain"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-2xl font-bold text-purple-600">
            انضم لمئات الطلاب الناجحين
          </p>
          <p className="text-lg text-gray-600 mt-2">
            نجاحهم يبدا من هنا، ونجاحك الدور متاعك
          </p>
          <div className="flex items-center justify-center gap-4 mt-6">
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition shadow-lg"
            >
              <MessageCircle size={20} />
              تواصل عبر واتساب
            </a>
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition shadow-lg"
            >
              <Facebook size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
