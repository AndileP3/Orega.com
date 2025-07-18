import { ModuleFields, TextField } from '@hubspot/cms-components/fields';
import styles from '../../styles/officesearch.module.css';

export function Component() {
  return (
    <div className={styles.searchForm}>
      <div className={styles.searchField}>
        <label>Choose a Location</label>
        <select className={styles.searchInput}>
          <option value="">Select location</option>
          <option value="new-york">New York</option>
          <option value="london">London</option>
          <option value="tokyo">Tokyo</option>
          <option value="dubai">Dubai</option>
        </select>
      </div>
      <div className={styles.searchField}>
        <label>Number of People</label>
        <select className={styles.searchInput}>
          <option value="">Select number</option>
          <option value="1-5">1-5</option>
          <option value="6-10">6-10</option>
          <option value="11-20">11-20</option>
          <option value="20+">20+</option>
        </select>
      </div>
      <div className={styles.searchField}>
        <label>Select a Service</label>
        <select className={styles.searchInput}>
          <option value="">Select service</option>
          <option value="private-office">Private Office</option>
          <option value="coworking">Co-Working Space</option>
          <option value="meeting-room">Meeting Room</option>
          <option value="virtual-office">Virtual Office</option>
        </select>
      </div>
      <button className={styles.searchButton}>Find My Space</button>
    </div>
  );
}

export const fields = (
  <ModuleFields>
    <TextField
      name="placeholder"
      label="Placeholder Text"
      default="Search for office spaces"
    />
  </ModuleFields>
);

export const meta = {
  label: 'Office Search',
};