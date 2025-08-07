// src/theme/components/islands/FeaturedLocations.js
import React, { useRef, useState, useEffect } from 'react';
import { ModuleFields, TextField } from '@hubspot/cms-components/fields';
import styles from '../../styles/featuredLocations.module.css';

export default function FeaturedLocationsIsland({ fieldValues }) {
  const carouselRef = useRef();
  const scrollAmount = 316;
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollLeft = () => {
    carouselRef.current?.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  };

  const scrollRight = () => {
    carouselRef.current?.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  const offices = [
    {
    title: fieldValues.office1_title || "Manchester",
    location: fieldValues.office1_location || "Balloon Street",
    description: "Modern workspace in Manchester city centre with transport links.",
    travel: [
      { station: "Manchester Victoria", time: "11 mins" },
      { station: "Manchester Piccadilly", time: "15 mins" }
    ],
    img: "https://www.orega.com/hs-fs/hubfs/Balloon%20Street%20-%20Manchester/balloon-street-serviced-office-manchester.jpg?width=600&height=338&name=balloon-street-serviced-office-manchester.jpg"
  },
  {
    title: fieldValues.office5_title || "Arkwright House",
    location: fieldValues.office5_location || "Manchester",
    description: "A prestigious building in the heart of Manchester overlooking landscaped communal gardens and the city centre, and centrally located.",
    travel: [
      { station: "Manchester Victoria", time: "11 mins" },
      { station: "Manchester Piccadilly", time: "15 mins" }
    ],
    img: "https://www.orega.com/hs-fs/hubfs/arkwright-house-feature.png?width=600&height=338&name=arkwright-house-feature.png"
  },

    { title: fieldValues.office3_title || "Bristol",
      location: fieldValues.office3_location || "Bristol City Centre",
      description: "Contemporary office space in the heart of Bristol with excellent transport links.",
      travel: [
        { station: "Bristol Temple Meads", time: "10 mins" },
        { station: "Bristol Parkway", time: "20 mins" }
      ],
      img: "https://www.orega.com/hs-fs/hubfs/Orega%20Bristol_Exterior_1000x665.jpg?width=600&height=338&name=Orega%20Bristol_Exterior_1000x665.jpg"
    },
    { title: fieldValues.office4_title || "Gatwick",
      location: fieldValues.office4_location || "Gatwick Office",
      description: "Conveniently located office space near Gatwick Airport.",
      travel: [
        { station: "Gatwick Airport", time: "5 mins" },
        { station: "Horley", time: "10 mins" }
      ],
      img: "https://www.orega.com/hs-fs/hubfs/gatwick-feature.png?width=600&height=338&name=gatwick-feature.png"
    },
    { title: fieldValues.office5_title || "Arkwright House",
      location: fieldValues.office5_location || "Manchester",
      description: "A prestigious building in the heart of Manchester overlooking landscaped communal gardens and the city centre, and centrally located.",
      travel: [
        { station: "Manchester Victoria", time: "11 mins" },
        { station: "Manchester Piccadilly", time: "15 mins" }
      ],
      img: "https://www.orega.com/hs-fs/hubfs/arkwright-house-feature.png?width=600&height=338&name=arkwright-house-feature.png"
    },
  ];

  // Handle active dot
  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current) {
        const scrollLeft = carouselRef.current.scrollLeft;
        const cardWidth = 316;
        const index = Math.round(scrollLeft / cardWidth);
        setActiveIndex(index);
      }
    };
    const ref = carouselRef.current;
    ref?.addEventListener('scroll', handleScroll);
    return () => ref?.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className={styles.featuredSection}>
      <h2 className={styles.heading}>Featured Locations</h2>
      <div className={styles.carouselWrapper}>
        <button onClick={scrollLeft} className={`${styles.arrowBtn} ${styles.left}`} aria-label="Scroll left" type="button">&larr;</button>
        <div className={styles.carousel} ref={carouselRef} tabIndex={0}>
                {offices.map((office, index) => (
          <div className={styles.card} key={index}>
            <img src={office.img} alt={`${office.title} Office`} className={styles.image} loading="lazy" />
            <div className={styles.cardContent}>
              <h3>{office.title}</h3>
              <p className={styles.location}>{office.location}</p>
              {office.description && <p className={styles.description}>{office.description}</p>}
              {office.travel?.length > 0 && (
                <ul className={styles.travelList}>
                  {office.travel.map((item, idx) => (
                    <li key={idx} className={styles.travelItem}>
                     <img
                        src="https://www.orega.com/hubfs/tube-icon-orange.svg"
                        alt="Tube icon"
                        className={styles.trainIcon}
                      />

                      {item.station} <span className={styles.travelTime}>({item.time})</span>
                    </li>
                  ))}
                </ul>
              )}
      <div className={styles.buttons}>
        <button className={styles.tourBtn}>Book a tour</button>
        <button className={styles.infoBtn}>Learn more</button>
      </div>
    </div>
  </div>
))}

        </div>
        <button onClick={scrollRight} className={`${styles.arrowBtn} ${styles.right}`} aria-label="Scroll right" type="button">&rarr;</button>
      </div>

      {/* Carousel Dots */}
      <div className={styles.dots}>
        {offices.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${activeIndex === index ? styles.active : ''}`}
          />
        ))}
      </div>
    </section>
  );
}

export const fields = (
  <ModuleFields>
    {[1, 2, 3, 4, 5].map(i => (
      <div key={i}>
        <TextField name={`office${i}_title`} label={`Office ${i} Title`} default={["Manchester", "London", "Bristol", "Gatwick", "Arkwright House"][i - 1]} />
        <TextField name={`office${i}_location`} label={`Office ${i} Location`} default={["Balloon Street", "Gracechurch Street", "Bristol City Centre", "Gatwick Office", "Manchester"][i - 1]} />
      </div>
    ))}
  </ModuleFields>
);

export const meta = {
  label: 'Featured Office Locations (Interactive)',
};
