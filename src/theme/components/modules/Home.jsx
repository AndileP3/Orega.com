import { ModuleFields, TextField } from '@hubspot/cms-components/fields';
import styles from '../../styles/hero.module.css'; // <-- this is your custom styles file

export function Component({ fieldValues }) {
  const {
    title = "Flexible workspace to unlock your potential.",
    subtitle = "Stylish, flexible office space without the headaches of old-fashioned leases.",
    buttonText = "Find",
  } = fieldValues;

  return (
    <section className={styles.hero}>
      <div className={styles.contentContainer}>
        <div className={styles.content}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.subtitle}>{subtitle}</p>

          {/* Search Dropdowns */}
          <div className={styles.supportContainer}>
            <div className={styles.searchField}>
              <label>Choose a location</label>
              <select className={styles.searchInput}>
                <option value="">Select location</option>
                <option value="london">London</option>
                <option value="manchester">Manchester</option>
                <option value="birmingham">Birmingham</option>
                <option value="aberdeen">Aberdeen</option>
              </select>
            </div>

            <div className={styles.searchField}>
              <label>No. people</label>
              <select className={styles.searchInput}>
                <option value="">Select number</option>
                <option value="1-5">1-5</option>
                <option value="6-10">6-10</option>
                <option value="11-20">11-20</option>
                <option value="20+">20+</option>
              </select>
            </div>

            <div className={styles.searchField}>
              <label>Select a service</label>
              <select className={styles.searchInput}>
                <option value="">Select service</option>
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
    </section>
  );
}

export const fields = (
  <ModuleFields>
    <TextField name="title" label="Main Heading" default="Flexible workspace to unlock your potential." />
    <TextField name="subtitle" label="Subtitle" default="Stylish, flexible office space without the headaches of old-fashioned leases." />
    <TextField name="buttonText" label="CTA Button Text" default="Find" />
  </ModuleFields>
);

export const meta = {
  label: 'Hero Section',
};
