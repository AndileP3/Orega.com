// src/theme/components/islands/OfficeServicesIsland.jsx
import React, { useState, useEffect } from "react";
import { ModuleFields, TextField, ImageField } from "@hubspot/cms-components/fields";
import styles from "../../styles/officeServices.module.css";
import headerStyles from "../../styles/header.module.css"; // import popup styles

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

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formTitle, setFormTitle] = useState("Get a Quote");

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

  // Modal handlers
  const openModal = () => {
    setFormTitle("Get a Quote");
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (isModalOpen && e.target.id === "contactModal") {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener("click", handleOutsideClick);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

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
          <button onClick={openModal} className={styles.button}>
            {fieldValues.buttonText || "Get a quote"}
          </button>
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

      {/* Contact Form Modal */}
      {isModalOpen && (
        <div id="contactModal" className={headerStyles.modal}>
          <div className={headerStyles.modalContent}>
            <span className={headerStyles.close} onClick={closeModal}>
              &times;
            </span>
            <div className={headerStyles.modalBody}>
              <div className={headerStyles.formSection}>
                <h2 id={headerStyles.formTitle}>{formTitle}</h2>
                <form>
                  <div className={headerStyles.formGrid}>
                    <input type="text" placeholder="First name*" required />
                    <input type="text" placeholder="Last name*" required />
                    <input type="tel" placeholder="Phone number*" required />
                    <input type="email" placeholder="Email*" required />
                    <input type="text" placeholder="Company name*" required />
                    <select required>
                      <option value="">Location*</option>
                      <option value="Aberdeen">Aberdeen - Capitol Building</option>
                      <option value="London">London - Strand</option>
                    </select>
                    <select required>
                      <option value="">Requirement*</option>
                      <option value="Serviced Office">Serviced Office</option>
                      <option value="Meeting Room">Meeting Room</option>
                    </select>
                    <input type="text" placeholder="Number of desks*" />
                    <input type="date" placeholder="Date required*" />
                  </div>

                  <label>
                    <input type="checkbox" className="checkboxInput" required /> 
                    I agree to receive communications as necessary to provide our
                    products and services as requested from Orega.*
                  </label>

                  <label>
                    <input type="checkbox" className="checkboxInput" /> 
                    I agree to receive other communications from Orega.
                  </label>

                  <button type="submit" className={headerStyles.submitBtn}>
                    SUBMIT
                  </button>
                </form>
              </div>

              <div className={headerStyles.imageSection}>
                <img
                  src="https://www.orega.com/hs-fs/hubfs/get-a-quote.png?width=400&height=800&name=get-a-quote.png"
                  alt="Testimonial"
                />
              </div>
            </div>
          </div>
        </div>
      )}
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

    {/* Image fields */}
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
