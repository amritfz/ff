import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./tees-hoodies-container.module.css";

type TeesHoodiesContainerType = {
  clothingCategory?: string;

  /** Style props */
  propAlignItems?: Property.AlignItems;
  propBackgroundImage?: Property.BackgroundImage;
};

const TeesHoodiesContainer: NextPage<TeesHoodiesContainerType> = ({
  clothingCategory,
  propAlignItems,
  propBackgroundImage,
}) => {
  const catalogCardStyle: CSS.Properties = useMemo(() => {
    return {
      alignItems: propAlignItems,
    };
  }, [propAlignItems]);

  const lARGE3Style: CSS.Properties = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  return (
    <div className={styles.catalogCard} style={catalogCardStyle}>
      <div className={styles.large} style={lARGE3Style}>
        <div className={styles.largeChild} />
      </div>
      <b className={styles.teesHoodies}>{clothingCategory}</b>
    </div>
  );
};

export default TeesHoodiesContainer;
