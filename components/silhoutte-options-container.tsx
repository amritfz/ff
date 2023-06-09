import type { NextPage } from "next";
import styles from "./silhoutte-options-container.module.css";

type SilhoutteOptionsContainerType = {
  productIds?: string;
};

const SilhoutteOptionsContainer: NextPage<SilhoutteOptionsContainerType> = ({
  productIds,
}) => {
  return (
    <div className={styles.fullParent}>
      <div className={styles.full}>
        <div className={styles.frame}>
          <img className={styles.frameChild} alt="" src={productIds} />
        </div>
        <div className={styles.fullSleeves}>Full sleeves</div>
      </div>
      <div className={styles.silhoutteOptions}>Silhoutte Options</div>
    </div>
  );
};

export default SilhoutteOptionsContainer;
