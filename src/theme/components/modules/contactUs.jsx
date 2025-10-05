import { ModuleFields, TextField } from '@hubspot/cms-components/fields';
import styles from '../../styles/contact.module.css';

export function Component({ fieldValues }) {
  const { heading, subheading } = fieldValues;

  return (
    <div className={styles.contactSection}>
      <div className={styles.textBlock}>
        <h2 className={styles.heading}>{heading}</h2>
      </div>
      <form className={styles.form}>
        <div className={styles.row}>
          <div className={styles.field}>
            <label>First Name<span className={styles.required}>*</span></label>
            <input type="text" placeholder="Enter first name" className={styles.input} />
          </div>
          <div className={styles.field}>
            <label>Last Name<span className={styles.required}>*</span></label>
            <input type="text" placeholder="Enter last name" className={styles.input} />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.field}>
            <label>Phone Number<span className={styles.required}>*</span></label>
            <input type="tel" placeholder="Enter phone number" className={styles.input} />
          </div>
          <div className={styles.field}>
            <label>Email<span className={styles.required}>*</span></label>
            <input type="email" placeholder="Enter email address" className={styles.input} />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.field}>
            <label>Company Name<span className={styles.required}>*</span></label>
            <input type="text" placeholder="Enter company name" className={styles.input2} />
          </div>
          </div>
          
        <div className={styles.row}>
        <div className={styles.field}>
          <label>How many square feet is your space?<span className={styles.required}>*</span></label>
          <input type="text" placeholder="e.g. 1200" className={styles.input} />
        </div>
        <div className={styles.field}>
            <label>Where is your space?<span className={styles.required}>*</span></label>
            <input type="text" placeholder="Location of space" className={styles.input} />
          </div>
          </div>

          <p className={styles.privacyNote}>
       Orega is committed to protecting and respecting your privacy, and we’ll only use your personal information to administer your account and to provide the products and services you requested from us. From time to time, we would like to contact you about our products and services, as well as other content that may be of interest to you. If you consent to us contacting you for this purpose, please tick below to say how you would like us to contact you:
        </p>
        <div className={styles.checkboxContainer}>
          <input type="checkbox" id="consent" className={styles.checkbox} />
          <label htmlFor="consent">I AGREE TO RECEIVE OTHER COMMUNICATIONS FROM OREGA</label>
        </div>
        <p className={styles.privacyNote}>
          You can unsubscribe from these communications at any time. For more information on how to unsubscribe, our privacy practices, and how we are committed to protecting and respecting your privacy, please review our Privacy Policy.

By clicking submit below, you consent to allow Orega to store and process the personal information submitted above to provide you the content requested.
        </p>
        <button type="submit" className={styles.button}>SUBMIT</button>
      </form>
    </div>
  );
}

export const fields = (
  <ModuleFields>
    <TextField name="heading" label="Heading" default="Please get in touch to learn more on how Orega can support your real estate portfolio." />
  </ModuleFields>
);

export const meta = {
  label: 'Contact Section',
};
