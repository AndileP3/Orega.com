import { ModuleFields, ImageField } from '@hubspot/cms-components/fields';
import React, { useState, useEffect } from 'react';
import styles from '../../styles/header.module.css';

export default function Header({ fieldValues = {} }) {
  const { logoImage } = fieldValues || {};
  const logoImageUrl = logoImage?.src || "https://www.orega.com/hubfs/orega-logo.svg";

  // HUBDB setup
  const HUBDB_TABLE_ID = 128385095; // Offices table ID
  const PORTAL_ID = 47574277;       // Replace with your portal ID

  // State
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isContactDropdownOpen, setIsContactDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentFormType, setCurrentFormType] = useState('contact');
  const [formTitle, setFormTitle] = useState('Contact us');
  
  // Popup state
  const [showPopup, setShowPopup] = useState(false);
  const [officeList, setOfficeList] = useState([]);  // offices in a city
  const [selectedOffice, setSelectedOffice] = useState(null); // clicked office details
  const [loading, setLoading] = useState(false);
  const [allOffices, setAllOffices] = useState([]); // Cache all offices

  const navigation = [
     {
    "label": "Locations",
    "url": "/home-2",
    "dropdownItems": [
      { "label": "London", "url": "#", "isCity": true },
      { "label": "Manchester", "url": "#", "isCity": true },
      { "label": "North", "url": "#", "isCity": true },
      { "label": "Midlands", "url": "#", "isCity": true },
      { "label": "South", "url": "#", "isCity": true },
      { "label": "Scotland", "url": "#", "isCity": true }
    ]
  },
    {
      "label": "Services",
      "url": "/orega.com-services",
      "dropdownItems": [
        { "label": "Serviced Offices", "url": "#", "serviceType": "serviced" },
        { "label": "Virtual Offices", "url": "#", "serviceType": "virtual" },
        { "label": "Meeting Rooms", "url": "#", "serviceType": "meeting" },
        { "label": "Coworking", "url": "#", "serviceType": "coworking" },
        { "label": "Temporary Offices", "url": "#", "serviceType": "temporary" }
      ]
    },
    { "label": "About", "url": "/about" },
    { "label": "Landlords", "url": "/landlords" },
    { "label": "News & Views", "url": "/news" },
    { 
      "label": "Contact Us",  
      "isContact": true, 
      "dropdownItems": [
        { "label": "Contact us", "url": "/contact"},
        { "label": "Get a quote", "url": "#", "formType": "quote" },
        { "label": "Book a tour", "url": "#", "formType": "tour" },
        { "label": "Request a callback", "url": "#", "formType": "callback" }
      ] 
    }
  ];

  const fetchOffices = async () => {
    if (allOffices.length > 0) return allOffices; // Return cached data
    
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
      console.error("HubDB fetch error:", err);
      return [];
    } finally {
      setLoading(false);
    }
  };

  // Handle city click from main dropdown
  const handleCityClick = async (city) => {
    const offices = await fetchOffices();
    const filtered = offices.filter(
      (row) => row.values?.city?.toLowerCase() === city.toLowerCase()
    );
    setOfficeList(filtered);
    setSelectedOffice(null);
    setShowPopup(true);
  };

  // Handle office selection from submenu
  const handleOfficeSelect = async (officeName) => {
    const offices = await fetchOffices();
    const office = offices.find(
      (row) => row.values?.name?.toLowerCase() === officeName.toLowerCase()
    );
    
    if (office) {
      setSelectedOffice({
        name: office.values.name,
        city: office.values.city,
        description: office.values.description,
        image: office.values.image?.url || "https://via.placeholder.com/600x400?text=No+Image"
      });
      setShowPopup(true);
    }
  };

  // Handle service selection
// Handle service selection
const handleServiceSelect = async (serviceType) => {
  const offices = await fetchOffices();

  // Normalize the selected service
  const selectedService = (serviceType || "").toLowerCase().trim();

  const filteredOffices = offices.filter(office => {
    // Normalize the HubDB type column
    const officeType = (office.values.type || "").toLowerCase().trim();
    return officeType === selectedService;
  });

  setOfficeList(filteredOffices);
  setSelectedOffice(null);
  setShowPopup(true);
};

  // Handle office click from grid
  const handleOfficeClick = (office) => {
    setSelectedOffice({
      name: office.values.name,
      city: office.values.city,
      description: office.values.description,
      image: office.values.image?.url || "https://via.placeholder.com/600x400?text=No+Image"
    });
  };

  const closePopup = () => {
    setShowPopup(false);
    setOfficeList([]);
    setSelectedOffice(null);
  };

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

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

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (isModalOpen && e.target.id === 'contactModal') {
        closeModal();
      }
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
            className={`${styles.header__nav} ${isMobileNavOpen ? styles.show : ''}`}
            id="mobile-nav"
          >
            {navigation.map((item, index) => (
              <div 
                key={index}
                className={`${styles.header__navItem} ${item.dropdownItems ? styles.hasDropdown : ''}`}
              >
                <a 
                  href={item.url} 
                  className={item.isContact ? `${styles.header__contactLink} ${styles.contactToggle}` : styles.header__navLink}
                  onClick={item.isContact ? toggleContactDropdown : undefined}
                >
                  {item.label}
                  {item.dropdownItems && (
                    <span className={styles.caret}>&#9662;</span>
                  )}
                </a>
                {item.dropdownItems && (
                  <div 
                    className={`${styles.dropdown} ${item.isContact && isContactDropdownOpen ? styles.open : ''} ${item.isContact ? styles.contactDropdown : ''}`}
                  >
                    {item.dropdownItems.map((drop, dropIndex) => (
                      <div 
                        key={dropIndex}
                        className={`${styles.dropdownItem} ${drop.subItems ? styles.hasSubmenu : ''}`}
                      >
                        <a 
                          href={drop.url}
                          className={item.isContact ? styles.contactOption : ''}
                          onClick={(e) => {
                            if (item.isContact && drop.formType) {
                              e.preventDefault();
                              openModal(drop.formType, drop.label);
                            } else if (item.label === "Services" && drop.serviceType) {
                              e.preventDefault();
                              handleServiceSelect(drop.serviceType);
                            } else if (item.label === "Locations" && drop.isCity) {
                                e.preventDefault();
                                handleCityClick(drop.label); // fetch all offices for that city from HubDB
                              }

                          }}
                        >
                          {drop.label}
                          {drop.subItems && (
                            <span className={styles.caretRight}>&#9656;</span>
                          )}
                        </a>
                        {drop.subItems && (
                          <div className={styles.submenu}>
                            {drop.subItems.map((sub, subIndex) => (
                              <a 
                                key={subIndex} 
                                href={sub.url}
                                onClick={(e) => {
                                  e.preventDefault();
                                  handleOfficeSelect(sub.label);
                                }}
                              >
                                {sub.label}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </header>

      {/* Office Popup */}
      {showPopup && (
        <div className={styles.popupOverlay}>
          <div className={styles.popupCard}>
            <button className={styles.closeBtn} onClick={closePopup}>×</button>

            {!selectedOffice ? (
              <>
                <h2 className={styles.popupTitle}>Select an Office</h2>
                {loading ? (
                  <p>Loading offices...</p>
                ) : officeList.length > 0 ? (
                  <div className={styles.officeGrid}>
                    {officeList.map((office) => (
                      <div key={office.id} className={styles.officeCard}>
                        <img 
                          src={office.values.image?.url || "https://via.placeholder.com/300x200"} 
                          alt={office.values.name} 
                        />
                        <h3>{office.values.name}</h3>
                        <button className={styles.viewDetailsBtn} onClick={() => handleOfficeClick(office)}>View Details</button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p>No offices found.</p>
                )}
              </>
            ) : (
              <>
                <h2 className={styles.popupTitle}>{selectedOffice.name}</h2>
                <div className={styles.imageContainer}>
                <img src={selectedOffice.image} alt={selectedOffice.name} className={styles.fullImage} />
                <div className={styles.textContainer}>
                <h3>{selectedOffice.city}</h3>
                <p>{selectedOffice.description}</p>
                </div>
                </div>
                <div className={styles.popupFooter}>
                  <button className={styles.exploreBtn}>Get a Quote</button>
                  <button className={styles.BookBtn}>Book a Viewing</button>
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
            <span className={styles.close} onClick={closeModal}>&times;</span>
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
                      <option value="Aberdeen">Aberdeen - Capitol Building</option>
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
                    <input type="checkbox" className="checkboxInput" required /> 
                    I agree to receive communications as necessary to provide our products and services as requested from Orega.*
                  </label>

                  <label>
                    <input type="checkbox" className="checkboxInput" /> 
                    I agree to receive other communications from Orega.
                  </label>

                  <button type="submit" className={styles.submitBtn}>SUBMIT</button>
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