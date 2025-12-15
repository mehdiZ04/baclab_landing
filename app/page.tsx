import HeroSection from "@/components/HeroSection";
import RegistrationForm from "@/components/RegistrationForm";
import ProblemsSection from "@/components/ProblemsSection";
import FeaturesSection from "@/components/FeaturesSection";
import RegistrationSteps from "@/components/RegistrationSteps";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import UrgencyBanner from "@/components/UrgencyBanner";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Urgency Banner */}
      <UrgencyBanner />
      
      {/* Hero Section */}
      <HeroSection />

      <FeaturesSection />
      {/* Registration Form - Right after Hero */}
      <section className="py-16 px-4 bg-gray-50" id="registration-form">
        <RegistrationForm />
      </section>

     
      <ProblemsSection />
      <RegistrationSteps />
      <PricingSection />
      <TestimonialsSection />
      <footer className="bg-gray-900 text-white py-8 px-4" dir="rtl">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-lg font-semibold mb-2">BackLab - منصة تعليم الإعلامية</p>
          <p className="text-gray-400">معانا، مادة الإعلامية تولي ساهلة وتضمنلك التفوق فالباك</p>
          <p className="text-gray-500 mt-4 text-sm">© 2025 BackLab. جميع الحقوق محفوظة</p>
          
        </div>
      </footer>
    </div>
  );
}
          
