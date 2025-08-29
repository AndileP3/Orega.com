// src/theme/components/islands/ButtonIsland.jsx
import styles from '../../styles/findmore.module.css';

export default function ButtonIsland({ fieldValues }) {
  const { buttonText, buttonLink, serviceType, mode = 'link' } = fieldValues || {};

  function handleClick() {
    if (mode === 'modal' && serviceType) {
      // Tell the modal island to open with this service type
      window.dispatchEvent(
        new CustomEvent('open-service-modal', { detail: { serviceType } })
      );
      return;
    }

    if (buttonLink) {
      window.location.href = buttonLink;
    }
  }

  return (
    <button className={styles.button} onClick={handleClick}>
      {buttonText}
    </button>
  );
}
