import type { NextPage } from "next";
import styles from "./header.module.css";
const Header: NextPage = () => {
  return (
    <div className={styles.header}>
      <div className={styles.groupWrapper}>
        <div className={styles.group}>
          <div className={styles.groupParent}>
            <img className={styles.groupIcon} alt="" src="/group.svg" />
            <div className={styles.group1}>
              <i className={styles.manufacturingSimplified}>
                Manufacturing Simplified
              </i>
            </div>
          </div>
          <img className={styles.vectorIcon} alt="" src="/vector.svg" />
          <img className={styles.groupIcon1} alt="" src="/group1.svg" />
        </div>
      </div>
      <div className={styles.buttonParent}>
        <div className={styles.button}>
          <img className={styles.mailIcon} alt="" src="/mail1.svg" />
          <div className={styles.button1}>Blog</div>
          <img
            className={styles.mailIcon}
            alt=""
            src="/chevrons-or-short-arrow1.svg"
          />
        </div>
        <div className={styles.buttonGroup}>
          <div className={styles.button}>
            <img className={styles.mailIcon} alt="" src="/mail1.svg" />
            <div className={styles.button1}>Sign in</div>
            <img
              className={styles.mailIcon}
              alt=""
              src="/chevrons-or-short-arrow1.svg"
            />
          </div>
          <div className={styles.button4}>
            <img className={styles.mailIcon} alt="" src="/mail2.svg" />
            <div className={styles.button1}>Join Now</div>
            <img
              className={styles.mailIcon}
              alt=""
              src="/chevrons-or-short-arrow2.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
