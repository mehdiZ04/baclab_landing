import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const features = [
  "حصص Live كل أسبوع: تسأل، تفهم، وتصلّح أخطائك في الوقت.",
  "تسجيلات Live: ترجع للدرس وقت ما تحب.",
  "حصص مسجّلين ببيداغوجيا واضحة: الأستاذ يفسّرلك خطوة بخطوة، بلا تعقيد",
  "تمارين مُصحّحة بمنهجية باك: طريقة تضمنلك تحسن معدلاتك.",
  "أساتذة في تونس بش يرافقوك من بداية الرحلة معانا.",
  "خارطة طريق واضحة من ال0 للباك."
];

export default function FeaturesSection() {
  return (
    <section className="py-16 px-4 bg-white" dir="rtl">
      <div className="max-w-6xl mx-auto">
        <Card className="border-2 border-purple-200 shadow-2xl">
          <CardHeader className="bg-white border-b-4 border-purple-500">
            <CardTitle className="text-3xl md:text-4xl text-center font-bold text-gray-900">
              تفاصيل عرض BacLab
            </CardTitle>
            <p className="text-center text-lg mt-2 text-gray-600">
              العرض اللي بش يضمنلك التميز في مادة الإعلامية
            </p>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                  <CheckCircle2 className="text-green-500 flex-shrink-0 mt-1" size={24} />
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-10 p-6 bg-gray-50 rounded-lg border-2 border-purple-300">
              <p className="text-2xl font-bold text-center text-gray-800">
                الهدف؟
              </p>
              <p className="text-3xl font-bold text-center text-purple-600 mt-2">
                تفهم، تضمن، وتنجّم.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
