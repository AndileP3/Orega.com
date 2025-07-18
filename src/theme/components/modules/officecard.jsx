import { ModuleFields, TextField, ImageField, NumberField } from '@hubspot/cms-components/fields';
import styles from '../../styles/officecard.css';

export function Component({ fieldValues }) {
  const { image, title, price, description } = fieldValues;

  return (
    <div className={styles.officeCard}>
      <div 
        className={styles.officeImage} 
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className={styles.officeInfo}>
        <h3>{title}</h3>
        <p className={styles.price}>From ${price}/month</p>
        <p className={styles.description}>{description}</p>
        <button className={styles.viewButton}>View Details</button>
      </div>
    </div>
  );
}

export const fields = (
  <ModuleFields>
    <ImageField
      name="image"
      label="Office Image"
      default="https://images.unsplash.com/photo-1497366811353-6870744d04b2"
    />
    <TextField
      name="title"
      label="Office Title"
      default="Executive Suite"
    />
    <NumberField
      name="price"
      label="Starting Price"
      default={1200}
    />
    <TextField
      name="description"
      label="Description"
      default="Premium office space with all amenities included"
    />
  </ModuleFields>
);

export const meta = {
  label: 'Office Card',
};