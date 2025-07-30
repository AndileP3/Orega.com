import { ModuleFields, TextField } from '@hubspot/cms-components/fields';
import styles from '../../styles/customerReviews.module.css';

export function Component({ fieldValues }) {
  const reviews = [
    {
      name: fieldValues.review1_name || "Lizzie Russell",
      text:
        fieldValues.review1_text ||
        "We use Orega for our office services client meetings and the service received is fantastic. The staff are always very helpful and accommodating.",
    },
    {
      name: fieldValues.review2_name || "Michael Buckworth",
      text:
        fieldValues.review2_text ||
        "I love these offices. Perfectly located in the City and really modern and airy inside. The reception team are helpful and friendly.",
    },
    {
      name: fieldValues.review3_name || "Tom Nash",
      text:
        fieldValues.review3_text ||
        "MarketsFlow and I are highly impressed by all aspects of the service. Great decor, meeting rooms, and excellent attention to detail.",
    },
    {
      name: fieldValues.review4_name || "Michelle Rogers",
      text:
        fieldValues.review4_text ||
        "Can’t thank the team at Orega enough. Always helpful, friendly and professional. Best office space I’ve worked in.",
    },
    {
      name: fieldValues.review5_name || "Daniel Craig",
      text:
        fieldValues.review5_text ||
        "Professional and modern environment with excellent facilities and support staff.",
    },
  ];

  return (
    <section className={styles.reviewSection}>
      <h2 className={styles.heading}>What our customers say</h2>

      <div className={styles.carousel}>
        {reviews.map((review, i) => (
          <div className={styles.card} key={i}>
            <div className={styles.quoteIcon}>❝</div>
            <div className={styles.stars}>★★★★★</div>
            <p className={styles.text}>{review.text}</p>
            <p className={styles.name}><strong>{review.name}</strong></p>
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
        <TextField name={`review${i}_name`} label={`Review ${i} Name`} defaultValue={`Customer ${i}`} />
        <TextField
          name={`review${i}_text`}
          label={`Review ${i} Text`}
          defaultValue={`This is a sample review for customer ${i}.`}
        />
      </div>
    ))}
  </ModuleFields>
);

export const meta = {
  label: 'Customer Reviews Carousel',
};
