import { ModuleFields, TextField, ImageField, ChoiceField } from '@hubspot/cms-components/fields';
import styles from '../../styles/hero.module.css';
import officeStyles from '../../styles/officesearch.module.css';

export function Component({ fieldValues }) {
  const {
    title,
    subtitle,
    backgroundImage,
    overlayColor,
    placeholder
  } = fieldValues;

  return (
    <section
      className={styles.hero}
      style={{
        backgroundImage: `url(${backgroundImage})`
      }}
    >
      <div className={styles.contentContainer}>
        <div className={styles.content}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.subtitle}>{subtitle}</p>

          <div className={officeStyles.searchForm}>
            <div className={officeStyles.searchField}>
              <select className={officeStyles.searchInput} defaultValue="">
                <option value="" disabled hidden>Choose a Location</option>
                <option value="new-york">New York</option>
                <option value="london">London</option>
                <option value="tokyo">Tokyo</option>
                <option value="dubai">Dubai</option>
              </select>
            </div>
            <div className={officeStyles.searchField}>
              <select className={officeStyles.searchInput} defaultValue="">
                <option value="" disabled hidden>No. People</option>
                <option value="1-5">1-5</option>
                <option value="6-10">6-10</option>
                <option value="11-20">11-20</option>
                <option value="20+">20+</option>
              </select>
            </div>
            <div className={officeStyles.searchField}>
              <select className={officeStyles.searchInput} defaultValue="">
                <option value="" disabled hidden>Select a service</option>
                <option value="private-office">Private Office</option>
                <option value="coworking">Co-Working Space</option>
                <option value="meeting-room">Meeting Room</option>
                <option value="virtual-office">Virtual Office</option>
              </select>
            </div>
            <button className={officeStyles.searchButton}>Find</button>
          </div>
        </div>
      </div>

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

export const fields = (
  <ModuleFields>
    <TextField
      name="title"
      label="Main Heading"
      default="Flexible workspace to unlock your potential."
      required={true}
    />
    <TextField
      name="subtitle"
      label="Subheading"
      default="Stylish, flexible office space without the headaches of old-fashioned leases."
    />
    <ImageField
      name="backgroundImage"
      label="Background Image"
    />
    <ChoiceField
      name="overlayColor"
      label="Content Background"
      default="rgba(255,255,255,0.9)"
      choices={[
        { label: 'White (90%)', value: 'rgba(255,255,255,0.9)' },
        { label: 'White (80%)', value: 'rgba(255,255,255,0.8)' },
        { label: 'Light Gray (90%)', value: 'rgba(245,245,245,0.9)' }
      ]}
    />
    <TextField
      name="placeholder"
      label="Search Placeholder"
      default="Choose an option"
    />
  </ModuleFields>
);

export const meta = {
  label: 'Hero Section with Search',
  icon: 'image-text'
};
