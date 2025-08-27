import { ModuleFields, ImageField } from '@hubspot/cms-components/fields';
import { Island } from '@hubspot/cms-components';
import HeaderIsland from '../islands/HeaderIsland?island';
import styles from '../../styles/header.module.css';

export function Component({ fieldValues }) {
  return (
    <div className={styles.headerWrapper}>
      <Island module={HeaderIsland} fieldValues={fieldValues} />
    </div>
  );
}

export const fields = (
  <ModuleFields>
    <ImageField 
      name="logoImage" 
      label="Logo Image" 
      default={{ 
        src: "https://www.orega.com/hubfs/orega-logo.svg",
        width: 84,
        height: 40,
        alt: "Orega Logo"
      }} 
    />
  </ModuleFields>
);

export const meta = {
  label: 'Header Module',
};

// ✅ this is required
export default Component;
