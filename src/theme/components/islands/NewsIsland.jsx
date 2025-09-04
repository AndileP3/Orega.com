import React, { useRef, useState, useEffect } from 'react';
import styles from '../../styles/newsViews.module.css';

export default function NewsIsland({ fieldValues }) {
  const { heading, hubdb_table_id } = fieldValues;
  const [hubdbRows, setHubdbRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [empty, setEmpty] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const carouselRef = useRef();
  const scrollAmount = 316;
  const [activeIndex, setActiveIndex] = useState(0);

  // Fetch HubDB rows
  useEffect(() => {
    async function fetchHubDB() {
      try {
        const res = await fetch(
          `https://api.hubapi.com/cms/v3/hubdb/tables/${hubdb_table_id}/rows?portalId=47574277`
        );

        if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);

        const data = await res.json();
        const validRows = (data.results || []).filter(
          (row) => row.values && Object.keys(row.values).length > 0
        );

        setHubdbRows(validRows);
        setEmpty(validRows.length === 0);
      } catch (err) {
        console.error('Error fetching HubDB:', err);
        setEmpty(true);
      } finally {
        setLoading(false);
      }
    }

    fetchHubDB();
  }, [hubdb_table_id]);

  // Handle carousel scrolling
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

  // If an article is selected, display the article view
  if (selectedArticle) {
    const article = selectedArticle;
    const title = article.heading || 'Untitled Article';

    const timestamp = article.date;
    const dateObj = timestamp ? new Date(Number(timestamp)) : null;
    const formattedDate =
      dateObj && !isNaN(dateObj)
        ? dateObj.toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })
        : 'Date not available';

    const img = article.image?.url || 'https://via.placeholder.com/800x400?text=No+Image';
    const content = article.paragraph || article.excerpt || 'No content available.';

    return (
      <section className={styles.articleSection}>
        <button className={styles.backBtn} onClick={() => setSelectedArticle(null)}>
          ← Back to News
        </button>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.date}>{formattedDate}</p>
        <img src={img} alt={title} className={styles.image2} />
        <div className={styles.content} dangerouslySetInnerHTML={{ __html: content }} />
      </section>
    );
  }

  // Default news carousel view
  return (
    <section className={styles.newsSection}>
      <h2 className={styles.heading}>{heading}</h2>

      {/* Loading state */}
      {loading && (
        <div className={styles.loadingSection}>
          <div className={styles.spinner}></div>
        </div>
      )}

      {/* Empty state */}
      {empty && !loading && (
        <div className={styles.emptySection}>
          <p>No news available at the moment.</p>
        </div>
      )}

      {/* Carousel */}
      {!loading && !empty && (
        <>
          <div className={styles.carouselWrapper}>
            <div className={styles.carousel} ref={carouselRef}>
              {hubdbRows.map((row, index) => {
                const { values } = row;
                const title = values.heading || 'Untitled News';

                const timestamp = values.date;
                const dateObj = timestamp ? new Date(Number(timestamp)) : null;
                const formattedDate =
                  dateObj && !isNaN(dateObj)
                    ? dateObj.toLocaleDateString('en-GB', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      })
                    : 'Date not available';

                const img = values.image?.url || 'https://via.placeholder.com/533x300?text=No+Image';
                const excerpt = values.paragraph || values.excerpt || 'No description available.';

                return (
                  <div className={styles.card} key={index}>
                    <img src={img} alt={title} className={styles.image} />
                    <div className={styles.cardContent}>
                      <p className={styles.date}>{formattedDate}</p>
                      <h3 className={styles.title}>{title}</h3>
                      <p className={styles.excerpt} dangerouslySetInnerHTML={{ __html: excerpt }} />
                      <button
                        className={styles.readLink}
                        onClick={() => setSelectedArticle(values)}
                      >
                        Read article
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Carousel dots */}
          <div className={styles.dots}>
            {hubdbRows.map((_, index) => (
              <span key={index} className={`${styles.dot} ${activeIndex === index ? styles.active : ''}`} />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
