import type { NextPage } from "next";
import CatalogContainer from "./catalog-container";
import styles from "./gallery-container.module.css";
const GalleryContainer: NextPage = () => {
  return (
    <div className={styles.home}>
      <img className={styles.logoIcon} alt="" src="/logo1.svg" />
      <div className={styles.aCuratedGalleryOfAiGeneraParent}>
        <div className={styles.aCuratedGalleryContainer}>
          <p className={styles.aCuratedGallery}>{`A curated gallery of `}</p>
          <p className={styles.aiGeneratedPrints}>AI generated Prints.</p>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.tabSecondaryParent}>
            <div className={styles.tabSecondary}>
              <img
                className={styles.poAndInvoiceAndReceipt}
                alt=""
                src="/po-and-invoice-and-receipt.svg"
              />
              <div className={styles.label}>Abstract</div>
              <img
                className={styles.chevronsOrShortArrow}
                alt=""
                src="/chevrons-or-short-arrow9.svg"
              />
              <div className={styles.brandAmountWrapper}>
                <div className={styles.brandAmount}>9+</div>
              </div>
            </div>
            <div className={styles.tabSecondary1}>
              <img
                className={styles.poAndInvoiceAndReceipt}
                alt=""
                src="/po-and-invoice-and-receipt1.svg"
              />
              <div className={styles.label}>Floral</div>
              <img
                className={styles.chevronsOrShortArrow}
                alt=""
                src="/chevrons-or-short-arrow10.svg"
              />
              <div className={styles.brandAmountContainer}>
                <div className={styles.brandAmount}>9+</div>
              </div>
            </div>
            <div className={styles.tabSecondary1}>
              <img
                className={styles.poAndInvoiceAndReceipt}
                alt=""
                src="/po-and-invoice-and-receipt1.svg"
              />
              <div className={styles.label}>Geometric</div>
              <img
                className={styles.chevronsOrShortArrow}
                alt=""
                src="/chevrons-or-short-arrow10.svg"
              />
              <div className={styles.brandAmountContainer}>
                <div className={styles.brandAmount}>9+</div>
              </div>
            </div>
            <div className={styles.tabSecondary1}>
              <img
                className={styles.poAndInvoiceAndReceipt}
                alt=""
                src="/po-and-invoice-and-receipt1.svg"
              />
              <div className={styles.label}>Animal</div>
              <img
                className={styles.chevronsOrShortArrow}
                alt=""
                src="/chevrons-or-short-arrow10.svg"
              />
              <div className={styles.brandAmountContainer}>
                <div className={styles.brandAmount}>9+</div>
              </div>
            </div>
            <div className={styles.tabSecondary1}>
              <img
                className={styles.poAndInvoiceAndReceipt}
                alt=""
                src="/po-and-invoice-and-receipt1.svg"
              />
              <div className={styles.label}>Stripes</div>
              <img
                className={styles.chevronsOrShortArrow}
                alt=""
                src="/chevrons-or-short-arrow10.svg"
              />
              <div className={styles.brandAmountContainer}>
                <div className={styles.brandAmount}>9+</div>
              </div>
            </div>
          </div>
          <div className={styles.catalogCardParent}>
            <CatalogContainer
              icons="/icons.svg"
              heart="/heart.svg"
              reddishBlueAbstractPatter="Reddish Blue Abstract Pattern "
            />
            <CatalogContainer
              icons="/icons1.svg"
              heart="/heart1.svg"
              reddishBlueAbstractPatter="Brown Abstract Print"
              propBackgroundImage={`url("/large12@3x.png")`}
            />
            <CatalogContainer
              icons="/icons2.svg"
              heart="/heart2.svg"
              reddishBlueAbstractPatter="Blue leaves Abstract Print"
              propBackgroundImage={`url("/large13@3x.png")`}
            />
            <CatalogContainer
              icons="/icons3.svg"
              heart="/heart3.svg"
              reddishBlueAbstractPatter="Dark Abstract Print"
              propBackgroundImage={`url("/large14@3x.png")`}
            />
            <CatalogContainer
              icons="/icons4.svg"
              heart="/heart4.svg"
              reddishBlueAbstractPatter="Mustard Leaves Print"
              propBackgroundImage={`url("/large15@3x.png")`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryContainer;
