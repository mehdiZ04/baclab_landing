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
  "أريانة",
  "باجة",
  "بن عروس",
  "بنزرت",
  "تونس",
  "جندوبة",
  "زغوان",
  "سليانة",
  "سوسة",
  "صفاقس",
  "قابس",
  "قبلي",
  "قفصة",
  "قليبية",
  "الكاف",
  "القيروان",
  "مدنين",
  "المنستير",
  "المهدية",
  "منوبة",
  "نابل",
  "سيدي بوزيد",
  "تطاوين",
  "توزر",
];

type FormData = {
  firstName: string;
  lastName: string;
  phone: string;
  parentPhone: string;
  state: string;
  section: string;
  address: string;
  paymentMethod: string;
};

type SubmitMessage = {
  type: "success" | "error";
  text: string;
} | null;

export default function RegistrationForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    phone: "",
    parentPhone: "",
    state: "",
    section: "",
    address: "",
    paymentMethod: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<SubmitMessage>(null);

  const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^[0-9]{8}$/;
    return phoneRegex.test(phone);
  };

  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "الإسم مطلوب";
    } else if (formData.firstName.trim().length < 2) {
      newErrors.firstName = "الإسم يجب أن يحتوي على حرفين على الأقل";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "اللقب مطلوب";
    } else if (formData.lastName.trim().length < 2) {
      newErrors.lastName = "اللقب يجب أن يحتوي على حرفين على الأقل";
    }

    if (!formData.phone) {
      newErrors.phone = "رقم الهاتف مطلوب";
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = "رقم الهاتف يجب أن يحتوي على 8 أرقام";
    }

    if (!formData.parentPhone) {
      newErrors.parentPhone = "رقم هاتف الولي مطلوب";
    } else if (!validatePhone(formData.parentPhone)) {
      newErrors.parentPhone = "رقم هاتف الولي يجب أن يحتوي على 8 أرقام";
    }

    if (!formData.state) {
      newErrors.state = "يجب اختيار الولاية";
    }

    if (!formData.section) {
      newErrors.section = "يجب اختيار الشعبة";
    }

    if (!formData.address.trim()) {
      newErrors.address = "العنوان مطلوب";
    } else if (formData.address.trim().length < 10) {
      newErrors.address = "العنوان قصير جدا";
    }

    if (!formData.paymentMethod) {
      newErrors.paymentMethod = "يجب اختيار طريقة الدفع";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange =
    (field: keyof FormData) =>
    (value: string | React.ChangeEvent<HTMLInputElement>) => {
      const newValue =
        typeof value === "string" ? value : value.target.value || "";
      setFormData((prev) => ({ ...prev, [field]: newValue }));
      if (errors[field]) {
        setErrors((prev) => ({ ...prev, [field]: "" }));
      }
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitMessage(null);

    if (!validateForm()) {
      setSubmitMessage({
        type: "error",
        text: "يرجى تصحيح الأخطاء في الاستمارة",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitMessage({
          type: "success",
          text: "تم التسجيل بنجاح! سنتصل بك قريبا لتأكيد اشتراكك.",
        });
        setFormData({
          firstName: "",
          lastName: "",
          phone: "",
          parentPhone: "",
          state: "",
          section: "",
          address: "",
          paymentMethod: "",
        });
        setErrors({});
      } else {
        setSubmitMessage({
          type: "error",
          text: "حدث خطأ أثناء التسجيل. يرجى المحاولة مرة أخرى.",
        });
      }
    } catch {
      setSubmitMessage({
        type: "error",
        text: "حدث خطأ في الإتصال. حاول من جديد بعد لحظات.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="registration"
      className="bg-slate-100 px-4 py-12 dark:bg-slate-950"
    >
      <div className="mx-auto max-w-4xl">
        <Card className="mx-auto max-w-3xl border-slate-200 shadow-lg dark:border-slate-800 dark:bg-slate-900">
          <CardHeader className="space-y-2 text-right">
            <CardTitle className="text-xl font-bold md:text-2xl">
              سجل الآن واحجز مقعدك
            </CardTitle>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              املأ الاستمارة في أقل من دقيقة وسنتصل بك في ظرف 24 ساعة لتأكيد
              اشتراكك وإعطائك كل التفاصيل.
            </p>
          </CardHeader>
          <CardContent>
            <form
              onSubmit={handleSubmit}
              className="space-y-4 text-right"
              dir="rtl"
            >
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-1.5">
                  <Label htmlFor="firstName">الإسم *</Label>
                  <Input
                    id="firstName"
                    placeholder="أدخل إسمك"
                    value={formData.firstName}
                    onChange={handleChange("firstName")}
                    className={errors.firstName ? "border-red-500" : ""}
                  />
                  {errors.firstName && (
                    <p className="text-xs text-red-500">
                      {errors.firstName}
                    </p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="lastName">اللقب *</Label>
                  <Input
                    id="lastName"
                    placeholder="أدخل لقبك"
                    value={formData.lastName}
                    onChange={handleChange("lastName")}
                    className={errors.lastName ? "border-red-500" : ""}
                  />
                  {errors.lastName && (
                    <p className="text-xs text-red-500">
                      {errors.lastName}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-1.5">
                  <Label htmlFor="phone">رقم الهاتف *</Label>
                  <Input
                    id="phone"
                    placeholder="مثال: 12345678"
                    maxLength={8}
                    value={formData.phone}
                    onChange={handleChange("phone")}
                    className={errors.phone ? "border-red-500" : ""}
                  />
                  {errors.phone && (
                    <p className="text-xs text-red-500">{errors.phone}</p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="parentPhone">رقم هاتف الولي *</Label>
                  <Input
                    id="parentPhone"
                    placeholder="مثال: 12345678"
                    maxLength={8}
                    value={formData.parentPhone}
                    onChange={handleChange("parentPhone")}
                    className={errors.parentPhone ? "border-red-500" : ""}
                  />
                  {errors.parentPhone && (
                    <p className="text-xs text-red-500">
                      {errors.parentPhone}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-1.5">
                  <Label>الولاية *</Label>
                  <Select
                    value={formData.state}
                    onValueChange={(value: string) => handleChange("state")(value)}
                  >
                    <SelectTrigger
                      className={errors.state ? "border-red-500" : ""}
                    >
                      <SelectValue placeholder="اختر ولايتك" />
                    </SelectTrigger>
                    <SelectContent>
                      {tunisianStates.map((state) => (
                        <SelectItem key={state} value={state}>
                          {state}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.state && (
                    <p className="text-xs text-red-500">{errors.state}</p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <Label>الشعبة *</Label> 
                  <Select
                    value={formData.section}
                    onValueChange={(value:string) => handleChange("section")(value)}
                  >
                    <SelectTrigger
                      className={errors.section ? "border-red-500" : ""}
                    >
                      <SelectValue placeholder="اختر شعبة الدراسة" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="رياضيات">رياضيات</SelectItem>
                      <SelectItem value="علوم تجريبية">
                        علوم تجريبية
                      </SelectItem>
                      <SelectItem value="تقنية">تقنية</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.section && (
                    <p className="text-xs text-red-500">{errors.section}</p>
                  )}
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="address">العنوان الكامل *</Label>
                <Input
                  id="address"
                  placeholder="أدخل عنوانك الكامل"
                  value={formData.address}
                  onChange={handleChange("address")}
                  className={errors.address ? "border-red-500" : ""}
                />
                {errors.address && (
                  <p className="text-xs text-red-500">{errors.address}</p>
                )}
              </div>

              {/* طريقة الدفع - نفس ستايل الصورة */}
              <div className="space-y-3">
                <Label className="text-base font-semibold">طريقة الدفع *</Label>

                <div
                  className={[
                    "flex flex-col gap-3 rounded-xl border p-4 text-right",
                    "bg-white shadow-sm dark:bg-slate-900",
                    errors.paymentMethod
                      ? "border-red-500"
                      : "border-emerald-400",
                  ].join(" ")}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <p className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                        Paiement à la livraison
                      </p>
                      <p className="text-xs text-slate-600 dark:text-slate-300">
                        (espèce :{" "}
                        <span className="line-through text-slate-400">
                          247
                        </span>{" "}
                        <span className="font-bold text-emerald-600">
                          147 DT
                        </span>
                        )
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        setFormData((prev) => ({
                          ...prev,
                          paymentMethod: "cash_on_delivery",
                        }))
                      }
                      className="mt-1"
                    >
                      <span
                        className={[
                          "flex h-5 w-5 items-center justify-center rounded-full border",
                          formData.paymentMethod === "cash_on_delivery"
                            ? "border-emerald-500 bg-emerald-500"
                            : "border-slate-400 bg-white dark:bg-slate-900",
                        ].join(" ")}
                      >
                        <span
                          className={[
                            "h-2.5 w-2.5 rounded-full",
                            formData.paymentMethod === "cash_on_delivery"
                              ? "bg-white"
                              : "bg-transparent",
                          ].join(" ")}
                        />
                      </span>
                    </button>
                  </div>

                  <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-200">
                    يجيك للدار livreur يعطيك ورقة فيها معطيات حسابك الكل
                    (mot de passe و l&apos;adresse) وحتى lien متاع
                    الplatform الي باش تقرا فيها. إنت فقط تعمر المعطيات
                    وتأكد الإشتراك.
                  </p>
                </div>

                {errors.paymentMethod && (
                  <p className="text-xs text-red-500">
                    {errors.paymentMethod}
                  </p>
                )}
              </div>

              {submitMessage && (
                <p
                  className={`text-sm ${
                    submitMessage.type === "success"
                      ? "text-emerald-600"
                      : "text-red-500"
                  }`}
                >
                  {submitMessage.text}
                </p>
              )}

              <div className="space-y-1">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-2 w-full bg-emerald-600 text-white text-base font-semibold hover:bg-emerald-500"
                >
                  {isSubmitting ? "جاري تسجيل طلبك..." : "تأكيد الإشتراك"}
                </Button>
                <p className="text-center text-xs text-slate-500 dark:text-slate-400">
                  سنتصل بك في ظرف 24 ساعة لتأكيد اشتراكك والرد على أسئلتك.
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
