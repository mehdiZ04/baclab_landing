import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    number: "1",
    title: "تسجل معلوماتك الكاملة بكل دقة"
  },
  {
    number: "2",
    title: "نتصلو بيك في ظرف 24 ساعة باش نأكدو إشتراكك (إذا تبقالك مقعد)"
  },
  {
    number: "3",
    title: "تجيك شركة توصيل لباب الدار، تعطيك ورقة فيها معطيات حسابك كل (الـadresse والـmot de passe) وحتى الـlien متاع الـplatform الي بش تقرا فيها من عندنا و تاخو منك معلوم إشتراك سنة دراسية كاملة (147 دينار)"
  },
  {
    number: "4",
    title: "تتحصل على معطيات الوصول للدروس المسجلة و رزنامة الدروس المباشرة online"
  }
];

export default function RegistrationSteps() {
  return (
    <section className="py-16 px-4 bg-white" dir="rtl">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          طريقة التسجيل في المنصة
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((step) => (
            <Card key={step.number} className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                    {step.number}
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed pt-2">
                    {step.title}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
