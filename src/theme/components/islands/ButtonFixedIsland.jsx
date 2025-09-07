import React, { useState, useEffect } from 'react';
import styles from '../../styles/header.module.css'; // reuse your header popup styles

export default function ButtonIsland() {
  const [isOpen, setIsOpen] = useState(false);
  const [offices, setOffices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');

  const HUBDB_TABLE_ID = 128385095;
  const PORTAL_ID = 47574277;

  const togglePopup = () => {
    setIsOpen(!isOpen);
    if (!isOpen && offices.length === 0) fetchOffices();
  };

  const fetchOffices = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.hubapi.com/cms/v3/hubdb/tables/${HUBDB_TABLE_ID}/rows?portalId=${PORTAL_ID}`
      );
      if (!res.ok) throw new Error(`Failed: ${res.status}`);
      const data = await res.json();
      setOffices(data.results || []);
    } catch (err) {
      console.error('HubDB fetch error:', err);
      setOffices([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedSearch(searchTerm), 400);
    return () => clearTimeout(handler);
  }, [searchTerm]);

  const filteredOffices = offices.filter((office) => {
    const name = office.values?.name?.toLowerCase() || '';
    const city = office.values?.city?.toLowerCase() || '';
    return (
      name.includes(debouncedSearch.toLowerCase()) ||
      city.includes(debouncedSearch.toLowerCase())
    );
  });

  return (
    <>
      {/* Floating Search Icon Button */}
      <button
        className={styles.searchIconBtn}
        onClick={togglePopup}
        aria-label="Search offices"
      >
        {/* Inline SVG for magnifying glass */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M10 2a8 8 0 015.292 13.708l4 4a1 1 0 01-1.414 1.414l-4-4A8 8 0 1110 2zm0 2a6 6 0 100 12 6 6 0 000-12z" />
        </svg>
      </button>

      {isOpen && (
        <div className={styles.popupOverlay}>
          <div className={styles.popupCard}>
            <button className={styles.closeBtn} onClick={togglePopup}>
              ×
            </button>

            <h2 className={styles.popupTitle}>All Offices</h2>
            <p className={styles.popupSubtitle}>
              Explore our available office locations.
            </p>

            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search offices..."
              className={styles.searchBox}
            />

            {loading ? (
              <p>Loading offices...</p>
            ) : filteredOffices.length > 0 ? (
              <div className={styles.officeGrid}>
                {filteredOffices.map((office) => (
                  <div key={office.id} className={styles.officeCard}>
                    <img
                      src={
                        office.values.image?.url ||
                        'https://via.placeholder.com/300x200'
                      }
                      alt={office.values.name}
                    />
                    <h3 className={styles.officeHeading}>
                      {office.values.name}
                    </h3>
                    <p>{office.values.city}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p>No offices match your search.</p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
