import { ModuleFields } from '@hubspot/cms-components/fields';
import { Island } from '@hubspot/cms-components';
import ReviewsIsland from '../islands/ReviewsIsland?island';
import styles from '../../styles/reviews.module.css';

export function Component() {
  return (
    <div className={styles.carouselWrapper}>
      <Island module={ReviewsIsland} />
    </div>
  );
}

// ✅ CORRECT: export empty ModuleFields as JSX
export const fields = <ModuleFields />;

export const meta = {
  label: 'Customer Reviews Carousel',
};
