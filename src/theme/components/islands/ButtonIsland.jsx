// src/theme/components/islands/ButtonIsland.jsx
import styles from '../../styles/findmore.module.css';

export default function ButtonIsland({ fieldValues }) {
  const { buttonText, buttonLink } = fieldValues;

  function handleClick() {
    if (buttonLink) {
      // Redirect to the provided link
      window.location.href = buttonLink;
    }
  }

  return (
    <button className={styles.button} onClick={handleClick}>
      {buttonText}
    </button>
  );
}
