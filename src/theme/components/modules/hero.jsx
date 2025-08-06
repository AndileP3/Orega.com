import { ModuleFields, TextField } from '@hubspot/cms-components/fields';
import styles from '../../styles/hero.module.css';

export function Component({ fieldValues }) {
  const {
    title = "Flexible workspace to unlock your potential.",
    subtitle = "Stylish, flexible office space without the headaches of old-fashioned leases.",
    buttonText = "Find",
  } = fieldValues;

  return (
    <section className={styles.hero}>
      {/* Editable fields visible in editor/preview */}
      <ModuleFields>
        <TextField name="title" label="Main Heading" />
        <TextField name="subtitle" label="Subtitle" />
        <TextField name="buttonText" label="CTA Button Text" />
      </ModuleFields>

      <div className={styles.contentContainer}>
        <div className={styles.content}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.subtitle}>{subtitle}</p>

          {/* Search Dropdowns */}
          <div className={styles.supportContainer}>
            <div className={styles.searchField}>
              <select className={styles.searchInput}>
                <option value="">Choose a location</option>
                <option value="london">London</option>
                <option value="manchester">Manchester</option>
                <option value="birmingham">Birmingham</option>
                <option value="aberdeen">Aberdeen</option>
              </select>
            </div>

            <div className={styles.searchField}>
              <select className={styles.searchInput}>
                <option value="">No. people</option>
                <option value="1-5">1-5</option>
                <option value="6-10">6-10</option>
                <option value="11-20">11-20</option>
                <option value="20+">20+</option>
              </select>
            </div>

            <div className={styles.searchField}>
              <select className={styles.searchInput}>
                <option value="">Select a service</option>
                <option value="private-office">Private Office</option>
                <option value="coworking">Co-Working Space</option>
                <option value="meeting-room">Meeting Room</option>
                <option value="virtual-office">Virtual Office</option>
              </select>
            </div>

            <button className={styles.ctaButton}>{buttonText}</button>
          </div>
        </div>
      </div>

      {/* Support Info Section */}
      <div className={styles.supportContainer}>
        <div className={styles.supportItem}>
          <strong>Need help? Call us today on</strong>
        </div>
        <div className={styles.supportItem}>
          <img
            src="https://www.orega.com/hubfs/phone-icon.svg"
            alt="Phone Icon"
            className={styles.phoneIcon}
          />
          <span>0800 840 5509</span>
        </div>
        <div className={styles.supportItem}>
          Our customer support team are on hand to answer any questions.
        </div>
      </div>
    </section>
  );
}

// ✅ Required named export so HubSpot knows the editable fields
export const fields = (
  <ModuleFields>
    <TextField
      name="title"
      label="Main Heading"
      default="Flexible workspace to unlock your potential."
    />
    <TextField
      name="subtitle"
      label="Subtitle"
      default="Stylish, flexible office space without the headaches of old-fashioned leases."
    />
    <TextField
      name="buttonText"
      label="CTA Button Text"
      default="Find"
    />
  </ModuleFields>
);

// Optional: Give your module a name in the HubSpot editor
export const meta = {
  label: 'Hero Section',
};
