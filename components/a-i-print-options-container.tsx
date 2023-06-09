import type { NextPage } from "next";
import SilhoutteOptionsContainer from "./silhoutte-options-container";
import styles from "./a-i-print-options-container.module.css";
const AIPrintOptionsContainer: NextPage = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <SilhoutteOptionsContainer productIds="/group-2269.svg" />
        <div className={styles.kejrbgpngParent}>
          <img
            className={styles.kejrbgpngIcon}
            alt=""
            src="/kejrbgpng@2x.png"
          />
          <div className={styles.wideFabricCollection}>
            Wide Fabric collection
          </div>
        </div>
      </div>
      <img
        className={styles.screenshot20230526At448Icon}
        alt=""
        src="/screenshot-20230526-at-448-1@2x.png"
      />
      <div className={styles.frameContainer}>
        <div className={styles.kejrbgpngGroup}>
          <img
            className={styles.kejrbgpngIcon}
            alt=""
            src="/kejrbgpng1@2x.png"
          />
          <div className={styles.wideFabricCollection}>
            SS 24, A/W23/24 Print
          </div>
        </div>
        <div className={styles.kejrbgpngGroup}>
          <img
            className={styles.kejrbgpngIcon}
            alt=""
            src="/kejrbgpng2@2x.png"
          />
          <div className={styles.wideFabricCollection}>
            AI - Generated Print Options
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIPrintOptionsContainer;
