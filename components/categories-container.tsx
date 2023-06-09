import type { NextPage } from "next";
import TeesHoodiesContainer from "./tees-hoodies-container";
import styles from "./categories-container.module.css";
const CategoriesContainer: NextPage = () => {
  return (
    <div className={styles.custformvariant3}>
      <div className={styles.categoriesWeServeParent}>
        <div className={styles.categoriesWeServeContainer}>
          <span className={styles.categories}>{`Categories `}</span>
          <span>we serve</span>
        </div>
        <div className={styles.catalogCardParent}>
          <TeesHoodiesContainer clothingCategory={`Tees & Hoodies`} />
          <TeesHoodiesContainer
            clothingCategory={`Tops & Dresses`}
            propAlignItems="center"
            propBackgroundImage={`url("/large7@3x.png")`}
          />
          <TeesHoodiesContainer
            clothingCategory="Shirt"
            propAlignItems="flex-start"
            propBackgroundImage={`url("/large8@3x.png")`}
          />
          <TeesHoodiesContainer
            clothingCategory={`Jackets & Sweaters`}
            propAlignItems="flex-start"
            propBackgroundImage={`url("/large9@3x.png")`}
          />
          <TeesHoodiesContainer
            clothingCategory="Activewear"
            propAlignItems="flex-start"
            propBackgroundImage={`url("/large10@3x.png")`}
          />
        </div>
        <div className={styles.button}>
          <img className={styles.mailIcon} alt="" src="/mail7.svg" />
          <div className={styles.button1}>Enquire Now</div>
          <img
            className={styles.mailIcon}
            alt=""
            src="/chevrons-or-short-arrow8.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default CategoriesContainer;
