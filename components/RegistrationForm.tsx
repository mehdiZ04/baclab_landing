"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const tunisianStates = [
  "أريانة", "باجة", "بن عروس", "بنزرت", "تونس", "جندوبة", "زغوان", "سليانة",
  "سوسة", "صفاقس", "قابس", "قبلي", "قفصة", "قليبية", "الكاف", "القيروان",
  "مدنين", "المنستير", "المهدية", "منوبة", "نابل", "سيدي بوزيد", "تطاوين", "توزر"
];

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    parentPhone: "",
    state: "",
    section: "",
    address: "",
    paymentMethod: ""
  });
  
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^[0-9]{8}$/;
    return phoneRegex.test(phone);
  };

  const validateForm = (): boolean => {
    const newErrors: {[key: string]: string} = {};

    // Validate first name
    if (!formData.firstName.trim()) {
      newErrors.firstName = "الإسم مطلوب";
    } else if (formData.firstName.trim().length < 2) {
      newErrors.firstName = "الإسم يجب أن يحتوي على حرفين على الأقل";
    }

    // Validate last name
    if (!formData.lastName.trim()) {
      newErrors.lastName = "اللقب مطلوب";
    } else if (formData.lastName.trim().length < 2) {
      newErrors.lastName = "اللقب يجب أن يحتوي على حرفين على الأقل";
    }

    // Validate phone
    if (!formData.phone) {
      newErrors.phone = "رقم الهاتف مطلوب";
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = "رقم الهاتف يجب أن يحتوي على 8 أرقام";
    }

    // Validate parent phone
    if (!formData.parentPhone) {
      newErrors.parentPhone = "رقم هاتف الولي مطلوب";
    } else if (!validatePhone(formData.parentPhone)) {
      newErrors.parentPhone = "رقم هاتف الولي يجب أن يحتوي على 8 أرقام";
    }

    // Validate state
    if (!formData.state) {
      newErrors.state = "يجب إختيار الولاية";
    }

    // Validate section
    if (!formData.section) {
      newErrors.section = "يجب إختيار الشعبة";
    }

    // Validate address
    if (!formData.address.trim()) {
      newErrors.address = "العنوان مطلوب";
    } else if (formData.address.trim().length < 10) {
      newErrors.address = "العنوان قصير جدا";
    }

    // Validate payment method
    if (!formData.paymentMethod) {
      newErrors.paymentMethod = "يجب إختيار طريقة الدفع";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitMessage(null);

    // Validate before submitting
    if (!validateForm()) {
      setSubmitMessage({ type: 'error', text: 'يرجى تصحيح الأخطاء في النموذج' });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitMessage({ type: 'success', text: 'تم التسجيل بنجاح! سنتصل بك قريبا.' });
        setFormData({
          firstName: "",
          lastName: "",
          phone: "",
          parentPhone: "",
          state: "",
          section: "",
          address: "",
          paymentMethod: ""
        });
        setErrors({});
      } else {
        setSubmitMessage({ type: 'error', text: 'حدث خطأ. يرجى المحاولة مرة أخرى.' });
      }
    } catch (error) {
      setSubmitMessage({ type: 'error', text: 'حدث خطأ. يرجى المحاولة مرة أخرى.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-xl" dir="rtl">
      <CardHeader className="bg-white border-b-4 border-purple-500 rounded-t-lg">
        <CardTitle className="text-2xl text-center font-bold text-gray-900">
          سجل الآن واحجز مقعدك
        </CardTitle>
      </CardHeader>
      <CardContent className="mt-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* First Name */}
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-right block">
                الإسم *
              </Label>
              <Input
                id="firstName"
                type="text"
                required
                className={`text-right ${errors.firstName ? 'border-red-500' : ''}`}
                value={formData.firstName}
                onChange={(e) => {
                  setFormData({ ...formData, firstName: e.target.value });
                  if (errors.firstName) setErrors({ ...errors, firstName: '' });
                }}
                placeholder="أدخل إسمك"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm text-right">{errors.firstName}</p>
              )}
            </div>

            {/* Last Name */}
            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-right block">
                اللقب *
              </Label>
              <Input
                id="lastName"
                type="text"
                required
                className={`text-right ${errors.lastName ? 'border-red-500' : ''}`}
                value={formData.lastName}
                onChange={(e) => {
                  setFormData({ ...formData, lastName: e.target.value });
                  if (errors.lastName) setErrors({ ...errors, lastName: '' });
                }}
                placeholder="أدخل لقبك"
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm text-right">{errors.lastName}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Phone */}
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-right block">
                رقم الهاتف *
              </Label>
              <Input
                id="phone"
                type="tel"
                required
                className={`text-right ${errors.phone ? 'border-red-500' : ''}`}
                value={formData.phone}
                onChange={(e) => {
                  setFormData({ ...formData, phone: e.target.value });
                  if (errors.phone) setErrors({ ...errors, phone: '' });
                }}
                placeholder="مثال: 12345678"
                maxLength={8}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm text-right">{errors.phone}</p>
              )}
            </div>

            {/* Parent Phone */}
            <div className="space-y-2">
              <Label htmlFor="parentPhone" className="text-right block">
                رقم هاتف الولي *
              </Label>
              <Input
                id="parentPhone"
                type="tel"
                required
                className={`text-right ${errors.parentPhone ? 'border-red-500' : ''}`}
                value={formData.parentPhone}
                onChange={(e) => {
                  setFormData({ ...formData, parentPhone: e.target.value });
                  if (errors.parentPhone) setErrors({ ...errors, parentPhone: '' });
                }}
                placeholder="مثال: 12345678"
                maxLength={8}
              />
              {errors.parentPhone && (
                <p className="text-red-500 text-sm text-right">{errors.parentPhone}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            <div className="space-y-2">
              <Label htmlFor="state" className="text-right block">
                الولاية *
              </Label>
              <Select
                value={formData.state}
                onValueChange={(value) => {
                  setFormData({ ...formData, state: value });
                  if (errors.state) setErrors({ ...errors, state: '' });
                }}
              >
                <SelectTrigger className={`text-right ${errors.state ? 'border-red-500' : ''}`} dir="rtl">
                  <SelectValue placeholder="إختر الولاية" />
                </SelectTrigger>
                <SelectContent dir="rtl">
                  {tunisianStates.map((state) => (
                    <SelectItem key={state} value={state} className="text-right">
                      {state}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.state && (
                <p className="text-red-500 text-sm text-right">{errors.state}</p>
              )}
            </div>

            {/* Section */}
            <div className="space-y-2">
              <Label htmlFor="section" className="text-right block">
                الشعبة *
              </Label>
              <Select
                value={formData.section}
                onValueChange={(value) => {
                  setFormData({ ...formData, section: value });
                  if (errors.section) setErrors({ ...errors, section: '' });
                }}
              >
                <SelectTrigger className={`text-right ${errors.section ? 'border-red-500' : ''}`} dir="rtl">
                  <SelectValue placeholder="إختر الشعبة" />
                </SelectTrigger>
                <SelectContent dir="rtl">
                  <SelectItem value="رياضيات" className="text-right">
                    رياضيات
                  </SelectItem>
                  <SelectItem value="علوم تجريبية" className="text-right">
                    علوم تجريبية
                  </SelectItem>
                  <SelectItem value="تقنية" className="text-right">
                    تقنية
                  </SelectItem>
                </SelectContent>
              </Select>
              {errors.section && (
                <p className="text-red-500 text-sm text-right">{errors.section}</p>
              )}
            </div>
          </div>

          {/* Address */}
          <div className="space-y-2">
            <Label htmlFor="address" className="text-right block">
              العنوان الكامل *
            </Label>
            <Input
              id="address"
              type="text"
              required
              className={`text-right ${errors.address ? 'border-red-500' : ''}`}
              value={formData.address}
              onChange={(e) => {
                setFormData({ ...formData, address: e.target.value });
                if (errors.address) setErrors({ ...errors, address: '' });
              }}
              placeholder="أدخل عنوانك الكامل"
            />
            {errors.address && (
              <p className="text-red-500 text-sm text-right">{errors.address}</p>
            )}
          </div>

          {/* Payment Method */}
          <div className="space-y-2">
            <Label htmlFor="paymentMethod" className="text-right block">
              طريقة الدفع *
            </Label>
            <Select
              value={formData.paymentMethod}
              onValueChange={(value) => {
                setFormData({ ...formData, paymentMethod: value });
                if (errors.paymentMethod) setErrors({ ...errors, paymentMethod: '' });
              }}
            >
              <SelectTrigger className={`text-right ${errors.paymentMethod ? 'border-red-500' : ''}`} dir="rtl">
                <SelectValue placeholder="إختر طريقة الدفع" />
              </SelectTrigger>
              <SelectContent dir="rtl">
                <SelectItem value="نقدي عند التوصيل" className="text-right">
                  نقدي عند التوصيل
                </SelectItem>
              </SelectContent>
            </Select>
            {errors.paymentMethod && (
              <p className="text-red-500 text-sm text-right">{errors.paymentMethod}</p>
            )}
          </div>

          {submitMessage && (
            <div className={`p-4 rounded-lg text-center font-semibold ${
              submitMessage.type === 'success' 
                ? 'bg-green-100 text-green-800 border-2 border-green-500' 
                : 'bg-red-100 text-red-800 border-2 border-red-500'
            }`}>
              {submitMessage.text}
            </div>
          )}

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold text-lg py-6 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'جاري التسجيل...' : 'أكد تسجيلك الآن'}
          </Button>

          <p className="text-center text-sm text-gray-600">
            سنتصل بك في ظرف 24 ساعة لتأكيد إشتراكك
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
