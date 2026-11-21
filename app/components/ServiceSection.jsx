"use client";

import { useState } from "react";
import Image from "next/image";

const filters = [
  { id: "all", label: "كل البرامج" },
  { id: "men", label: "برامج الرجال" },
  { id: "women", label: "برامج السيدات" },
];

const services = [
  {
    id: "bodybuilding",
    title: "كمال أجسام",
    category: "men",
    categoryLabel: "للرجال",
    image: "/services-men-bodybuilding.jpg",
    alt: "رجل يتدرب بالأوزان في صالة رياضية",
  },
  {
    id: "men-fitness",
    title: "لياقة بدنية",
    category: "men",
    categoryLabel: "للرجال",
    image: "/services-men-fitness.jpg",
    alt: "رجل يؤدي تمرين لياقة باستخدام الحبال الرياضية",
  },
  {
    id: "zumba",
    title: "زومبا",
    category: "women",
    categoryLabel: "للسيدات",
    image: "/services-women-zumba.jpg",
    alt: "سيدات بملابس رياضية محتشمة في حصة زومبا جماعية",
  },
  {
    id: "aerobics",
    title: "أيروبك",
    category: "women",
    categoryLabel: "للسيدات",
    image: "/services-women-aerobics.jpg",
    alt: "سيدات بملابس رياضية محتشمة في حصة أيروبك",
  },
  {
    id: "resistance",
    title: "تمارين مقاومة",
    category: "women",
    categoryLabel: "للسيدات",
    image: "/services-women-resistance.jpg",
    alt: "سيدة بملابس رياضية محتشمة تؤدي تمرين مقاومة",
  },
  {
    id: "cardio",
    title: "كارديو",
    category: "women",
    categoryLabel: "للسيدات",
    image: "/services-women-cardio.jpg",
    alt: "سيدة بملابس رياضية محتشمة تستخدم جهاز الإليبتيكال",
  },
];

export default function ServicesSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const visibleServices =
    activeFilter === "all"
      ? services
      : services.filter((service) => service.category === activeFilter);

  return (
    <section
      id="services"
      className="physique-services"
      dir="rtl"
      aria-labelledby="physique-services-title"
    >
      <div className="physique-services__container">
        <header className="physique-services__header">
          <p className="physique-services__eyebrow">
            برامج فيزيك الرياضية
          </p>

          <h2
            id="physique-services-title"
            className="physique-services__title"
          >
            برامج تدريبية
            <span> لكل هدف</span>
          </h2>

          <p className="physique-services__description">
             برامج وحصص تدريبية متنوعة للرجال والسيدات في كل فروع الصالة {" "}
                <strong >صحتك .. لياقتك .. هدفنا. </strong> 
          </p>
        </header>

        <div
          className="physique-services__filters"
          role="group"
          aria-label="تصفية البرامج التدريبية"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              type="button"
              className={`physique-services__filter ${
                activeFilter === filter.id
                  ? "physique-services__filter--active"
                  : ""
              }`}
              aria-pressed={activeFilter === filter.id}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div
          className="physique-services__grid"
          aria-live="polite"
          aria-relevant="additions removals"
        >
          {visibleServices.map((service) => (
            <article
              className="physique-services__card"
              key={service.id}
            >
              <Image
                src={service.image}
                alt={service.alt}
                fill
                sizes="(max-width: 620px) 90vw, (max-width: 900px) 45vw, 31vw"
                className="physique-services__image"
              />

              <div
                className="physique-services__overlay"
                aria-hidden="true"
              />

              <span className="physique-services__category">
                {service.categoryLabel}
              </span>

              <div className="physique-services__card-content">
                <h3 className="physique-services__card-title">
                  {service.title}
                </h3>
                <span
                  className="physique-services__card-mark"
                  aria-hidden="true"
                >
                  ✦
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}