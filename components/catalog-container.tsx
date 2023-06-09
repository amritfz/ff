import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./catalog-container.module.css";

type CatalogContainerType = {
  icons?: string;
  heart?: string;
  reddishBlueAbstractPatter?: string;

  /** Style props */
  propBackgroundImage?: Property.BackgroundImage;
};

const CatalogContainer: NextPage<CatalogContainerType> = ({
  icons,
  heart,
  reddishBlueAbstractPatter,
  propBackgroundImage,
}) => {
  const lARGE4Style: CSS.Properties = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  return (
    <div className={styles.catalogCard}>
      <div className={styles.large} style={lARGE4Style}>
        <div className={styles.catalogTagWrapper}>
          <div className={styles.catalogTag}>
            <img className={styles.icons} alt="" src={icons} />
            <div className={styles.readyStock}>{`AI Digital Print  `}</div>
          </div>
        </div>
      </div>
      <div className={styles.catalogDetails}>
        <div className={styles.button}>
          <img className={styles.icons} alt="" src={heart} />
          <div className={styles.label}>Add to Favourites</div>
        </div>
        <div className={styles.catalogDetailsInner}>
          <div className={styles.reddishBlueAbstractPatternWrapper}>
            <div className={styles.reddishBlueAbstract}>
              {reddishBlueAbstractPatter}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogContainer;
