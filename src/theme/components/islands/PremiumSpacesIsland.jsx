import React, { useState } from "react";
import styles from "../../styles/premiumSpaces.module.css";

const DEFAULT_IMAGES = [
  "https://www.orega.com/hs-fs/hubfs/OregaEightyStrand_External-1.jpg?width=692&height=389&name=OregaEightyStrand_External-1.jpg",
  "https://www.orega.com/hs-fs/hubfs/OregaIngenuityHouse_External.jpg?width=692&height=389&name=OregaIngenuityHouse_External.jpg",
  "https://www.orega.com/hs-fs/hubfs/OregaGracechurchStreet_External.jpg?width=692&height=389&name=OregaGracechurchStreet_External.jpg",
  "https://www.orega.com/hs-fs/hubfs/OregaTheTootalBuildings_External.jpg?width=692&height=389&name=OregaTheTootalBuildings_External.jpg",
  "https://www.orega.com/hs-fs/hubfs/What%20is%20a%20management%20agreement%20web.png?width=692&height=389&name=What%20is%20a%20management%20agreement%20web.png",
  "https://www.orega.com/hs-fs/hubfs/OregaEightyStrand_BreakoutSpace%26KitchenArea.jpg?width=692&height=389&name=OregaEightyStrand_BreakoutSpace&KitchenArea.jpg",
  "https://www.orega.com/hs-fs/hubfs/OregaBroadGate_Reception.jpg?width=692&height=389&name=OregaBroadGate_Reception.jpg",
  "https://www.orega.com/hs-fs/hubfs/OregaEightyStrand_BreakoutSpace.jpg?width=692&height=389&name=OregaEightyStrand_BreakoutSpace.jpg",
  "https://www.orega.com/hs-fs/hubfs/OregaStJamesGate_OfficeSpace_WithPeople.jpg?width=692&height=389&name=OregaStJamesGate_OfficeSpace_WithPeople.jpg",
  "https://www.orega.com/hs-fs/hubfs/OregaBalloonStreet_MeetingRoom_People.jpg?width=692&height=389&name=OregaBalloonStreet_MeetingRoom_People.jpg",
  "https://www.orega.com/hs-fs/hubfs/OregaGracechurchStreet_BreakoutSpace_WithPeople2-1.jpg?width=692&height=389&name=OregaGracechurchStreet_BreakoutSpace_WithPeople2-1.jpg",
  "https://www.orega.com/hs-fs/hubfs/OregaLimeStreet_OfficeSpace.jpg?width=692&height=389&name=OregaLimeStreet_OfficeSpace.jpg",
  "https://www.orega.com/hs-fs/hubfs/OregaLimeStreet_BreakoutSpace.jpg?width=692&height=389&name=OregaLimeStreet_BreakoutSpace.jpg",
  "https://www.orega.com/hs-fs/hubfs/OregaBalloonStreet_LandlordCommunalArea4.jpg?width=692&height=389&name=OregaBalloonStreet_LandlordCommunalArea4.jpg",
  "https://www.orega.com/hs-fs/hubfs/OregaEightyStrand_MeetingRoom_Lyceum.jpg?width=692&height=389&name=OregaEightyStrand_MeetingRoom_Lyceum.jpg",
];

export default function OfficeServicesIsland({ fieldValues }) {
  const [activeGroup, setActiveGroup] = useState(0);
  const [fullscreenIndex, setFullscreenIndex] = useState(null);

  // collect 15 images (from HubSpot fields or fallback)
  const images = Array.from({ length: 15 }, (_, i) => {
    const fieldImg = fieldValues[`image${i + 1}`]?.src;
    return fieldImg || DEFAULT_IMAGES[i];
  });

  const groups = Math.ceil(images.length / 5);

  const nextGroup = () => {
    setActiveGroup((prev) => (prev + 1) % groups);
  };

  const prevGroup = () => {
    setActiveGroup((prev) => (prev - 1 + groups) % groups);
  };

  const visibleImages = images.slice(activeGroup * 5, activeGroup * 5 + 5);

  return (
    <section className={styles.officeServicesSection}>
      <div className={styles.container}>
        {/* Left column */}
        <div className={styles.textColumn}>
          <h2 className={styles.heading}>
            {fieldValues.heading || "Premium spaces. Exceptional amenities."}
          </h2>
          <p className={styles.paragraph}>
            {fieldValues.paragraph ||
              "Our Grade A workspaces are packed with business-class amenities, providing everything from high-speed internet to fully-equipped meeting rooms - ensuring an exceptional experience for every client."}
          </p>
        </div>

        {/* Right column - carousel */}
        <div className={styles.carouselWrapper}>
          <div className={styles.gridWrapper}>
            <div className={styles.mainImageWrapper}>
              <img
                src={visibleImages[0]}
                alt="Main office"
                className={styles.squareImage}
                onClick={() => setFullscreenIndex(activeGroup * 5)}
              />
            </div>

            <div className={styles.thumbnailGrid}>
              {visibleImages.slice(1).map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Thumbnail ${idx}`}
                  className={styles.squareImage}
                  onClick={() => setFullscreenIndex(activeGroup * 5 + idx + 1)}
                />
              ))}
            </div>
          </div>

          {/* bottom controls */}
          <div className={styles.bottomControls}>
            <div className={styles.progressLine}>
              <div
                className={styles.progressFill}
                style={{
                  width: `${((activeGroup + 1) / groups) * 100}%`,
                }}
              />
            </div>
            <div className={styles.arrows}>
              <button
                onClick={prevGroup}
                className={styles.arrowBtn}
                aria-label="Previous group"
                type="button"
              >
                &larr;
              </button>
              <button
                onClick={nextGroup}
                className={styles.arrowBtn}
                aria-label="Next group"
                type="button"
              >
                &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen overlay */}
      {fullscreenIndex !== null && (
        <div className={styles.fullscreenOverlay}>
          <button
            className={styles.closeBtn}
            onClick={() => setFullscreenIndex(null)}
          >
            ✕
          </button>
          <button
            className={`${styles.navBtn} ${styles.left}`}
            onClick={() =>
              setFullscreenIndex((prev) => (prev - 1 + images.length) % images.length)
            }
          >
            &larr;
          </button>
          <img
            src={images[fullscreenIndex]}
            alt="Fullscreen view"
            className={styles.fullscreenImg}
          />
          <button
            className={`${styles.navBtn} ${styles.right}`}
            onClick={() =>
              setFullscreenIndex((prev) => (prev + 1) % images.length)
            }
          >
            &rarr;
          </button>
        </div>
      )}
    </section>

    
  );
}

export const meta = {
  label: "Office Services Carousel",
};
