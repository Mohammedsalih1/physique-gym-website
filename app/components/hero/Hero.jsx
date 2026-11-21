// import Image from "next/image";
// // import styles from "./Hero.module.css";
// import styles from "./Hero.module.css";

// const navLinks = [
//   { label: "الرئيسية", href: "#home", active: true },
//   { label: "عن الصالة", href: "#about" },
//   { label: "الخدمات", href: "#services" },
//   { label: "الاشتراكات", href: "#subscriptions" },
//   { label: "الفروع", href: "#branches" },
// ];

// const upperActivities = ["تمارين المقاومة", "بيلاتس", "كارديو", "بلانك"];
// const lowerActivities = ["رفع الأثقال", "بيلاتس", "كارديو", "تمارين القوة"];

// function TickerRow({ activities, tone }) {
//   const tickerClass =
//     tone === "orange" ? styles.tickerOrange : styles.tickerDark;

//   return (
//     <div className={`${styles.ticker} ${tickerClass}`}>
//       <div className={styles.tickerTrack}>
//         {[0, 1].map((copy) => (
//           <div className={styles.tickerGroup} key={copy}>
//             {activities.map((activity, index) => (
//               <span
//                 className={styles.tickerItem}
//                 key={`${copy}-${activity}-${index}`}
//               >
//                 {activity}
//                 <span className={styles.tickerStar}>✦</span>
//               </span>
//             ))}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default function Hero() {
//   return (
//     <section
//       id="home"
//       className={styles.hero}
//       dir="rtl"
//       aria-labelledby="hero-title"
//     >
//       <header className={styles.header}>
//         <a className={styles.brand} href="#home" aria-label="فيزيك جيم">
//           <span className={styles.logoFrame}>
//             <Image
//               src="/logo.jpeg"
//               alt=""
//               width={460}
//               height={280}
//               priority
//               className={styles.logoImage}
//             />
//           </span>

//           <span className={styles.brandName}>
//             PHYSIQUE <span>GYM</span>
//           </span>
//         </a>

//         <nav className={styles.navigation} aria-label="التنقل الرئيسي">
//           {navLinks.map((link) => (
//             <a
//               className={`${styles.navLink} ${
//                 link.active ? styles.navLinkActive : ""
//               }`}
//               href={link.href}
//               key={link.href}
//             >
//               {link.label}
//             </a>
//           ))}
//         </nav>

//         <a className={styles.contactButton} href="#contact">
//           تواصل معنا
//         </a>
//       </header>

//       <div className={styles.heroContent}>
//         <h1 id="hero-title" className={styles.heroTitle}>
//           <span className={styles.titleAccent}>صحتك</span>
//           <span>لياقتك</span>
//           <span className={styles.titleAccent}>هدفنا!</span>
//         </h1>
//       </div>

//       <div className={styles.tickerStack} aria-hidden="true">
//         <TickerRow activities={upperActivities} tone="orange" />
//         <TickerRow activities={lowerActivities} tone="dark" />
//       </div>
//     </section>
//   );
// }

// ==============================================

// import Image from "next/image";

// const navLinks = [
//   { label: "الرئيسية", href: "#home", active: true },
//   { label: "عن الصالة", href: "#about" },
//   { label: "الخدمات", href: "#services" },
//   { label: "الاشتراكات", href: "#subscriptions" },
//   { label: "الفروع", href: "#branches" },
// ];

// const upperActivities = ["تمارين المقاومة", "بيلاتس", "كارديو", "بلانك"];
// const lowerActivities = ["رفع الأثقال", "بيلاتس", "كارديو", "تمارين القوة"];

// function TickerRow({ activities, tone }) {
//   const tickerClass =
//     tone === "orange" ? "ticker-orange" : "ticker-dark";

//   return (
//     <div className={`ticker ${tickerClass}`}>
//       <div className="ticker-track">
//         {[0, 1].map((copy) => (
//           <div className="ticker-group" key={copy}>
//             {activities.map((activity, index) => (
//               <span
//                 className="ticker-item"
//                 key={`${copy}-${activity}-${index}`}
//               >
//                 {activity}
//                 <span className="ticker-star">✦</span>
//               </span>
//             ))}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default function Hero() {
//   return (
//     <section
//       id="home"
//       className="hero"
//       dir="rtl"
//       aria-labelledby="hero-title"
//     >
//       <header className="hero-header">
//         <a className="brand" href="#home" aria-label="فيزيك جيم">
//           <span className="logo-frame">
//             <Image
//               src="/logo.jpeg"
//               alt="شعار صالة فيزيك الرياضية"
//               width={460}
//               height={280}
//               priority
//               className="logo-image"
//             />
//           </span>

//           <span className="brand-name">
//             PHYSIQUE <span>GYM</span>
//           </span>
//         </a>

//         <nav className="navigation" aria-label="التنقل الرئيسي">
//           {navLinks.map((link) => (
//             <a
//               className={`nav-link ${
//                 link.active ? "nav-link-active" : ""
//               }`}
//               href={link.href}
//               key={link.href}
//             >
//               {link.label}
//             </a>
//           ))}
//         </nav>

//         <a className="contact-button" href="#contact">
//           تواصل معنا
//         </a>
//       </header>

//       <div className="hero-content">
//         <h1 id="hero-title" className="hero-title">
//           <span className="title-accent">صحتك</span>
//           <span>لياقتك</span>
//           <span className="title-accent">هدفنا!</span>
//         </h1>
//       </div>

//       <div className="ticker-stack" aria-hidden="true">
//         <TickerRow activities={upperActivities} tone="orange" />
//         <TickerRow activities={lowerActivities} tone="dark" />
//       </div>
//     </section>
//   );
// }

"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
const anniversaryText = "٧ سنوات من القوة والإنجازات";
const navLinks = [
  { label: "الرئيسية", href: "#home", active: true },
  { label: "عن الصالة", href: "#about" },
  { label: "الخدمات", href: "#services" },
  { label: "الاشتراكات", href: "#subscriptions" },
  { label: "الفروع", href: "#branches" },
];
const upperActivities = ["تمارين المقاومة", "أيروبك", "كارديو", "كمال اجسام"];
const lowerActivities = ["رفع الأثقال", "زومبا", "كارديو", "تمارين القوة"];
function AnniversaryBanner() {
  return (
    <div
      className="physique-anniversary-banner"
      role="note"
      aria-label="نحتفل بمرور سبع سنوات من القوة والإنجازات"
    >
      <div className="physique-anniversary-track" aria-hidden="true">
        {[0].map((copy) => (
          <span className="physique-anniversary-copy" key={copy}>
            ✦ {anniversaryText} ✦
          </span>
        ))}
      </div>
    </div>
  );
}
function TickerRow({ activities, tone }) {
  const toneClass =
    tone === "orange"
      ? "physique-ticker--orange"
      : "physique-ticker--dark";
  return (
    <div className={`physique-ticker ${toneClass}`}>
      <div className="physique-ticker-track">
        {[0, 1].map((copy) => (
          <div className="physique-ticker-group" key={copy}>
            {activities.map((activity, index) => (
              <span
                className="physique-ticker-item"
                key={`${copy}-${activity}-${index}`}
              >
                {activity}
                <span className="physique-ticker-star">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    if (!menuOpen) return;
    function handleEscape(event) {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    }
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [menuOpen]);
  return (
    <section
      id="home"
      className="physique-hero"
      dir="rtl"
      aria-labelledby="physique-hero-title"
    >
      <header className="physique-header">
        <a className="physique-brand" href="#home" aria-label="فيزيك جيم">
          <span className="physique-logo-frame">
            <Image
              src="/logo.png"
              alt=""
              width={460}
              height={280}
              priority
              className="physique-logo-image"
            />
          </span>
          <span className="physique-brand-name">
            PHYSIQUE <span>GYM</span>
          </span>
        </a>
        <nav
          id="physique-primary-navigation"
          className={`physique-navigation ${
            menuOpen ? "physique-navigation--open" : ""
          }`}
          aria-label="التنقل الرئيسي"
        >
          {navLinks.map((link) => (
            <a
              className={`physique-nav-link ${
                link.active ? "physique-nav-link--active" : ""
              }`}
              href={link.href}
              key={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="physique-header-actions">
          <a className="physique-contact-button" href="#contacts">
            تواصل معنا
          </a>
          <button
            className={`physique-menu-toggle ${
              menuOpen ? "is-open" : ""
            }`}
            type="button"
            aria-label={menuOpen ? "إغلاق القائمة" : "فتح القائمة"}
            aria-expanded={menuOpen}
            aria-controls="physique-primary-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
      </header>
      <div className="physique-hero-content">
        {/* <AnniversaryBanner /> */}
        <h1 id="physique-hero-title" className="physique-hero-title">
          <span className="physique-title-accent">صحتك</span>
          <span>لياقتك</span>
          <span className="physique-title-accent">هدفنا!</span>
        </h1>
      </div>
      <div className="physique-ticker-stack" aria-hidden="true">
        <TickerRow activities={upperActivities} tone="orange" />
        <TickerRow activities={lowerActivities} tone="dark" />
      </div>
    </section>
  );
}