const WHATSAPP_NUMBER = "249929009797";
const FACEBOOK_PAGE_URL =
  "https://www.facebook.com/share/1AGXDGpKSw/?mibextid=wwXIfr";
const TIKTOK_PAGE_URL =
  "https://www.tiktok.com/@physique.gym4?_r=1&_t=ZS-98gp6Uy2OFW";
const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "السلام عليكم، أود الاستفسار عن صالة فيزيك الرياضية."
)}`;
const quickLinks = [
  { label: "الرئيسية", href: "#home" },
  { label: "عن الصالة", href: "#about" },
  { label: "البرامج التدريبية", href: "#services" },
  { label: "الاشتراكات", href: "#subscriptions" },
  { label: "الفروع", href: "#branches" },
];
const programs = [
  "كمال الأجسام",
  "اللياقة البدنية",
  "الزومبا والأيروبك",
  "تمارين المقاومة والكارديو",
];
const branches = [
  {
    name: "أم درمان - الدوحة",
    address: "شارع 6 جنوب كبري ود البشير، جوار صيدلية الحجر الأسود",
  },
  {
    name: "شرق النيل - أم دوم",
    address: "شارع أم دوم، عمارة أولاد أم درمان، مقابل بنك فيصل سابقاً وجنوب المجمع الأردني",
  },
];
function FooterColumn({ title, children }) {
  return (
    <div className="physique-footer__column">
      <h2 className="physique-footer__heading">{title}</h2>
      {children}
    </div>
  );
}
export default function Footer() {
  return (
    <footer className="physique-footer" id="contacts" dir="rtl">
      <div className="physique-footer__inner">
        <FooterColumn title="روابط سريعة">
          <nav aria-label="روابط سريعة">
            <ul className="physique-footer__list">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a className="physique-footer__link" href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </FooterColumn>
        <FooterColumn title="برامجنا">
          <ul className="physique-footer__list">
            {programs.map((program) => (
              <li key={program}>
                <a className="physique-footer__link" href="#services">
                  {program}
                </a>
              </li>
            ))}
          </ul>
        </FooterColumn>
        <FooterColumn title="تواصل معنا">
          <p className="physique-footer__text">
            للاستفسارات والحجز، يسعدنا تواصلك معنا عبر واتساب.
          </p>
          <a
            className="physique-footer__phone"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            dir="ltr"
            aria-label="تواصل معنا عبر واتساب على الرقم +249 92 900 9797"
          >
            +249 92 900 9797
          </a>
          <div className="physique-footer__socials" aria-label="حساباتنا">
            <a
              className="physique-footer__social-link"
              href={FACEBOOK_PAGE_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="صفحتنا على فيسبوك"
              title="فيسبوك"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M13.5 21v-7.1h2.4l.36-2.77H13.5V9.36c0-.8.22-1.34 1.38-1.34h1.48V5.54c-.26-.03-1.16-.11-2.2-.11-2.18 0-3.67 1.33-3.67 3.77v1.93H8.03v2.77h2.46V21h3.01Z" />
              </svg>
            </a>
            <a
              className="physique-footer__social-link"
              href={TIKTOK_PAGE_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="حسابنا على تيك توك"
              title="تيك توك"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.43v13.67a2.9 2.9 0 0 1-2.9 2.9 2.9 2.9 0 1 1 2.4-4.52v-3.7a6.32 6.32 0 1 0 3.93 5.84V9.26a8.25 8.25 0 0 0 4.83 1.55V7.4a4.85 4.85 0 0 1-1.06-.71Z" />
              </svg>
            </a>
          </div>
        </FooterColumn>
        <FooterColumn title="فروعنا">
          <div className="physique-footer__branches">
            {branches.map((branch) => (
              <div className="physique-footer__branch" key={branch.name}>
                <h3>{branch.name}</h3>
                <p>{branch.address}</p>
              </div>
            ))}
          </div>
        </FooterColumn>
      </div>
      <div className="physique-footer__bottom">
        <p className="physique-footer__copyright">
          © {new Date().getFullYear()} صالة فيزيك الرياضية — جميع الحقوق محفوظة.
        </p>
        <p className="physique-footer__credit">
          صُنع ب {" "} 💪 {" "} بواسطة{" "}
          <a
            href="https://msm.technology/"
            target="_blank"
            rel="noopener noreferrer"
          >
            MSM Technology
          </a>
        </p>
      </div>
    </footer>
  );
}