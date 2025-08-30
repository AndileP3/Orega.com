// src/theme/components/islands/ServiceModalIsland.jsx
import React, { useEffect, useMemo, useState } from 'react';
import modalStyles from '../../styles/mediaTextRows.module.css';

export default function ServiceModalIsland({ fieldValues }) {
  // From module
  const HUBDB_TABLE_ID = fieldValues?.hubdbTableId || 128385095;
  const PORTAL_ID = fieldValues?.portalId || 47574277;

  // State
  const [isOpen, setIsOpen] = useState(false);
  const [serviceType, setServiceType] = useState('');
  const [allOffices, setAllOffices] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedOffice, setSelectedOffice] = useState(null);

  // Cache load guard
  const hasCache = useMemo(() => allOffices.length > 0, [allOffices]);

  // Fetch HubDB (same pattern as header)
  const fetchOffices = async () => {
    if (hasCache) return allOffices;

    setLoading(true);
    try {
      const res = await fetch(
        `https://api.hubapi.com/cms/v3/hubdb/tables/${HUBDB_TABLE_ID}/rows?portalId=${PORTAL_ID}`
      );
      if (!res.ok) throw new Error(`Failed: ${res.status}`);
      const data = await res.json();
      setAllOffices(data.results || []);
      return data.results || [];
    } catch (err) {
      console.error('HubDB fetch error:', err);
      return [];
    } finally {
      setLoading(false);
    }
  };

  // Listen for button clicks from ButtonIsland
  useEffect(() => {
    const handler = async (e) => {
      const selected = (e?.detail?.serviceType || '').toLowerCase().trim();
      setServiceType(selected);
      setSelectedOffice(null);

      const offices = await fetchOffices();
      const next = offices.filter(
        (row) => (row.values?.type || '').toLowerCase().trim() === selected
      );
      setFiltered(next);
      setIsOpen(true);
    };

    window.addEventListener('open-service-modal', handler);
    return () => window.removeEventListener('open-service-modal', handler);
  }, [hasCache]);

  // Lock scroll when modal open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => (document.body.style.overflow = 'unset');
  }, [isOpen]);

  const close = () => {
    setIsOpen(false);
    setSelectedOffice(null);
  };

  const titleText = selectedOffice
    ? selectedOffice.name
    : serviceType
    ? `${serviceType.charAt(0).toUpperCase() + serviceType.slice(1)} Offices`
    : 'Our Offices';

  const subtitleText = selectedOffice
    ? selectedOffice.city || ''
    : filtered.length > 0
    ? `Explore our premium ${serviceType} offices available across multiple locations.`
    : 'No offices found for this service.';

  if (!isOpen) return null;

  return (
    <div className={modalStyles.overlay} onClick={(e) => e.target === e.currentTarget && close()}>
      <div className={modalStyles.card} role="dialog" aria-modal="true" aria-labelledby="service-modal-title">
        <button className={modalStyles.closeBtn} onClick={close} aria-label="Close modal">×</button>

        <h2 id="service-modal-title" className={modalStyles.title}>{titleText}</h2>
        <p className={modalStyles.subtitle}>{subtitleText}</p>
        {!selectedOffice && (
          <small className={modalStyles.smallText}>
            Select an office to view more details.
          </small>
        )}

        {loading ? (
          <p>Loading offices...</p>
        ) : !selectedOffice ? (
          <div className={modalStyles.grid}>
            {filtered.map((office) => (
              <div key={office.id} className={modalStyles.cardItem}>
                <img
                  src={office.values.image?.url || 'https://via.placeholder.com/300x200'}
                  alt={office.values.name}
                  className={modalStyles.thumb}
                />
                <h3 className={modalStyles.officeName}>{office.values.name}</h3>
                <button className={modalStyles.viewBtn} onClick={() => setSelectedOffice({
                  name: office.values.name,
                  city: office.values.city,
                  description: office.values.description,
                  image: office.values.image?.url || 'https://via.placeholder.com/600x400?text=No+Image'
                })}>
                  View Details
                </button>
              </div>
            ))}
          </div>
        ) : (
          <>
            <div className={modalStyles.detailWrap}>
              <img src={selectedOffice.image} alt={selectedOffice.name} className={modalStyles.hero} />
              <div className={modalStyles.detailText}>
                <h3 className={modalStyles.city}>{selectedOffice.city}</h3>
                <p>{selectedOffice.description}</p>
              </div>
            </div>

            <div className={modalStyles.footerBtns}>
              <a href="/contact" className={modalStyles.quoteBtn}>
                Get a Quote
              </a>
              <a href="/contact" className={modalStyles.bookBtn}>
                Book a Viewing
              </a>
            </div>

          </>
        )}
      </div>
    </div>
  );
}
