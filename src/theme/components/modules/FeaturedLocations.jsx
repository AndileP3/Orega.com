import { ModuleFields, TextField, ImageField } from '@hubspot/cms-components/fields';
import styles from '../../styles/featuredLocations.module.css';
import { useRef, useState, useEffect } from 'react';

export function Component({ fieldValues }) {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const offices = [
    {
      title: fieldValues.office1_title,
      location: fieldValues.office1_location,
      description: fieldValues.office1_description,
      transport: fieldValues.office1_transport,
      img: fieldValues.office1_img?.src || 'https://via.placeholder.com/300x200',
    },
    {
      title: fieldValues.office2_title,
      location: fieldValues.office2_location,
      description: fieldValues.office2_description,
      transport: fieldValues.office2_transport,
      img: fieldValues.office2_img?.src || 'https://via.placeholder.com/300x200',
    },
    {
      title: fieldValues.office3_title,
      location: fieldValues.office3_location,
      description: fieldValues.office3_description,
      transport: fieldValues.office3_transport,
      img: fieldValues.office3_img?.src || 'https://via.placeholder.com/300x200',
    },
    {
      title: fieldValues.office4_title,
      location: fieldValues.office4_location,
      description: fieldValues.office4_description,
      transport: fieldValues.office4_transport,
      img: fieldValues.office4_img?.src || 'https://via.placeholder.com/300x200',
    },
    {
      title: fieldValues.office5_title,
      location: fieldValues.office5_location,
      description: fieldValues.office5_description,
      transport: fieldValues.office5_transport,
      img: fieldValues.office5_img?.src || 'https://via.placeholder.com/300x200',
    },
  ];

  const scrollToIndex = (index) => {
    const container = containerRef.current;
    const cardWidth = container.offsetWidth / 3;
    container.scrollTo({
      left: cardWidth * index,
      behavior: 'smooth',
    });
    setCurrentIndex(index);
  };

  const next = () => {
    const newIndex = (currentIndex + 1) % offices.length;
    scrollToIndex(newIndex);
  };

  const prev = () => {
    const newIndex = (currentIndex - 1 + offices.length) % offices.length;
    scrollToIndex(newIndex);
  };

  useEffect(() => {
    scrollToIndex(currentIndex);
  }, []);

  return (
    <section className={styles.featuredSection}>
      <h2 className={styles.heading}>Featured Locations</h2>

      <div className={styles.carouselWrapper}>
        <button onClick={prev} className={styles.arrowLeft}>&lt;</button>

        <div className={styles.carousel} ref={containerRef}>
          {offices.concat(offices.slice(0, 3)).map((office, i) => (
            <div className={styles.card} key={i}>
              <img src={office.img} alt={office.title} className={styles.image} />
              <div className={styles.cardContent}>
                <h3>{office.title}</h3>
                <p className={styles.location}>{office.location}</p>
                <p>{office.description}</p>
                <p className={styles.transport}>{office.transport}</p>
                <div className={styles.buttons}>
                  <button className={styles.tourBtn}>Book a tour</button>
                  <button className={styles.infoBtn}>Learn more</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button onClick={next} className={styles.arrowRight}>&gt;</button>
      </div>

      <div className={styles.dots}>
        {offices.map((_, i) => (
          <span
            key={i}
            className={`${styles.dot} ${currentIndex === i ? styles.active : ''}`}
            onClick={() => scrollToIndex(i)}
          />
        ))}
      </div>
    </section>
  );
}

export const fields = (
  <ModuleFields>
    {[1, 2, 3, 4, 5].map((i) => (
      <div key={i}>
        <TextField name={`office${i}_title`} label={`Office ${i} Title`} default={`Office ${i}`} />
        <TextField name={`office${i}_location`} label={`Office ${i} Location`} default="City" />
        <TextField name={`office${i}_description`} label={`Office ${i} Description`} default="Office description." />
        <TextField name={`office${i}_transport`} label={`Office ${i} Transport`} default="Station (5 mins)" />
        <ImageField
          name={`office${i}_img`}
          label={`Office ${i} Image`}
          default={{
            src: 'https://via.placeholder.com/300x200',
            width: 300,
            height: 200,
            alt: `Office ${i} image`
          }}
        />
      </div>
    ))}
  </ModuleFields>
);

export const meta = {
  label: 'Featured Office Locations',
};