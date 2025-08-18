import React, { useState } from "react";
import { ModuleFields, TextField, ImageField } from "@hubspot/cms-components/fields";
import styles from "../../styles/officeServices.module.css";

// Default fallback URLs for images
const DEFAULT_IMAGES = [
  "https://2947606.fs1.hubspotusercontent-na1.net/hub/2947606/hubfs/OregaBroadGate_MeetingRoom_WithPeople6.jpg?width=1120&height=630&name=OregaBroadGate_MeetingRoom_WithPeople6.jpg",
  "https://2947606.fs1.hubspotusercontent-na1.net/hub/2947606/hubfs/OregaGracechurchStreet_OfficeSpace4.jpg?width=1120&height=630&name=OregaGracechurchStreet_OfficeSpace4.jpg",
  "https://2947606.fs1.hubspotusercontent-na1.net/hub/2947606/hubfs/OregaBristol_MainBreakout_WithPeople4.jpg?width=1120&height=630&name=OregaBristol_MainBreakout_WithPeople4.jpg",
  "https://2947606.fs1.hubspotusercontent-na1.net/hub/2947606/hubfs/OregaBristol_LargeOfficeSpace2-1.jpg?width=1120&height=630&name=OregaBristol_LargeOfficeSpace2-1.jpg",
  "https://2947606.fs1.hubspotusercontent-na1.net/hub/2947606/hubfs/OregaMarlow_BreakoutSpace_WithPeople9-1.jpg?width=1120&height=630&name=OregaMarlow_BreakoutSpace_WithPeople9-1.jpg",
];

export default function OfficeServicesIsland({ fieldValues }) {
  const [activeIndex, setActiveIndex] = useState(0);

  // Safely get image URLs from editor or fallback
  const images = [
    fieldValues.image1?.src || DEFAULT_IMAGES[0],
    fieldValues.image2?.src || DEFAULT_IMAGES[1],
    fieldValues.image3?.src || DEFAULT_IMAGES[2],
    fieldValues.image4?.src || DEFAULT_IMAGES[3],
    fieldValues.image5?.src || DEFAULT_IMAGES[4],
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className={styles.officeServicesSection}>
      <div className={styles.container}>
        {/* Left column */}
        <div className={styles.textColumn}>
          <h2 className={styles.heading}>
            {fieldValues.heading || "Orega Office Services"}
          </h2>
          <p className={styles.paragraph}>
            {fieldValues.paragraph ||
              "We believe that great things happen when people come together in person: so we create stylish workspaces and deliver unbeatable office services to help you boost face-to-face time and unlock the full potential of your business."}
          </p>
          <a
            href={fieldValues.buttonLink || "#"}
            className={styles.button}
          >
            {fieldValues.buttonText || "Get a quote"}
          </a>
        </div>

        {/* Right column - carousel */}
        <div className={styles.carouselWrapper}>
          <button
            onClick={prevSlide}
            className={`${styles.arrowBtn} ${styles.left}`}
            aria-label="Previous image"
            type="button"
          >
            &larr;
          </button>

          <div className={styles.imageWrapper}>
            <img
              src={images[activeIndex]}
              alt={`Office image ${activeIndex + 1}`}
              className={styles.image}
            />
          </div>

          <button
            onClick={nextSlide}
            className={`${styles.arrowBtn} ${styles.right}`}
            aria-label="Next image"
            type="button"
          >
            &rarr;
          </button>

          {/* dots */}
          <div className={styles.dots}>
            {images.map((_, index) => (
              <span
                key={index}
                className={`${styles.dot} ${
                  activeIndex === index ? styles.active : ""
                }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export const fields = (
  <ModuleFields>
    <TextField name="heading" label="Heading" default="Orega Office Services" />
    <TextField
      name="paragraph"
      label="Paragraph"
      default="We believe that great things happen when people come together in person: so we create stylish workspaces and deliver unbeatable office services to help you boost face-to-face time and unlock the full potential of your business."
    />
    <TextField name="buttonText" label="Button Text" default="Get a quote" />
    <TextField name="buttonLink" label="Button Link" default="#" />

    {/* Image fields without default */}
    <ImageField name="image1" label="Image 1" />
    <ImageField name="image2" label="Image 2" />
    <ImageField name="image3" label="Image 3" />
    <ImageField name="image4" label="Image 4" />
    <ImageField name="image5" label="Image 5" />
  </ModuleFields>
);

export const meta = {
  label: "Office Services Carousel",
};
