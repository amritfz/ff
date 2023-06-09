import type { NextPage } from "next";
import ContainerCard from "./container-card";
import FabricContainer from "./fabric-container";
import styles from "./virtual-sampling-container.module.css";
const VirtualSamplingContainer: NextPage = () => {
  return (
    <div className={styles.custformvariant3}>
      <div className={styles.virtualSamplingMadeEasyParent}>
        <div className={styles.virtualSamplingMadeContainer}>
          <span className={styles.virtualSampling}>Virtual Sampling</span>
          <span> Made Easy!</span>
        </div>
        <div className={styles.generateRealTime3dContainer}>
          <span>{`Generate `}</span>
          <span className={styles.virtualSampling}>real-time 3D twin</span>
          <span>{` of your garment basis Fabric, Print & Silhouette customisation.`}</span>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.extraLargeParent}>
              <div className={styles.extraLarge}>
                <img className={styles.imgIcon} alt="" src="/img@2x.png" />
              </div>
              <img
                className={styles.degrees11}
                alt=""
                src="/360degrees-1-1@2x.png"
              />
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.buttonParent}>
                <div className={styles.button}>
                  <img className={styles.mailIcon} alt="" src="/mail3.svg" />
                  <div className={styles.fabric}>Fabric</div>
                  <img
                    className={styles.chevronsOrShortArrow}
                    alt=""
                    src="/chevrons-or-short-arrow3.svg"
                  />
                </div>
                <div className={styles.pdpCatalogImages}>
                  <div className={styles.fabricParent}>
                    <img
                      className={styles.fabricIcon}
                      alt=""
                      src="/fabric.svg"
                    />
                    <div className={styles.noCustomizedFabricContainer}>
                      <p className={styles.noCustomized}>{`No Customized `}</p>
                      <p className={styles.noCustomized}>Fabric selected</p>
                    </div>
                  </div>
                </div>
              </div>
              <ContainerCard
                mail="/mail4.svg"
                button="AI Digital Print"
                chevronsOrShortArrow="/chevrons-or-short-arrow4.svg"
                print1="/print.svg"
                fabricSelected="Fabric selected"
              />
              <ContainerCard
                mail="/mail5.svg"
                button="Silhoutte"
                chevronsOrShortArrow="/chevrons-or-short-arrow5.svg"
                print1="/graphic1.svg"
                fabricSelected="Silhoutte selected"
                propPadding="unset"
                propBoxSizing="unset"
                propColor="#2c3556"
                propBackgroundColor="#fff"
                propBorder="1px solid var(--dark-palette-n200-mischka)"
                propColor1="#2c3556"
              />
              <ContainerCard
                mail="/mail6.svg"
                button="Graphic"
                print1="/graphic11.svg"
                fabricSelected="Graphic selected"
                propPadding="0px var(--padding-5xs)"
                propBoxSizing="border-box"
                propColor="rgba(44, 53, 86, 0)"
                propBackgroundColor="#fff"
                propBorder="1px solid var(--color-lightgray-100)"
                propColor1="rgba(44, 53, 86, 0)"
              />
            </div>
          </div>
          <div className={styles.frameDiv}>
            <FabricContainer
              blueSatin="Blue Satin"
              polyester="100% Polyester"
              polyMossCrepe="Poly Moss Crepe"
              americanCrepe="American Crepe"
            />
            <FabricContainer
              blueSatin="Natural Rayon"
              polyester="100% Rayon"
              polyMossCrepe="Poly Chiffon Dobby"
              americanCrepe="Georgette"
              propZIndex="1"
              propBackgroundImage={`url("/large3@3x.png")`}
              propBackgroundImage1={`url("/large4@3x.png")`}
              propBackgroundImage2={`url("/large5@3x.png")`}
            />
            <div className={styles.tooltips}>
              <img className={styles.tooltipIcon} alt="" src="/tooltip.svg" />
              <div className={styles.content}>
                <div className={styles.fabric}>Select Fabric</div>
              </div>
            </div>
            <div className={styles.button1}>
              <img className={styles.mailIcon1} alt="" src="/mail2.svg" />
              <div className={styles.button2}>Ask for Range</div>
              <img
                className={styles.mailIcon1}
                alt=""
                src="/chevrons-or-short-arrow7.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VirtualSamplingContainer;
