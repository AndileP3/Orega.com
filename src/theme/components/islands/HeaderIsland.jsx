import { ModuleFields, ImageField } from '@hubspot/cms-components/fields';
import React, { useState, useEffect } from 'react';
import styles from '../../styles/header.module.css';

export default function Header({ fieldValues = {} }) {
  const { logoImage } = fieldValues || {};
  const logoImageUrl =
    logoImage?.src || 'https://www.orega.com/hubfs/orega-logo.svg';

  // HUBDB setup
  const HUBDB_TABLE_ID = 128385095; // Offices table ID
  const PORTAL_ID = 47574277; // Replace with your portal ID

  // State
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isContactDropdownOpen, setIsContactDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentFormType, setCurrentFormType] = useState('contact');
  const [formTitle, setFormTitle] = useState('Contact us');

  // Popup state
  const [showPopup, setShowPopup] = useState(false);
  const [popupContext, setPopupContext] = useState(null); // "city" or "service"
  const [selectedService, setSelectedService] = useState(null);
  const [officeList, setOfficeList] = useState([]);
  const [selectedOffice, setSelectedOffice] = useState(null);
  const [loading, setLoading] = useState(false);
  const [allOffices, setAllOffices] = useState([]);

  // Search state
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');

  // Debounce searchTerm updates
  useEffect(() => {
    const handler = setTimeout(() => setDebouncedSearch(searchTerm), 500);
    return () => clearTimeout(handler);
  }, [searchTerm]);

  // Filter offices by search term
  const filteredOffices = officeList.filter((office) => {
    const name = office.values?.name?.toLowerCase() || '';
    const city = office.values?.city?.toLowerCase() || '';
    return (
      name.includes(debouncedSearch.toLowerCase()) ||
      city.includes(debouncedSearch.toLowerCase())
    );
  });

  // Service headings + subtitles
  const serviceContent = {
    serviced: {
      title: 'Serviced Offices',
      subtitle:
        'Flexible, fully equipped serviced offices designed to help your business thrive.',
    },
    virtual: {
      title: 'Virtual Offices',
      subtitle:
        'Explore our premium virtual offices available across multiple locations.',
    },
    meeting: {
      title: 'Meeting Rooms',
      subtitle:
        'Book purpose-built meeting rooms with concierge support for a professional experience.',
    },
    coworking: {
      title: 'Coworking',
      subtitle:
        'Collaborative coworking spaces that inspire productivity and networking.',
    },
    temporary: {
      title: 'Temporary Offices',
      subtitle:
        'Short-term, ready-to-use offices tailored to meet your urgent business needs.',
    },
  };

  const navigation = [
    {
      label: 'Locations',
      url: '/home-2',
      dropdownItems: [
        { label: 'London', url: '#', isCity: true },
        { label: 'Manchester', url: '#', isCity: true },
        { label: 'North', url: '#', isCity: true },
        { label: 'Midlands', url: '#', isCity: true },
        { label: 'South', url: '#', isCity: true },
        { label: 'Scotland', url: '#', isCity: true },
      ],
    },
    {
      label: 'Services',
      url: '/orega.com-services',
      dropdownItems: [
        { label: 'Serviced Offices', url: '#', serviceType: 'serviced' },
        { label: 'Virtual Offices', url: '#', serviceType: 'virtual' },
        { label: 'Meeting Rooms', url: '#', serviceType: 'meeting' },
        { label: 'Coworking', url: '#', serviceType: 'coworking' },
        { label: 'Temporary Offices', url: '#', serviceType: 'temporary' },
      ],
    },
    { label: 'About', url: '/about' },
    { label: 'Landlords', url: '/landlords' },
    { label: 'News & Views', url: '/news' },
    {
      label: 'Contact Us',
      isContact: true,
      dropdownItems: [
        { label: 'Contact us', url: '/contact' },
        { label: 'Get a quote', url: '#', formType: 'quote' },
        { label: 'Book a tour', url: '#', formType: 'tour' },
        { label: 'Request a callback', url: '#', formType: 'callback' },
      ],
    },
  ];

  const fetchOffices = async () => {
    if (allOffices.length > 0) return allOffices;

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

  const handleCityClick = async (city) => {
    const offices = await fetchOffices();
    const filtered = offices.filter(
      (row) => row.values?.city?.toLowerCase() === city.toLowerCase()
    );
    setOfficeList(filtered);
    setSelectedOffice(null);
    setPopupContext('city');
    setSelectedService(null);
    setShowPopup(true);
  };

  const handleServiceSelect = async (serviceType) => {
    const offices = await fetchOffices();
    const selectedServiceKey = (serviceType || '').toLowerCase().trim();

    const filteredOffices = offices.filter((office) => {
      const officeType = (office.values.type || '').toLowerCase().trim();
      return officeType === selectedServiceKey;
    });

    setOfficeList(filteredOffices);
    setSelectedOffice(null);
    setPopupContext('service');
    setSelectedService(selectedServiceKey);
    setShowPopup(true);
  };

  const handleOfficeClick = (office) => {
    setSelectedOffice({
      name: office.values.name,
      city: office.values.city,
      description: office.values.description,
      image:
        office.values.image?.url ||
        'https://via.placeholder.com/600x400?text=No+Image',
    });
  };

  const closePopup = () => {
    setShowPopup(false);
    setOfficeList([]);
    setSelectedOffice(null);
    setPopupContext(null);
    setSelectedService(null);
    setSearchTerm('');
  };

  const toggleMobileNav = () => setIsMobileNavOpen(!isMobileNavOpen);

  const toggleContactDropdown = (e) => {
    e.preventDefault();
    setIsContactDropdownOpen(!isContactDropdownOpen);
  };

  const openModal = (formType, label) => {
    setCurrentFormType(formType);
    setFormTitle(label);
    setIsModalOpen(true);
    setIsContactDropdownOpen(false);
  };

  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (isModalOpen && e.target.id === 'contactModal') closeModal();
    };

    if (isModalOpen) {
      document.addEventListener('click', handleOutsideClick);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick);
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__container}>
          <button
            className={styles.header__toggle}
            onClick={toggleMobileNav}
            aria-label="Toggle Menu"
          >
            &#9776;
          </button>

          <div className={styles.header__logoContainer}>
            <a href="/home-2">
              <img
                src={logoImageUrl}
                alt="Orega"
                className={styles.header__logo}
              />
            </a>
          </div>

          <nav
            className={`${styles.header__nav} ${
              isMobileNavOpen ? styles.show : ''
            }`}
            id="mobile-nav"
          >
            {navigation.map((item, index) => (
              <div
                key={index}
                className={`${styles.header__navItem} ${
                  item.dropdownItems ? styles.hasDropdown : ''
                }`}
              >
                <a
                  href={item.url}
                  className={
                    item.isContact
                      ? `${styles.header__contactLink} ${styles.contactToggle}`
                      : styles.header__navLink
                  }
                  onClick={item.isContact ? toggleContactDropdown : undefined}
                >
                  {item.label}
                  {item.dropdownItems && (
                    <span className={styles.caret}>&#9662;</span>
                  )}
                </a>
                {item.dropdownItems && (
                  <div
                    className={`${styles.dropdown} ${
                      item.isContact && isContactDropdownOpen ? styles.open : ''
                    } ${item.isContact ? styles.contactDropdown : ''}`}
                  >
                    {item.dropdownItems.map((drop, dropIndex) => (
                      <div
                        key={dropIndex}
                        className={`${styles.dropdownItem} ${
                          drop.subItems ? styles.hasSubmenu : ''
                        }`}
                      >
                        <a
                          href={drop.url}
                          className={item.isContact ? styles.contactOption : ''}
                          onClick={(e) => {
                            if (item.isContact && drop.formType) {
                              e.preventDefault();
                              openModal(drop.formType, drop.label);
                            } else if (
                              item.label === 'Services' &&
                              drop.serviceType
                            ) {
                              e.preventDefault();
                              handleServiceSelect(drop.serviceType);
                            } else if (item.label === 'Locations' && drop.isCity) {
                              e.preventDefault();
                              handleCityClick(drop.label);
                            }
                          }}
                        >
                          {drop.label}
                        </a>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </header>

      {/* Office/Service Popup */}
      {showPopup && (
        <div className={styles.popupOverlay}>
          <div className={styles.popupCard}>
            <button className={styles.closeBtn} onClick={closePopup}>
              ×
            </button>

            {!selectedOffice ? (
              <>
                <h2 className={styles.popupTitle}>
                  {popupContext === 'city' && officeList[0]?.values?.city
                    ? `Luxury Offices in ${officeList[0].values.city}`
                    : popupContext === 'service' && selectedService
                    ? serviceContent[selectedService]?.title
                    : 'Our Offices'}
                </h2>

                <p className={styles.popupSubtitle}>
                  {popupContext === 'city' && officeList[0]?.values?.city
                    ? 'Here are some of our offices you can choose from.'
                    : popupContext === 'service' && selectedService
                    ? serviceContent[selectedService]?.subtitle
                    : 'Here are some of our offices you can choose from.'}
                </p>

                {/* Search box */}
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
                        <button
                          className={styles.viewDetailsBtn}
                          onClick={() => handleOfficeClick(office)}
                        >
                          View Details
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p>No offices match your search.</p>
                )}
              </>
            ) : (
              <>
                <h2 className={styles.popupTitle}>{selectedOffice.name}</h2>
                <div className={styles.imageContainer}>
                  <img
                    src={selectedOffice.image}
                    alt={selectedOffice.name}
                    className={styles.fullImage}
                  />
                  <div className={styles.textContainer}>
                    <h3>{selectedOffice.city}</h3>
                    <p>{selectedOffice.description}</p>
                  </div>
                </div>
                <div className={styles.popupFooter}>
                  <a href="/contact" className={styles.exploreBtn}>
                    Get a Quote
                  </a>
                  <a href="/contact" className={styles.BookBtn}>
                    Book a Viewing
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Contact Form Modal */}
      {isModalOpen && (
        <div id="contactModal" className={styles.modal}>
          <div className={styles.modalContent}>
            <span className={styles.close} onClick={closeModal}>
              &times;
            </span>
            <div className={styles.modalBody}>
              <div className={styles.formSection}>
                <h2 id={styles.formTitle}>{formTitle}</h2>
                <form>
                  <div className={styles.formGrid}>
                    <input type="text" placeholder="First name*" required />
                    <input type="text" placeholder="Last name*" required />
                    <input type="tel" placeholder="Phone number*" required />
                    <input type="email" placeholder="Email*" required />
                    <input type="text" placeholder="Company name*" required />
                    <select required>
                      <option value="">Location*</option>
                      <option value="Aberdeen">
                        Aberdeen - Capitol Building
                      </option>
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
                    <input
                      type="checkbox"
                      className="checkboxInput"
                      required
                    />{' '}
                    I agree to receive communications as necessary to provide
                    our products and services as requested from Orega.*
                  </label>

                  <label>
                    <input type="checkbox" className="checkboxInput" /> I agree
                    to receive other communications from Orega.
                  </label>

                  <button type="submit" className={styles.submitBtn}>
                    SUBMIT
                  </button>
                </form>
              </div>

              <div className={styles.imageSection}>
                <img
                  src="https://www.orega.com/hs-fs/hubfs/get-a-quote.png?width=400&height=800&name=get-a-quote.png"
                  alt="Testimonial"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
