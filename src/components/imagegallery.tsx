import { useState, useEffect, useRef } from "react";

const galleryImages = [
  { filename: "arunachalam.jpeg", name: "Arunachalam" },
  { filename: "download (2).jpeg", name: "Download (2)" },
  { filename: "image1.jpg", name: "Image 1" },
  { filename: "Iskcon temple at tirupati.jpeg", name: "Iskcon Temple at Tirupati" },
  { filename: "kanipakam.jpeg", name: "Kanipakam" },
  { filename: "kapila theertham.jpeg", name: "Kapila Theertham" },
  { filename: "lord vishnu.jpeg", name: "Lord Vishnu" },
  { filename: "RAJAGOPURAM SRIRANGAM.jpeg", name: "Rajagopuram Srirangam" },
  { filename: "sri kalahasti.jpeg", name: "Sri Kalahasti" },
  { filename: "sri rangam.jpeg", name: "Sri Rangam" },
  { filename: "Swarnagiri temple.jpeg", name: "Swarnagiri Temple" },
  { filename: "tirumala temple.jpeg", name: "Tirumala Temple" },
  { filename: "Tirumala.jpeg", name: "Tirumala" },
  { filename: "tirupati.jpeg", name: "Tirupati" },
];

export function ImageGallery() {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    setFade(false);
    const fadeTimer = setTimeout(() => setFade(true), 60);

    timeoutRef.current = window.setTimeout(() => {
      setFade(false);
      setTimeout(() => setCurrent((c) => (c + 1) % galleryImages.length), 400);
    }, 3200);

    return () => {
      clearTimeout(fadeTimer);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current]);

  return (
    <div className="gallery-grid-box">
      <div className="gallery-img-wrap gallery-img-original">
        <img
          src={`/${galleryImages[current].filename}`}
          alt={galleryImages[current].name}
          className={`gallery-img gallery-img-crossfade ${fade ? "fade-in" : "fade-out"}`}
          key={galleryImages[current].filename}
          style={{ maxWidth: "100%", height: "auto", width: "auto", maxHeight: "400px" }}
        />
        <div className="gallery-img-caption">{galleryImages[current].name}</div>
      </div>
      <div className="gallery-indicators">
        {galleryImages.map((_, idx) => (
          <span
            key={idx}
            className={`gallery-indicator${idx === current ? " active" : ""}`}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  );
}
