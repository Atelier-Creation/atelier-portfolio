import React, { useEffect, useState } from "react";
import "./OurClient.css";

import c1 from "../../assets/BrandLogo/knobsshop-logo.png";
import c2 from "../../assets/BrandLogo/best-skincare-clinic-tune-aesthetics.webp";
import c3 from "../../assets/BrandLogo/bs-logo-2x.webp";
import c4 from "../../assets/BrandLogo/CandereLogoWhite.png";
import c5 from "../../assets/BrandLogo/cropped-NGJ-LOGO-FINAL_png.png";
import c6 from "../../assets/BrandLogo/goat-robotics-favicon.png";
import c7 from "../../assets/BrandLogo/golden-gateway.png";
import c8 from "../../assets/BrandLogo/light-bg-logo-j5PEJEGK.png";
import c9 from "../../assets/BrandLogo/logo-mayon.webp";
import c10 from "../../assets/BrandLogo/lyris-logo.png";
import c11 from "../../assets/BrandLogo/nobuy_logo.png";
import c12 from "../../assets/BrandLogo/sushruta_logo.webp";
import c13 from "../../assets/BrandLogo/trigun-studio-interior.webp";
import c14 from "../../assets/BrandLogo/iraichikadai1.svg";
import c15 from "../../assets/BrandLogo/ucu-logo.svg";

const images = [
  c1,
  c2,
  c3,
  c4,
  c5,
  c6,
  c7,
  c8,
  c9,
  c10,
  c11,
  c12,
  c13,
  c14,
  c15,
];

const chunkArray = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );

function OurClient() {
  const [itemsPerRow, setItemsPerRow] = useState(5);

  useEffect(() => {
    const updateItemsPerRow = () => {
      const width = window.innerWidth;

      if (width <= 426) {
        setItemsPerRow(2); // mobile
      } else if (width <= 1024) {
        setItemsPerRow(6); // tablet
      } else {
        setItemsPerRow(5); // desktop
      }
    };

    updateItemsPerRow();
    window.addEventListener("resize", updateItemsPerRow);
    return () => window.removeEventListener("resize", updateItemsPerRow);
  }, []);

  const imageRows = chunkArray(images, itemsPerRow);

  return (
    <div className="our-client-container">
      <h3 className="our-client-h3">Our Trusted Clients</h3>
      {imageRows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className={`our-client-grid-row ${
            row.length < itemsPerRow ? "center-row" : ""
          }`}
        >
          {row.map((data, index) => {
            const globalIndex = rowIndex * itemsPerRow + index;
            const specialClass =
              globalIndex === 8
                ? "color-modified-img-c9"
                : globalIndex === 12
                ? "color-modified-img-c13"
                : "";

            return (
              <div key={index} className="client-data-grid">
                <img
                  src={data}
                  className={`client-img ${specialClass}`}
                  alt={`client-${globalIndex + 1}`}
                />
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default OurClient;
