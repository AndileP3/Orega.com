import { ModuleFields, TextField } from '@hubspot/cms-components/fields';
import {Island} from '@hubspot/cms-components';
import FeaturedLocationsIsland from '../islands/FeaturedLocations?island';  // <-- notice ?island here
import styles from '../../styles/featuredLocations.module.css';

export function Component({ fieldValues }) {
  return (
    <div className={styles.carouselWrapper}>
      <Island 
      module={FeaturedLocationsIsland} 
      fieldValues={fieldValues} />
    </div>
  );
}

export const fields = (
  <ModuleFields>
    {[1, 2, 3, 4, 5].map(i => (
      <div key={i}>
        <TextField
          name={`office${i}_title`}
          label={`Office ${i} Title`}
          default={["Manchester", "London", "Bristol", "Gatwick", "Arkwright House"][i - 1]}
        />
        <TextField
          name={`office${i}_location`}
          label={`Office ${i} Location`}
          default={["Balloon Street", "Gracechurch Street", "Bristol City Centre", "Gatwick Office", "Manchester"][i - 1]}
        />
      </div>
    ))}
  </ModuleFields>
);

export const meta = {
  label: 'Featured Locations Module',
};
