import { Card, CardContent } from "@/components/ui/card";

const problems = [
  "مادة الإعلامية بش تطيحني في المعدل و الscore",
  "الأستاذ يفسر بسرعة و كيف نرجع وحدي نضيع",
  "نفهم ال problème أما ما نعرفش نعمل solution"
];

export default function ProblemsSection() {
  return (
    <section className="py-16 px-4 bg-gray-50" dir="rtl">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          المشاكل اللي يعيشها كل تلميذ باك
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <Card key={index} className="border-2 border-red-200 hover:border-red-400 transition-all shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    {index + 1}
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed pt-2">
                    {problem}
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
