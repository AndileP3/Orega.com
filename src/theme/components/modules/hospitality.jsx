import { ModuleFields, TextField, ImageField } from '@hubspot/cms-components/fields';
import styles from '../../styles/sixContainerGrid.module.css';

export function Component({ fieldValues }) {
  const containers = [
    {
      icon: fieldValues.icon1?.src || "https://www.orega.com/hubfs/Orega%20social-4%20copy.svg",
      bold: fieldValues.bold1 ,
      light: fieldValues.light1 ,
    },
    {
      icon: fieldValues.icon2?.src || "https://www.orega.com/hubfs/Orega%20social-4.svg",
      bold: fieldValues.bold2 ,
      light: fieldValues.light2 ,
    },
    {
      icon: fieldValues.icon3?.src || "https://www.orega.com/hubfs/Orega%20social-4%20copy%202.svg",
      bold: fieldValues.bold3 ,
      light: fieldValues.light3 ,
    },
    {
      icon: fieldValues.icon4?.src || "https://www.orega.com/hubfs/Orega%20social-3.svg",
      bold: fieldValues.bold4 ,
      light: fieldValues.light4 ,
    },
    {
      icon: fieldValues.icon5?.src || "https://www.orega.com/hubfs/Orega%20social-3-1.svg",
      bold: fieldValues.bold5 ,
      light: fieldValues.light5 ,
    },
  ];

  return (
    <section className={styles.container}>
      {/* Section Heading */}
      <div className={styles.headingWrapper}>
        <h2 className={styles.mainHeading}>
          {fieldValues.main_heading || 'A culture driven by hospitality'}
        </h2>
        <p className={styles.subHeading}>
          {fieldValues.sub_heading || 'Our focus on Partnership extends across the business: to our people, our clients and our landlords.'}
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
    <TextField name="main_heading" label="Main Heading" default="A culture driven by hospitality" />
    <TextField name="sub_heading" label="Sub Heading" default="Our focus on Partnership extends across the business: to our people, our clients and our landlords." />

    <ImageField name="icon1" label="Icon 1" />
    <TextField name="bold1" label="Bold Text 1" default="Team" />
    <TextField name="light1" label="Light Text 1" default="Our passionate teams, on-site and in support services, are the beating heart of our business." />

    <ImageField name="icon2" label="Icon 2" />
    <TextField name="bold2" label="Bold Text 2" default="Clients" />
    <TextField name="light2" label="Light Text 2" default="Our Mission is to help our clients and their employees unlock their full potential." />

    <ImageField name="icon3" label="Icon 3" />
    <TextField name="bold3" label="Bold Text 3" default="Innovation" />
    <TextField name="light3" label="Light Text 3" default="Our business model enables us to invest in our centres, whatever the economic situation." />

    <ImageField name="icon4" label="Icon 4" />
    <TextField name="bold4" label="Bold Text 4" default="Partnership" />
    <TextField name="light4" label="Light Text 4" default="We created our business with the vision that partnership leads to success for all." />

    <ImageField name="icon5" label="Icon 5" />
    <TextField name="bold5" label="Bold Text 5" default="Results" />
    <TextField name="light5" label="Light Text 5" default="We are driven to reach our own goals: we achieve this by helping our clients reach theirs." />

  </ModuleFields>
);

export const meta = {
  label: 'Six Container Grid',
};
