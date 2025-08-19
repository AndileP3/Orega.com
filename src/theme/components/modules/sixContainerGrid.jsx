import { ModuleFields, TextField, ImageField } from '@hubspot/cms-components/fields';
import styles from '../../styles/sixContainerGrid.module.css';

export function Component({ fieldValues }) {
  const containers = [
    {
      icon: fieldValues.icon1?.src || "https://www.orega.com/hubfs/Orega%20social%20copy.svg",
      bold: fieldValues.bold1 || 'Fast Setup',
      light: fieldValues.light1 || 'Get started with minimal effort and time.',
    },
    {
      icon: fieldValues.icon2?.src || "https://www.orega.com/hubfs/Orega%20social%20copy%202.svg",
      bold: fieldValues.bold2 || 'Secure Access',
      light: fieldValues.light2 || 'Your data is safe with enterprise-grade security.',
    },
    {
      icon: fieldValues.icon3?.src || "https://www.orega.com/hubfs/Orega%20social%20copy%203.svg",
      bold: fieldValues.bold3 || 'Scalable Design',
      light: fieldValues.light3 || 'Easily grow with flexible infrastructure.',
    },
    {
      icon: fieldValues.icon4?.src || "https://www.orega.com/hubfs/Orega%20social%20copy%204.svg",
      bold: fieldValues.bold4 || 'Team Collaboration',
      light: fieldValues.light4 || 'Work seamlessly with colleagues worldwide.',
    },
    {
      icon: fieldValues.icon5?.src || "https://www.orega.com/hubfs/Orega%20social%20copy%205.svg",
      bold: fieldValues.bold5 || '24/7 Support',
      light: fieldValues.light5 || 'Our team is here whenever you need assistance.',
    },
    {
      icon: fieldValues.icon6?.src || "https://www.orega.com/hubfs/Orega%20social%20copy%206.svg",
      bold: fieldValues.bold6 || 'Cost Effective',
      light: fieldValues.light6 || 'Affordable pricing plans that suit your needs.',
    },
  ];

  return (
    <section className={styles.container}>
      {/* Section Heading */}
      <div className={styles.headingWrapper}>
        <h2 className={styles.mainHeading}>
          {fieldValues.main_heading || 'Who we are'}
        </h2>
        <p className={styles.subHeading}>
          {fieldValues.sub_heading || 'Orega is one of the UK\'s most established flexible workspace brands. Founded in 2001, we now operate 25 centres across the UK.'}
        </p>
      </div>

      {/* Grid */}
      <div className={styles.grid}>
        {containers.map((item, index) => (
          <div key={index} className={styles.card}>
            <img
              src={item.icon}
              alt={`icon-${index + 1}`}
              className={styles.icon}
            />
            <h3 className={styles.boldText}>{item.bold}</h3>
            <p className={styles.lightText}>{item.light}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ✅ Editable Fields
export const fields = (
  <ModuleFields>
    <TextField name="main_heading" label="Main Heading" default="Who we are" />
    <TextField name="sub_heading" label="Sub Heading" default="Orega is one of the UK's most established flexible workspace brands. Founded in 2001, we now operate 25 centres across the UK." />

    <ImageField name="icon1" label="Icon 1" />
    <TextField name="bold1" label="Bold Text 1" default="Over 20 years' experience in the flexible workspace sector" />
    <TextField name="light1" label="Light Text 1" default="We've thrived through three downturns, and have unrivalled experience in the sector." />

    <ImageField name="icon2" label="Icon 2" />
    <TextField name="bold2" label="Bold Text 2" default="550,000 square feet of premium flex space" />
    <TextField name="light2" label="Light Text 2" default="Orega is the power behind your business: helping you to go further, faster." />

    <ImageField name="icon3" label="Icon 3" />
    <TextField name="bold3" label="Bold Text 3" default="The UK's No 1 operator of management agreements" />
    <TextField name="light3" label="Light Text 3" default="Our business model is different: we work in partnership with our landlords for the benefit of all." />

    <ImageField name="icon4" label="Icon 4" />
    <TextField name="bold4" label="Bold Text 4" default="26 locations across the UK" />
    <TextField name="light4" label="Light Text 4" default="All our centres are located in prime business central locations across the UK." />

    <ImageField name="icon5" label="Icon 5" />
    <TextField name="bold5" label="Bold Text 5" default="Over 10,000 customers" />
    <TextField name="light5" label="Light Text 5" default="We support thousands of customers every day, helping them to reach their ambitions." />

    <ImageField name="icon6" label="Icon 6" />
    <TextField name="bold6" label="Bold Text 6" default="9,500 workspaces" />
    <TextField name="light6" label="Light Text 6" default="We have a range of spaces to keep you at your best, from private offices to breakout spaces and meeting rooms." />
  </ModuleFields>
);

export const meta = {
  label: 'Six Container Grid',
};
