import type { NextPage } from "next";
import SilhoutteOptionsContainer from "./silhoutte-options-container";
import styles from "./product-launch-container.module.css";
const ProductLaunchContainer: NextPage = () => {
  return (
    <div className={styles.launchingSoon}>
      <div className={styles.groupParent}>
        <div className={styles.groupWrapper}>
          <div className={styles.groupContainer}>
            <div className={styles.groupContainer}>
              <div className={styles.ourProduct}>
                <span className={styles.o}>O</span>
                <span className={styles.urProduct}>ur Product</span>
              </div>
              <div className={styles.isLaunching}>is launching</div>
              <b className={styles.verySoon}>very soon.</b>
            </div>
          </div>
        </div>
        <div className={styles.inputLargeParent}>
          <div className={styles.inputLarge}>
            <div className={styles.labelContainer}>
              <div className={styles.lableAndStar}>
                <div className={styles.label}>Label</div>
                <div className={styles.star}>*</div>
              </div>
              <img
                className={styles.iinformationCircleIcon}
                alt=""
                src="/iinformationcircle.svg"
              />
            </div>
            <div className={styles.textarea}>
              <div className={styles.mailParent}>
                <img className={styles.mailIcon} alt="" src="/mail8.svg" />
                <div className={styles.leadSelecter}>
                  <img className={styles.flagsIn} alt="" src="/flags--in.svg" />
                  <div className={styles.textdata}>+91</div>
                  <img
                    className={styles.iinformationCircleIcon}
                    alt=""
                    src="/chevrons-or-short-arrow11.svg"
                  />
                </div>
                <div className={styles.data}>
                  Please enter your e-mail address
                </div>
                <div className={styles.label}>kg</div>
                <img
                  className={styles.mailIcon}
                  alt=""
                  src="/chevrons-or-short-arrow12.svg"
                />
              </div>
            </div>
            <div className={styles.helperTexts}>
              <div className={styles.hintText}>Hint text</div>
              <div className={styles.hintText1}>98/100</div>
            </div>
          </div>
          <div className={styles.button}>
            <img className={styles.mailIcon1} alt="" src="/mail7.svg" />
            <div className={styles.button1}>Join the waitlist</div>
            <img
              className={styles.mailIcon1}
              alt=""
              src="/chevrons-or-short-arrow8.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.kejrbgpngParent}>
          <img
            className={styles.kejrbgpngIcon}
            alt=""
            src="/kejrbgpng3@2x.png"
          />
          <div className={styles.aiGenerated}>AI - Generated Print Options</div>
        </div>
        <div className={styles.fullParent}>
          <div className={styles.full}>
            <div className={styles.frame}>
              <img
                className={styles.frameChild}
                alt=""
                src="/group-22691.svg"
              />
            </div>
            <div className={styles.fullSleeves}>Full sleeves</div>
          </div>
          <div className={styles.silhoutteOptions}>Silhoutte Options</div>
        </div>
      </div>
      <div className={styles.frameGroup}>
        <SilhoutteOptionsContainer productIds="/group-22691.svg" />
        <div className={styles.frameWrapper}>
          <div className={styles.kejrbgpngParent}>
            <img
              className={styles.kejrbgpngIcon}
              alt=""
              src="/kejrbgpng4@2x.png"
            />
            <div className={styles.aiGenerated}>SS 24, A/W23/24 Print</div>
          </div>
        </div>
      </div>
      <div className={styles.frameContainer}>
        <div className={styles.kejrbgpngParent}>
          <img
            className={styles.kejrbgpngIcon}
            alt=""
            src="/kejrbgpng3@2x.png"
          />
          <div className={styles.aiGenerated}>AI - Generated Print Options</div>
        </div>
        <div className={styles.fullParent}>
          <div className={styles.half}>
            <div className={styles.frame}>
              <img className={styles.frameItem} alt="" src="/group-22692.svg" />
            </div>
            <div className={styles.fullSleeves}>Half sleeves</div>
          </div>
          <div className={styles.silhoutteOptions}>Silhoutte Options</div>
        </div>
      </div>
    </div>
  );
};

export default ProductLaunchContainer;
