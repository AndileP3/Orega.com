import { ModuleFields, TextField } from '@hubspot/cms-components/fields';
import styles from '../../styles/featuredLocations.module.css';

export function Component({ fieldValues }) {
  // Office data with your image URLs pre-loaded
  const offices = [
    {
      title: fieldValues.office1_title || "Manchester",
      location: fieldValues.office1_location || "Balloon Street",
      img: "https://www.orega.com/hs-fs/hubfs/Balloon%20Street%20-%20Manchester/balloon-street-serviced-office-manchester.jpg?width=600&height=338&name=balloon-street-serviced-office-manchester.jpg"
    },
    {
      title: fieldValues.office2_title || "London",
      location: fieldValues.office2_location || "Gracechurch Street",
      img: "https://www.orega.com/hs-fs/hubfs/Orega_GracechurchSt_Building.jpg?width=600&height=338&name=Orega_GracechurchSt_Building.jpg"
    },
    {
      title: fieldValues.office3_title || "Bristol",
      location: fieldValues.office3_location || "Bristol City Centre",
      img: "https://www.orega.com/hs-fs/hubfs/Orega%20Bristol_Exterior_1000x665.jpg?width=600&height=338&name=Orega%20Bristol_Exterior_1000x665.jpg"
    },
    {
      title: fieldValues.office4_title || "Gatwick",
      location: fieldValues.office4_location || "Gatwick Office",
      img: "https://www.orega.com/hs-fs/hubfs/gatwick-feature.png?width=600&height=338&name=gatwick-feature.png"
    },
    {
      title: fieldValues.office5_title || "Arkwright House",
      location: fieldValues.office5_location || "Manchester",
      img: "https://www.orega.com/hs-fs/hubfs/arkwright-house-feature.png?width=600&height=338&name=arkwright-house-feature.png"
    }
  ];

  return (
    <section className={styles.featuredSection}>
      <h2 className={styles.heading}>Featured Locations</h2>
      <div className={styles.carousel}>
        {offices.map((office, i) => (
          <div className={styles.card} key={i}>
            <img 
              src={office.img} 
              alt={`${office.title} Office`} 
              className={styles.image} 
              loading="lazy"  // Optimized loading
            />
            <div className={styles.cardContent}>
              <h3>{office.title}</h3>
              <p className={styles.location}>{office.location}</p>
              <div className={styles.buttons}>
                <button className={styles.tourBtn}>Book a Tour</button>
                <button className={styles.infoBtn}>View Office</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export const fields = (
  <ModuleFields>
    {[1, 2, 3, 4, 5].map((i) => (
      <div key={i}>
        <TextField 
          name={`office${i}_title`} 
          label={`Office ${i} Title`} 
          default={["Manchester", "London", "Bristol", "Gatwick", "Arkwright House"][i-1]} 
        />
        <TextField 
          name={`office${i}_location`} 
          label={`Office ${i} Location`} 
          default={["Balloon Street", "Gracechurch Street", "Bristol City Centre", "Gatwick Office", "Manchester"][i-1]} 
        />
      </div>
    ))}
  </ModuleFields>
);

export const meta = {
  label: 'Featured Office Locations',
};