"use client"

import { useState } from "react";
const WHATSAPP_NUMBER = "249929009797";
function createWhatsAppLink(planName) {
  const message = `مرحبًا صالة فيزيك الرياضية، أود الاستفسار عن الاشتراك في: ${planName}.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
const subscriptionTabs = [
  { id: "men", label: "اشتراكات الرجال" },
  { id: "women", label: "اشتراكات السيدات" },
  { id: "schedule", label: "أيام ومواعيد التدريب" },
];
const menPlans = [
  {
    id: "men-12",
    title: "12 تمرين جيم",
    description: "مع مدرب + نظام غذائي",
    prices: [
      { term: "شهر", amount: "180,000", currency: "ج" },
      { term: "3 شهور", amount: "480,000", currency: "ج" },
    ],
  },
  {
    id: "men-16",
    title: "16 تمرين جيم",
    description: "مع مدرب + نظام غذائي",
    prices: [
      { term: "شهر", amount: "205,000", currency: "ج" },
      { term: "3 شهور", amount: "490,000", currency: "ج" },
    ],
  },
  {
    id: "men-open",
    title: "جيم مفتوح",
    description: "مع مدرب + نظام غذائي",
    prices: [
      { term: "شهر", amount: "240,000", currency: "ج" },
      { term: "3 شهور", amount: "570,000", currency: "ج" },
    ],
  },
  {
    id: "men-session",
    title: "حصة ساعة ونصف",
    description: "سعر الحصة",
    prices: [{ term: "حصة واحدة", amount: "20,000", currency: "ج" }],
  },
];
const womenPlans = [
  {
    id: "women-gym",
    title: "جيم فقط",
    description: "اشتراك شهر",
    prices: [{ term: "شهر", amount: "180,000", currency: "ج" }],
  },
  {
    id: "women-classes",
    title: "كلاسات فقط",
    description: "اشتراك شهر",
    prices: [{ term: "شهر", amount: "180,000", currency: "ج" }],
  },
  {
    id: "women-combined",
    title: "جيم + كلاسات",
    description: "اشتراك شهر",
    prices: [{ term: "شهر", amount: "210,000", currency: "ج" }],
  },
  {
    id: "women-session",
    title: "حصة ساعة ونصف",
    description: "سعر الحصة",
    prices: [{ term: "حصة واحدة", amount: "20,000", currency: "ج" }],
  },
];
const menSchedule = [
  {
    days: "السبت - الإثنين - الأربعاء",
    time: "09:00 ص - 02:00 م",
  },
  {
    days: "السبت - الإثنين - الأربعاء",
    time: "04:00 م - 10:00 م",
  },
  {
    days: "الأحد - الثلاثاء - الخميس",
    time: "06:00 م - 10:00 م",
  },
];
const womenSchedule = [
  {
    days: "الأحد - الثلاثاء - الخميس",
    time: "09:00 - 07:00",
  },
];
function PriceCard({ plan }) {
  return (
    <article className="physique-subscriptions__card">
      <div className="physique-subscriptions__card-heading">
        <span className="physique-subscriptions__card-mark" aria-hidden="true">
          ✦
        </span>
        <h3 className="physique-subscriptions__plan-title">{plan.title}</h3>
        <p className="physique-subscriptions__plan-description">
          {plan.description}
        </p>
      </div>
      <div
        className="physique-subscriptions__prices"
        aria-label={`أسعار ${plan.title}`}
      >
        {plan.prices.map((price) => (
          <div className="physique-subscriptions__price-row" key={price.term}>
            <span className="physique-subscriptions__price-term">
              {price.term}
            </span>
            <span
              className="physique-subscriptions__price-amount"
              dir="ltr"
            >
              {price.amount} <span>{price.currency}</span>
            </span>
          </div>
        ))}
      </div>
      <a
        className="physique-subscriptions__button"
        href={createWhatsAppLink(plan.title)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`اشترك في ${plan.title} عبر واتساب`}
      >
        اشترك الآن
      </a>
    </article>
  );
}
function ScheduleCard({ title, schedule }) {
  return (
    <article className="physique-subscriptions__schedule-card">
      <h3 className="physique-subscriptions__schedule-title">{title}</h3>
      <div className="physique-subscriptions__schedule-list">
        {schedule.map((item, index) => (
          <div className="physique-subscriptions__schedule-row" key={index}>
            <span className="physique-subscriptions__schedule-days">
              {item.days}
            </span>
            <span
              className="physique-subscriptions__schedule-time"
              dir="ltr"
            >
              {item.time}
            </span>
          </div>
        ))}
      </div>
    </article>
  );
}
export default function SubscriptionsSection() {
  const [activeTab, setActiveTab] = useState("men");
  return (
    <section
      id="subscriptions"
      className="physique-subscriptions"
      dir="rtl"
      aria-labelledby="physique-subscriptions-title"
    >
      <div className="physique-subscriptions__container">
        <header className="physique-subscriptions__header">
          <div className="physique-subscriptions__heading">
            <h2
              id="physique-subscriptions-title"
              className="physique-subscriptions__title"
            >
              باقات <span>الاشتراك</span>
            </h2>
          </div>
          <p className="physique-subscriptions__intro">
            اختر الباقة المناسبة من اشتراكات الرجال والسيدات في فرعي أم درمان -
            الدوحة وشرق النيل - أم دوم.{" "}
            <strong>صحتك .. لياقتك .. هدفنا</strong>
          </p>
        </header>
        <div
          className="physique-subscriptions__tabs"
          role="group"
          aria-label="اختر الاشتراكات أو مواعيد التدريب"
        >
          {subscriptionTabs.map((tab) => (
            <button
              className={`physique-subscriptions__tab ${
                activeTab === tab.id
                  ? "physique-subscriptions__tab--active"
                  : ""
              }`}
              type="button"
              key={tab.id}
              aria-pressed={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div
          className="physique-subscriptions__panel"
          aria-live="polite"
        >
          {activeTab === "men" && (
            <div className="physique-subscriptions__grid">
              {menPlans.map((plan) => (
                <PriceCard plan={plan} key={plan.id} />
              ))}
            </div>
          )}
          {activeTab === "women" && (
            <div className="physique-subscriptions__grid">
              {womenPlans.map((plan) => (
                <PriceCard plan={plan} key={plan.id} />
              ))}
            </div>
          )}
          {activeTab === "schedule" && (
            <div className="physique-subscriptions__schedule-grid">
              <ScheduleCard
                title="مواعيد تدريب الرجال"
                schedule={menSchedule}
              />
              <ScheduleCard
                title="مواعيد تدريب السيدات"
                schedule={womenSchedule}
              />
            </div>
          )}
        </div>
        <p className="physique-subscriptions__tagline">
          صحتك <span>..</span> لياقتك <span>..</span> هدفنا
        </p>
      </div>
    </section>
  );
}