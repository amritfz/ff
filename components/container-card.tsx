import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./container-card.module.css";

type ContainerCardType = {
  mail?: string;
  button?: string;
  chevronsOrShortArrow?: string;
  print1?: string;
  fabricSelected?: string;

  /** Style props */
  propPadding?: Property.Padding;
  propBoxSizing?: Property.BoxSizing;
  propColor?: Property.Color;
  propBackgroundColor?: Property.BackgroundColor;
  propBorder?: Property.Border;
  propColor1?: Property.Color;
};

const ContainerCard: NextPage<ContainerCardType> = ({
  mail,
  button,
  chevronsOrShortArrow,
  print1,
  fabricSelected,
  propPadding,
  propBoxSizing,
  propColor,
  propBackgroundColor,
  propBorder,
  propColor1,
}) => {
  const frameDivStyle: CSS.Properties = useMemo(() => {
    return {
      padding: propPadding,
      boxSizing: propBoxSizing,
    };
  }, [propPadding, propBoxSizing]);

  const buttonStyle: CSS.Properties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const pDPCatalogImagesStyle: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      border: propBorder,
    };
  }, [propBackgroundColor, propBorder]);

  const noCustomizedFabricContainerStyle: CSS.Properties = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  return (
    <div className={styles.buttonParent} style={frameDivStyle}>
      <div className={styles.button}>
        <img className={styles.mailIcon} alt="" src={mail} />
        <div className={styles.button1} style={buttonStyle}>
          {button}
        </div>
        <img
          className={styles.chevronsOrShortArrow}
          alt=""
          src={chevronsOrShortArrow}
        />
      </div>
      <div className={styles.pdpCatalogImages} style={pDPCatalogImagesStyle}>
        <div className={styles.printParent}>
          <img className={styles.printIcon} alt="" src={print1} />
          <div
            className={styles.noCustomizedFabricContainer}
            style={noCustomizedFabricContainerStyle}
          >
            <p className={styles.noCustomized}>{`No Customized `}</p>
            <p className={styles.noCustomized}>{fabricSelected}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainerCard;
