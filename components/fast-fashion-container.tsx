import type { NextPage } from "next";
import styles from "./fast-fashion-container.module.css";
const FastFashionContainer: NextPage = () => {
  return (
    <div className={styles.features}>
      <div className={styles.ourOfferingForFastFashionWrapper}>
        <div className={styles.ourOfferingForContainer}>
          <span className={styles.ourOfferingFor}>Our offering for</span>
          <span> Fast Fashion Brand</span>
        </div>
      </div>
      <div className={styles.reductionParent}>
        <div className={styles.reduction}>
          <img className={styles.icon} alt="" src="/icon.svg" />
          <b className={styles.reduction1}>Faster range planning</b>
        </div>
        <div className={styles.reduction}>
          <img className={styles.icon} alt="" src="/icon1.svg" />
          <b className={styles.reduction1}>Low MOQ</b>
        </div>
        <div className={styles.reduction}>
          <img className={styles.icon} alt="" src="/icon2.svg" />
          <b className={styles.reduction1}>Trendy designs</b>
        </div>
        <div className={styles.reduction}>
          <img className={styles.icon} alt="" src="/icon3.svg" />
          <b className={styles.reduction1}>Fast order placement</b>
        </div>
        <div className={styles.reduction}>
          <img className={styles.icon} alt="" src="/icon4.svg" />
          <b className={styles.reduction1}>Fast production</b>
        </div>
      </div>
    </div>
  );
};

export default FastFashionContainer;
