import React, { useRef, useState, useEffect } from 'react';
import styles from '../../styles/reviews.module.css';

export default function ReviewsIsland() {
  const carouselRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollAmount = 416; // adjust width for visible 3 cards with margin

  const scrollLeft = () => {
    carouselRef.current?.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  };

  const scrollRight = () => {
    carouselRef.current?.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  const reviews = [
    {
      name: "Michelle Powell",
      text: "Can totally recommend this superb organisation. Fantastic customer service...",
    },
    {
      name: "Marie Bower",
      text: "It was great to get together for our Q3 team meeting last Friday at Orega...",
    },
    {
      name: "Lizzie Russell",
      text: "We use Orega for our office services client meetings and the service received...",
    },
    {
      name: "Michael D.",
      text: "I love the atmosphere here. The reception staff always greet me warmly...",
    },
    {
      name: "Sandra C.",
      text: "Exceptional workspace, flexible terms, and amazing amenities. Highly recommended!",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollLeft = carouselRef.current?.scrollLeft || 0;
      const cardWidth = scrollAmount;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(index);
    };
    const ref = carouselRef.current;
    ref?.addEventListener('scroll', handleScroll);
    return () => ref?.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className={styles.reviewsSection}>
      <h2 className={styles.heading}>What our customers say</h2>
      <div className={styles.carouselWrapper}>
        <button className={`${styles.arrowBtn} ${styles.left}`} onClick={scrollLeft}>&lt;</button>
        <div className={styles.carousel} ref={carouselRef}>
          {reviews.map((review, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.quoteIcon}>“</div>
              <div className={styles.stars}>★★★★★</div>
              <p className={styles.text}>{review.text}</p>
              <p className={styles.author}><strong>{review.name}</strong></p>
            </div>
          ))}
        </div>
        <button className={`${styles.arrowBtn} ${styles.right}`} onClick={scrollRight}>&gt;</button>
      </div>
      <div className={styles.dots}>
        {reviews.map((_, idx) => (
          <span
            key={idx}
            className={`${styles.dot} ${activeIndex === idx ? styles.active : ''}`}
          />
        ))}
      </div>
    </section>
  );
}
