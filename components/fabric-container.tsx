import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./fabric-container.module.css";

type FabricContainerType = {
  blueSatin?: string;
  polyester?: string;
  polyMossCrepe?: string;
  americanCrepe?: string;

  /** Style props */
  propZIndex?: Property.ZIndex;
  propBackgroundImage?: Property.BackgroundImage;
  propBackgroundImage1?: Property.BackgroundImage;
  propBackgroundImage2?: Property.BackgroundImage;
};

const FabricContainer: NextPage<FabricContainerType> = ({
  blueSatin,
  polyester,
  polyMossCrepe,
  americanCrepe,
  propZIndex,
  propBackgroundImage,
  propBackgroundImage1,
  propBackgroundImage2,
}) => {
  const frameDiv1Style: CSS.Properties = useMemo(() => {
    return {
      zIndex: propZIndex,
    };
  }, [propZIndex]);

  const lARGEStyle: CSS.Properties = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  const lARGE1Style: CSS.Properties = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage1,
    };
  }, [propBackgroundImage1]);

  const lARGE2Style: CSS.Properties = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage2,
    };
  }, [propBackgroundImage2]);

  return (
    <div className={styles.catalogCardParent} style={frameDiv1Style}>
      <div className={styles.catalogCard}>
        <div className={styles.large} style={lARGEStyle}>
          <div className={styles.catalogTagWrapper}>
            <div className={styles.catalogTag}>
              <img className={styles.icons} alt="" src="/icons.svg" />
              <div className={styles.readyStock}>Ready Stock</div>
            </div>
          </div>
        </div>
        <div className={styles.catalogDetails}>
          <div className={styles.actions}>
            <div className={styles.button}>
              <img className={styles.dViewIcon} alt="" src="/3d-view.svg" />
              <div className={styles.button1}>View in 3D</div>
              <img
                className={styles.chevronsOrShortArrow}
                alt=""
                src="/chevrons-or-short-arrow6.svg"
              />
            </div>
          </div>
          <div className={styles.data}>
            <div className={styles.blueSatin}>{blueSatin}</div>
            <div className={styles.polyester}>{polyester}</div>
          </div>
        </div>
      </div>
      <div className={styles.catalogCard}>
        <div className={styles.large1} style={lARGE1Style}>
          <div className={styles.catalogTagWrapper}>
            <div className={styles.catalogTag}>
              <img className={styles.icons} alt="" src="/icons.svg" />
              <div className={styles.readyStock}>Ready Stock</div>
            </div>
          </div>
        </div>
        <div className={styles.catalogDetails}>
          <div className={styles.actions}>
            <div className={styles.button}>
              <img className={styles.dViewIcon} alt="" src="/3d-view.svg" />
              <div className={styles.button1}>View in 3D</div>
              <img
                className={styles.chevronsOrShortArrow}
                alt=""
                src="/chevrons-or-short-arrow6.svg"
              />
            </div>
          </div>
          <div className={styles.data}>
            <div className={styles.blueSatin}>{polyMossCrepe}</div>
            <div className={styles.polyester}>100% Polyester</div>
          </div>
        </div>
      </div>
      <div className={styles.catalogCard}>
        <div className={styles.large2} style={lARGE2Style}>
          <div className={styles.catalogTagWrapper}>
            <div className={styles.catalogTag}>
              <img className={styles.icons} alt="" src="/icons.svg" />
              <div className={styles.readyStock}>Ready Stock</div>
            </div>
          </div>
        </div>
        <div className={styles.catalogDetails}>
          <div className={styles.actions}>
            <div className={styles.button}>
              <img className={styles.dViewIcon} alt="" src="/3d-view.svg" />
              <div className={styles.button1}>View in 3D</div>
              <img
                className={styles.chevronsOrShortArrow}
                alt=""
                src="/chevrons-or-short-arrow6.svg"
              />
            </div>
          </div>
          <div className={styles.data}>
            <div className={styles.blueSatin}>{americanCrepe}</div>
            <div className={styles.polyester}>100% Polyester</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FabricContainer;
