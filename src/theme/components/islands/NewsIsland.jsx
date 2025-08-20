import React, { useRef, useState, useEffect } from 'react';
import styles from '../../styles/newsViews.module.css';

export default function NewsIsland({ fieldValues }) {
  const { heading, hubdb_table_id } = fieldValues;
  const [hubdbRows, setHubdbRows] = useState([]);
  const carouselRef = useRef();
  const scrollAmount = 316;
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    async function fetchHubDB() {
      try {
        console.log('Fetching HubDB with table ID:', hubdb_table_id);

        const res = await fetch(
          `https://api.hubapi.com/cms/v3/hubdb/tables/${hubdb_table_id}/rows?portalId=47574277`
        );

        if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);

        const data = await res.json();
        console.log('Fetched rows:', data.results);

        const validRows = (data.results || []).filter(
          (row) => row.values && Object.keys(row.values).length > 0
        );

        setHubdbRows(validRows);
      } catch (err) {
        console.error('Error fetching HubDB:', err);
      }
    }

    fetchHubDB();
  }, [hubdb_table_id]);

  const scrollLeft = () => carouselRef.current?.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  const scrollRight = () => carouselRef.current?.scrollBy({ left: scrollAmount, behavior: 'smooth' });

  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current) {
        const index = Math.round(carouselRef.current.scrollLeft / scrollAmount);
        setActiveIndex(index);
      }
    };
    const ref = carouselRef.current;
    ref?.addEventListener('scroll', handleScroll);
    return () => ref?.removeEventListener('scroll', handleScroll);
  }, []);

  if (!hubdbRows.length) {
    return (
      <section>
        <h2>{heading}</h2>
        <p>Loading, Please wait...</p>
      </section>
    );
  }

  return (
    <section className={styles.newsSection}>
      <h2 className={styles.heading}>{heading}</h2>
      <div className={styles.carouselWrapper}>
        <div className={styles.carousel} ref={carouselRef}>
          {hubdbRows.map((row, index) => {
            const { values } = row;
            const title = values.heading || 'Untitled News';
            const date = values.date ? new Date(Number(values.date)).toLocaleDateString() : 'Date not available';
            const img = values.image?.url || 'https://via.placeholder.com/533x300?text=No+Image';
            const link = values.link || '#';
            const excerpt = values.paragraph || values.excerpt || 'No description available.';

            return (
              <div className={styles.card} key={index}>
                <img src={img} alt={title} className={styles.image} />
                <div className={styles.cardContent}>
                      <p className={styles.date}>
                        {new Date(date).toLocaleDateString("en-GB", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </p>
                  <h3 className={styles.title}>{title}</h3>
                  <p className={styles.excerpt} dangerouslySetInnerHTML={{ __html: excerpt }} />
                  <a href={link} className={styles.readLink}>Read article</a>
                </div>
              </div>
            );
          })}
        </div>
        
      </div>
      <div className={styles.dots}>
        {hubdbRows.map((_, index) => (
          <span key={index} className={`${styles.dot} ${activeIndex === index ? styles.active : ''}`} />
        ))}
      </div>
    </section>
  );
}
