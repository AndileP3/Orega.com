
import { useState } from 'react';
import styles from '../../styles/hero.module.css';

export default function HeroContent({ fieldValues }) {
  const {
    title = "Flexible workspace to unlock your potential.",
    subtitle = "Stylish, flexible office space without the headaches of old-fashioned leases.",
    buttonText = "Find",
  } = fieldValues;

  return (
    <div className={styles.contentContainer}>
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>

        {/* Dropdown Buttons */}
        <div className={styles.supportContainer}>
          {/* Location Dropdown */}
          <div className={styles.dropdownWrapper}>
            <div className={styles.dropdownTriggerWrapper}>
              <button className={styles.dropdownTrigger}>
                Choose a location
              </button>
              <div className={styles.dropdownMenu1}>
                {['London', 'Manchester', 'Birmingham', 'Aberdeen'].map((city) => (
                  <div key={city} className={styles.dropdownColumn}>
                    <h4>{city}</h4>
                    <ul>
                      <li className={styles.dropdownItem}>Office A</li>
                      <li className={styles.dropdownItem}>Office B</li>
                      <li className={styles.dropdownItem}>Office C</li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* People Dropdown */}
          <div className={styles.dropdownWrapper}>
            <div className={styles.dropdownTriggerWrapper}>
              <button className={styles.dropdownTrigger}>
                No. People
              </button>
              <div className={styles.dropdownMenu2}>
                <div className={styles.dropdownColumn}>
                  {['1-5', '6-10', '11-20', '20+'].map((group) => (
                    <button key={group} className={styles.dropdownItem}>
                      {group}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Services Dropdown */}
          <div className={styles.dropdownWrapper}>
            <div className={styles.dropdownTriggerWrapper}>
              <button className={styles.dropdownTrigger}>
                Select a Service
              </button>
              <div className={styles.dropdownMenu3}>
                {[
                  {
                    label: 'Private Office',
                    image: 'https://www.orega.com/hubfs/private-office.jpg',
                  },
                  {
                    label: 'Co-Working Space',
                    image: 'https://www.orega.com/hubfs/coworking.jpg',
                  },
                  {
                    label: 'Meeting Room',
                    image: 'https://www.orega.com/hubfs/meeting-room.jpg',
                  },
                  {
                    label: 'Virtual Office',
                    image: 'https://www.orega.com/hubfs/virtual-office.jpg',
                  },
                ].map((service) => (
                  <div key={service.label} className={styles.dropdownServiceCard}>
                    <img src={service.image} alt={service.label} className={styles.serviceImage} />
                    <p className={styles.serviceLabel}>{service.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <button className={styles.ctaButton}>{buttonText}</button>
        </div>
      </div>
    </div>
  );
}
