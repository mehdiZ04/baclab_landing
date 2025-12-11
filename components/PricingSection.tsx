"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export default function PricingSection() {
  const scrollToForm = () => {
    const formElement = document.getElementById('registration-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section className="py-16 px-4 bg-gray-50" dir="rtl">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          ثمن الإشتراك السنوي
        </h2>
        
        <Card className="border-4 border-green-500 shadow-2xl overflow-hidden">
          <CardHeader className="bg-white border-b-4 border-green-500 text-center py-8">
            <div className="mb-4">
              <p className="text-lg mb-2 text-gray-700 font-semibold">عرض خاص محدود</p>
              <div className="flex items-center justify-center gap-4">
                <span className="text-5xl md:text-6xl font-bold text-green-600">147 TND</span>
                <span className="text-3xl text-gray-400 line-through">247 TND</span>
              </div>
              <p className="text-xl mt-4 text-gray-600">
                سعر خيالي: أقل من 25 دينارا في الشهر
              </p>
            </div>
          </CardHeader>
          
          <CardContent className="p-8">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">
                ما يشملوه الإشتراك:
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-500 flex-shrink-0" size={28} />
                  <p className="text-lg text-gray-700">
                    <strong>Algorithme + Python</strong> (نظري وتطبيقي)
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-500 flex-shrink-0" size={28} />
                  <p className="text-lg text-gray-700">شرح مبسط و فهم واضح</p>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-500 flex-shrink-0" size={28} />
                  <p className="text-lg text-gray-700">حصص مباشرة online أسبوعيا</p>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-500 flex-shrink-0" size={28} />
                  <p className="text-lg text-gray-700">تسجيلات لكل الحصص</p>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-500 flex-shrink-0" size={28} />
                  <p className="text-lg text-gray-700">تمارين مصححة بمنهجية الباك</p>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-500 flex-shrink-0" size={28} />
                  <p className="text-lg text-gray-700">مرافقة من أساتذة تونسيين</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border-2 border-green-400 rounded-lg p-6 mb-6">
              <p className="text-center text-xl font-bold text-gray-800">
                🎯 دفع واحد فقط = تغطية سنة دراسية كاملة
              </p>
            </div>

            <Button
              onClick={scrollToForm}
              className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold text-xl py-8 shadow-lg"
            >
              سجل الآن واستفد من العرض
            </Button>

            <p className="text-center text-sm text-gray-600 mt-4">
              ⚡ العرض محدود - المقاعد محدودة
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
