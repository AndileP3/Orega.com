import { ModuleFields } from '@hubspot/cms-components/fields';
import { Island } from '@hubspot/cms-components';
import ButtonIsland from '../islands/ButtonFixedIsland?island';
import styles from '../../styles/header.module.css';

export function Component({ fieldValues }) {
  return (
    <div className={styles.moduleWrapper}>
      <Island module={ButtonIsland} fieldValues={fieldValues} />
    </div>
  );
}

export const fields = (
  <ModuleFields>
    {/* No fields yet, just a static button */}
  </ModuleFields>
);

export const meta = {
  label: 'Floating Button Popup Module',
};

export default Component;
