import type { NextPage } from "next";
import styles from "./source-container.module.css";
const SourceContainer: NextPage = () => {
  return (
    <div className={styles.sourceInTrendDesignsAtLowParent}>
      <div className={styles.sourceInTrendDesigns}>
        Source In-Trend Designs At Low MOQ.
      </div>
      <div className={styles.generate100StylesContainer}>
        <span>{`Generate `}</span>
        <b>100 styles</b>
        <span> in Minutes</span>
      </div>
      <div className={styles.buttonWrapper}>
        <div className={styles.button}>
          <img className={styles.mailIcon} alt="" src="/mail.svg" />
          <div className={styles.button1}>Join the waitlist</div>
          <img
            className={styles.mailIcon}
            alt=""
            src="/chevrons-or-short-arrow.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default SourceContainer;
