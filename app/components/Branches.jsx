"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
const branches = [
  {
    id: "branch1",
    number: "01",
    name: "أم درمان - الدوحة",
    address: "شارع 6 جنوب كبري ود البشير، وجوار صيدلية الحجر الأسود.",
    photos: [
      {
        src: "/branch1-1.jpeg",
        alt: "صالة فيزيك الرياضية، فرع أم درمان - الدوحة، صورة 1",
      },
      {
        src: "/branch1-2.jpeg",
        alt: "صالة فيزيك الرياضية، فرع أم درمان - الدوحة، صورة 2",
      },
      {
        src: "/branch1-3.jpeg",
        alt: "صالة فيزيك الرياضية، فرع أم درمان - الدوحة، صورة 3",
      },
    ],
  },
  {
    id: "branch2",
    number: "02",
    name: "شرق النيل - أم دوم",
    address:
      "شارع أم دوم، عمارة أولاد أم درمان، مقابل بنك فيصل سابقًا وجنوب المجمع الأردني.",
    photos: [
      {
        src: "/branch2-1.jpeg",
        alt: "صالة فيزيك الرياضية، فرع شرق النيل - أم دوم، صورة 1",
      },
      {
        src: "/branch2-2.jpeg",
        alt: "صالة فيزيك الرياضية، فرع شرق النيل - أم دوم، صورة 2",
      },
      {
        src: "/branch2-3.jpeg",
        alt: "صالة فيزيك الرياضية، فرع شرق النيل - أم دوم، صورة 3",
      },
    ],
  },
];
const allBranchPhotos = branches.flatMap((branch) => branch.photos);
const branchFilters = [
  { id: "all", label: "كل الفروع" },
  { id: "branch1", label: "أم درمان - الدوحة" },
  { id: "branch2", label: "شرق النيل - أم دوم" },
];
export default function BranchesSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);
  const visibleBranches =
    activeFilter === "all"
      ? branches
      : branches.filter((branch) => branch.id === activeFilter);
  function showAdjacentImage(direction) {
    setSelectedImage((currentImage) => {
      if (!currentImage) return null;
      const currentIndex = allBranchPhotos.findIndex(
        (photo) => photo.src === currentImage.src
      );
      const nextIndex =
        (currentIndex + direction + allBranchPhotos.length) %
        allBranchPhotos.length;
      return allBranchPhotos[nextIndex];
    });
  }
  useEffect(() => {
    if (!selectedImage) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
      if (event.key === "ArrowRight") {
        showAdjacentImage(-1);
      }
      if (event.key === "ArrowLeft") {
        showAdjacentImage(1);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage]);
  return (
    <section
      id="branches"
      className="physique-branches"
      dir="rtl"
      aria-labelledby="physique-branches-title"
    >
      <div className="physique-branches__container">
        <header className="physique-branches__header">
          <p className="physique-branches__eyebrow">
            صالة فيزيك الرياضية · ٧ سنوات من القوة
          </p>
          <h2
            id="physique-branches-title"
            className="physique-branches__title"
          >
            فروعنا <span>وصور الصالة</span>
          </h2>
          <p className="physique-branches__description">
            تفضلوا بزيارة أقرب فرع إليكم، واكتشفوا مساحات التدريب في فيزيك.
            <strong> صحتك .. لياقتك .. هدفنا</strong>
          </p>
        </header>
        <div
          className="physique-branches__filters"
          role="group"
          aria-label="تصفية الفروع"
        >
          {branchFilters.map((filter) => (
            <button
              className={`physique-branches__filter ${
                activeFilter === filter.id
                  ? "physique-branches__filter--active"
                  : ""
              }`}
              type="button"
              key={filter.id}
              aria-pressed={activeFilter === filter.id}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>
        <div className="physique-branches__grid" aria-live="polite">
          {visibleBranches.map((branch) => (
            <article className="physique-branches__card" key={branch.id}>
              <div className="physique-branches__card-header">
                <span className="physique-branches__number">
                  {branch.number}
                </span>
                <div className="physique-branches__branch-info">
                  <h3 className="physique-branches__branch-name">
                    فرع {branch.name}
                  </h3>
                  <p className="physique-branches__address">
                    {branch.address}
                  </p>
                </div>
              </div>
              <div
                className="physique-branches__gallery"
                aria-label={`صور فرع ${branch.name}`}
              >
                {branch.photos.map((photo, index) => (
                  <button
                    className="physique-branches__photo-button"
                    type="button"
                    key={photo.src}
                    onClick={() => setSelectedImage(photo)}
                    aria-label={`تكبير ${photo.alt}`}
                  >
                    <span className="physique-branches__photo-frame">
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        sizes="(max-width: 620px) 30vw, (max-width: 900px) 28vw, 18vw"
                        className="physique-branches__photo"
                      />
                    </span>
                    <span
                      className="physique-branches__photo-shade"
                      aria-hidden="true"
                    />
                    <span className="physique-branches__photo-label">
                      {/* صورة {index + 1} */}
                      <span aria-hidden="true"> ⤢</span>
                    </span>
                  </button>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
      {selectedImage && (
        <div
          className="physique-branches__lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="عرض صورة الصالة مكبرة"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="physique-branches__lightbox-close"
            type="button"
            aria-label="إغلاق الصورة"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
          <div
            className="physique-branches__lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="physique-branches__lightbox-arrow"
              type="button"
              aria-label="الصورة السابقة"
              onClick={() => showAdjacentImage(-1)}
            >
              ‹

            </button>
            <div className="physique-branches__lightbox-image">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                sizes="90vw"
                className="physique-branches__lightbox-photo"
              />
            </div>
            <button
              className="physique-branches__lightbox-arrow"
              type="button"
              aria-label="الصورة التالية"
              onClick={() => showAdjacentImage(1)}
            >
              ›

            </button>
          </div>
          <p className="physique-branches__lightbox-caption">
            {selectedImage.alt}
          </p>
        </div>
      )}
    </section>
  );
}