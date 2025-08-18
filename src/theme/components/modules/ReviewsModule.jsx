import { ModuleFields, TextField, RichTextField } from '@hubspot/cms-components/fields';
import { Island } from '@hubspot/cms-components';
import ReviewsIsland from '../islands/ReviewsIsland?island';
import styles from '../../styles/reviews.module.css';

export function Component({ fieldValues }) {
  const reviews = [
    {
      name: fieldValues.review1_name,
      text: fieldValues.review1_text,
    },
    {
      name: fieldValues.review2_name,
      text: fieldValues.review2_text,
    },
    {
      name: fieldValues.review3_name,
      text: fieldValues.review3_text,
    },
    {
      name: fieldValues.review4_name,
      text: fieldValues.review4_text,
    },
    {
      name: fieldValues.review5_name,
      text: fieldValues.review5_text,
    },
  ];

  return (
    <div className={styles.carouselWrapper}>
      {/* Pass reviews down to the Island */}
      <Island module={ReviewsIsland} fieldValues={{ reviews }} />
    </div>
  );
}

// ✅ Module fields: use TextField for names, RichTextField for review text
export const fields = (
  <ModuleFields>
    <TextField name="review1_name" label="Review 1 - Author" />
    <RichTextField name="review1_text" label="Review 1 - Text" />

    <TextField name="review2_name" label="Review 2 - Author" />
    <RichTextField name="review2_text" label="Review 2 - Text" />

    <TextField name="review3_name" label="Review 3 - Author" />
    <RichTextField name="review3_text" label="Review 3 - Text" />

    <TextField name="review4_name" label="Review 4 - Author" />
    <RichTextField name="review4_text" label="Review 4 - Text" />

    <TextField name="review5_name" label="Review 5 - Author" />
    <RichTextField name="review5_text" label="Review 5 - Text" />
  </ModuleFields>
);

export const meta = {
  label: 'Customer Reviews Carousel',
};
