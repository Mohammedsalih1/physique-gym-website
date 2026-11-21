import Image from "next/image";

const aboutStats = [
  {
    value: "7",
    unit: "سنوات",
    description: "من القوة والإنجازات",
  },
  {
    value: "2",
    unit: "فرعان",
    description: "أم درمان - الدوحة وشرق النيل - أم دوم",
  },
  {
    value: "1",
    unit: "هدف",
    description: "صحتك .. لياقتك .. هدفنا",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="physique-about"
      dir="rtl"
      aria-labelledby="physique-about-title"
    >
      <div className="physique-about__container">
        <div className="physique-about__copy">
          <p className="physique-about__eyebrow">قصتنا في فيزيك</p>

          <h2 id="physique-about-title" className="physique-about__title">
            سبع سنوات من
            <span> القوة والإنجاز</span>
          </h2>

          <p className="physique-about__description">
            منذ تأسيس صالة فيزيك الرياضية، نعمل على أن تكون رحلتكم نحو صحة أفضل
            ولياقة أقوى هدفنا كل يوم. نحتفل معكم بمرور سبع سنوات من الالتزام
            والتدريب، ونواصل الرحلة معًا.
          </p>

          <p className="physique-about__tagline">
            صحتك <span>·</span> لياقتك <span>·</span> هدفنا
          </p>

          <ul className="physique-about__branches" aria-label="فروع الصالة">
            <li>أم درمان - الدوحة</li>
            <li>شرق النيل - أم دوم</li>
          </ul>

          <a className="physique-about__button" href="#subscriptions">
            اكتشف الاشتراكات
            <span aria-hidden="true">←</span>
          </a>
        </div>

        <figure className="physique-about__visual">
          <div className="physique-about__image-frame">
            <Image
              src="/physique-about-athlete.jpg"
              alt="رياضي في وضعية حماسية داخل صالة تدريب بإضاءة دافئة"
              fill
              sizes="(max-width: 620px) 90vw, (max-width: 900px) 42vw, 32vw"
              className="physique-about__image"
            />
            <div className="physique-about__image-shade" aria-hidden="true" />
            <figcaption className="physique-about__image-caption">
              قوة <span>·</span> التزام <span>·</span> إنجاز
            </figcaption>
          </div>
        </figure>

        <div className="physique-about__stats" aria-label="إنجازات فيزيك">
          {aboutStats.map((stat) => (
            <article className="physique-about__stat-card" key={stat.unit}>
              <span className="physique-about__stat-number">{stat.value}</span>
              <span className="physique-about__stat-unit">{stat.unit}</span>
              <p className="physique-about__stat-description">
                {stat.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}