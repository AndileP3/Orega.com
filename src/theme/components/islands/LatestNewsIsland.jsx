// src/theme/components/islands/LatestNewsIsland.js
import React, { useRef, useState, useEffect } from 'react';
import { ModuleFields, TextField } from '@hubspot/cms-components/fields';
import styles from '../../styles/latestNews.module.css';

export default function LatestNewsIsland({ fieldValues }) {
  const carouselRef = useRef();
  const scrollAmount = 316;
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollLeft = () => {
    carouselRef.current?.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  };

  const scrollRight = () => {
    carouselRef.current?.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  const articles = [
    {
      title: fieldValues.article1_title || "The Best Offices in London",
      date: "13 May 2025",
      img: "https://2947606.fs1.hubspotusercontent-na1.net/hub/2947606/hubfs/OregaMarlow_BreakoutSpace_WithPeople10-1.jpg?width=533&height=300&name=OregaMarlow_BreakoutSpace_WithPeople10-1.jpg",
      link: "#"
    },
    {
      title: fieldValues.article2_title || "The Best Virtual Office Addresses in London",
      date: "4 August 2025",
      img: "https://2947606.fs1.hubspotusercontent-na1.net/hub/2947606/hubfs/Orega-Serviced%20Office-OldBailey-Meeting%20Room.jpg?width=533&height=300&name=Orega-Serviced%20Office-OldBailey-Meeting%20Room.jpg",
      link: "#"
    },
    {
      title: fieldValues.article3_title || "Why Are Face-to-Face Meetings Better Than Virtual Meetings?",
      date: "4 August 2025",
      img: "https://2947606.fs1.hubspotusercontent-na1.net/hub/2947606/hubfs/Imported_Blog_Media/THE%20COLMORE%20BUILDING%200918_033-3-1-1.jpeg?width=533&height=300&name=THE%20COLMORE%20BUILDING%200918_033-3-1-1.jpeg",
      link: "#"
    },
    {
      title: fieldValues.article4_title || "The Best Office",
      date: "18 July 2025",
      img: "https://2947606.fs1.hubspotusercontent-na1.net/hub/2947606/hubfs/OregaMarlow_Atrium_WithPeople4.jpg?width=533&height=300&name=OregaMarlow_Atrium_WithPeople4.jpg",
      link: "#"
    },
     {
      title: fieldValues.article5_title || "The Best Office",
      date: "18 July 2025",
      img: "https://2947606.fs1.hubspotusercontent-na1.net/hub/2947606/hubfs/OregaMarlow_Atrium_WithPeople4.jpg?width=533&height=300&name=OregaMarlow_Atrium_WithPeople4.jpg",
      link: "#"
    },
     {
      title: fieldValues.article6_title || "The Best Office",
      date: "18 July 2025",
      img: "https://2947606.fs1.hubspotusercontent-na1.net/hub/2947606/hubfs/Orega%20Newcastle%20St%20James%20Gate%20External.jpg?width=533&height=300&name=Orega%20Newcastle%20St%20James%20Gate%20External.jpg",
      link: "#"
    },
    {
      title: fieldValues.article5_title || "The Best Office",
      date: "18 July 2025",
      img: "https://www.orega.com/hs-fs/hubfs/OregaEightyStrand_Reception.jpg?width=533&height=300&name=OregaEightyStrand_Reception.jpg",
      link: "#"
    },
    {
      title: fieldValues.article7_title || "The Best Office",
      date: "18 July 2025",
      img: "https://www.orega.com/hs-fs/hubfs/Orega%20Arkwright%20House%20-%20exterior-2.jpg?width=533&height=300&name=Orega%20Arkwright%20House%20-%20exterior-2.jpg",
      link: "#"
    }
  ];

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
    <section className={styles.latestSection}>
      <h2 className={styles.heading}>Latest news</h2>
      <div className={styles.carouselWrapper}>
        <button onClick={scrollLeft} className={`${styles.arrowBtn} ${styles.left}`} aria-label="Scroll left" type="button">&larr;</button>
        <div className={styles.carousel} ref={carouselRef} tabIndex={0}>
          {articles.map((article, index) => (
            <div className={styles.card} key={index}>
              <img src={article.img} alt={article.title} className={styles.image} loading="lazy" />
              <div className={styles.cardContent}>
                <h3 className={styles.title}>{article.title}</h3>
                <p className={styles.date}>{article.date}</p>
                <a href={article.link} className={styles.readLink}>Read article</a>
              </div>
            </div>
          ))}
        </div>
        <button onClick={scrollRight} className={`${styles.arrowBtn} ${styles.right}`} aria-label="Scroll right" type="button">&rarr;</button>
      </div>

      <div className={styles.dots}>
        {articles.map((_, index) => (
          <span key={index} className={`${styles.dot} ${activeIndex === index ? styles.active : ''}`} />
        ))}
      </div>
    </section>
  );
}

export const fields = (
  <ModuleFields>
    {[1, 2, 3, 4].map(i => (
      <TextField
        key={i}
        name={`article${i}_title`}
        label={`Article ${i} Title`}
        default={[
          "The Best Offices in London",
          "The Best Virtual Office Addresses in London",
          "Why Are Face-to-Face Meetings Better Than Virtual Meetings?",
          "The Best Office"
        ][i - 1]}
      />
    ))}
  </ModuleFields>
);

export const meta = {
  label: 'Latest News (Interactive)',
};
