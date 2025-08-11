import { useState } from 'react';
import styles from '../../styles/hero.module.css';

export default function HeroContent({ fieldValues }) {
  const {
    title = "Flexible workspace to unlock your potential.",
    subtitle = "Stylish, flexible office space without the headaches of old-fashioned leases.",
    buttonText = "Find",
  } = fieldValues;

  const offices = {
    London: [
      'Strand',
      'Mark Lane',
      'Lime Street',
      'Holborn Gate',
      'Gracechurch Street',
      'High Holborn',
      'Old Bailey'
    ],
    Manchester: [
      'The Tootal Buildings',
      'Balloon Street',
      'Manchester Piccadilly',
      'Arkwright House'
    ],
    North: [
      'Newcastle',
      'Liverpool',
      'Leeds'
    ],
    Midlands: [
      'The Colmore Building - Birmingham',
      'Ingenuity House - Birmingham'
    ],
    South: [
      'Marlow',
      'Bristol',
      'Gatwick',
      'Uxbridge',
      'Stockley Park'
    ],
    Scotland: [
      'Aberdeen',
      'Glasgow St Vincent Street'
    ]
  };

  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedPeople, setSelectedPeople] = useState('');
  const [selectedService, setSelectedService] = useState('');

  const [hoveredMenu, setHoveredMenu] = useState(null);
  let hoverTimeout = null;

  const handleMouseEnter = (menu) => {
    clearTimeout(hoverTimeout);
    setHoveredMenu(menu);
  };

  const handleMouseLeave = () => {
    hoverTimeout = setTimeout(() => {
      setHoveredMenu(null);
    }, 500); // 5s delay before hiding
  };

  return (
    <div className={styles.contentContainer}>
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>

        {/* Dropdown Buttons */}
        <div className={styles.supportContainer}>

          {/* Location Dropdown */}
          <div className={styles.dropdownWrapper}
               onMouseEnter={() => handleMouseEnter('location')}
               onMouseLeave={handleMouseLeave}>
            <div className={styles.dropdownTriggerWrapper}>
              <button className={styles.dropdownTrigger}>
                Choose a location
              </button>
              {selectedLocation && <div className={styles.selectedValue}>{selectedLocation}</div>}
              {hoveredMenu === 'location' && (
                <div className={styles.dropdownMenu1}>
                  {Object.entries(offices).map(([city, officeList]) => (
                    <div key={city} className={styles.dropdownColumn}>
                      <h4>{city}</h4>
                      <ul>
                        {officeList.map((office) => (
                          <li
                            key={office}
                            className={styles.dropdownItem}
                            onClick={() => setSelectedLocation(office)}
                          >
                            {office}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* People Dropdown */}
          <div className={styles.dropdownWrapper}
               onMouseEnter={() => handleMouseEnter('people')}
               onMouseLeave={handleMouseLeave}>
            <div className={styles.dropdownTriggerWrapper}>
              <button className={styles.dropdownTrigger}>
                No. People
              </button>
              {selectedPeople && <div className={styles.selectedValue}>{selectedPeople}</div>}
              {hoveredMenu === 'people' && (
                <div className={styles.dropdownMenu2}>
                  <div className={styles.dropdownColumn}>
                    <h4>No. People</h4>
                    {['1', '2-3', '4-10', '11-20', '21-30', '31-40', '41-50', '50+'].map((group) => (
                      <button
                        key={group}
                        className={styles.dropdownItem}
                        onClick={() => setSelectedPeople(group)}
                      >
                        {group}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Services Dropdown */}
          <div className={styles.dropdownWrapper}
               onMouseEnter={() => handleMouseEnter('service')}
               onMouseLeave={handleMouseLeave}>
            <div className={styles.dropdownTriggerWrapper}>
              <button className={styles.dropdownTrigger}>
                Select a Service
              </button>
              {selectedService && <div className={styles.selectedValue}>{selectedService}</div>}
              {hoveredMenu === 'service' && (
                <div className={styles.dropdownMenu3}>
                  {[
                    {
                      label: 'Serviced Offices',
                      image: 'https://www.orega.com/hubfs/Icons/service-offices.svg',
                    },
                    {
                      label: 'Virtual Offices',
                      image: 'https://www.orega.com/hubfs/virtual-offices-1.svg',
                    },
                    {
                      label: 'Meeting Rooms',
                      image: 'https://www.orega.com/hubfs/Icons/meeting-rooms.svg',
                    },
                  ].map((service) => (
                    <div
                      key={service.label}
                      className={styles.dropdownServiceCard}
                      onClick={() => setSelectedService(service.label)}
                    >
                      <p className={styles.serviceLabel}>{service.label}</p>
                      <img src={service.image} alt={service.label} className={styles.serviceImage} />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <button className={styles.ctaButton}>{buttonText}</button>
        </div>
      </div>
    </div>
  );
}
