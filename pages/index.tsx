import type { NextPage } from "next";
import SourceContainer from "../components/source-container";
import AIPrintOptionsContainer from "../components/a-i-print-options-container";
import Header from "../components/header";
import FastFashionContainer from "../components/fast-fashion-container";
import VirtualSamplingContainer from "../components/virtual-sampling-container";
import CategoriesContainer from "../components/categories-container";
import GalleryContainer from "../components/gallery-container";
import ProductLaunchContainer from "../components/product-launch-container";
import styles from "./index.module.css";
const FastFashionLandingPage: NextPage = () => {
  return (
    <div className={styles.fastFashionLandingPage}>
      <div className={styles.home}>
        <img className={styles.logoIcon} alt="" src="/logo.svg" />
        <div className={styles.frameParent}>
          <SourceContainer />
          <AIPrintOptionsContainer />
        </div>
        <Header />
      </div>
      <FastFashionContainer />
      <VirtualSamplingContainer />
      <CategoriesContainer />
      <GalleryContainer />
      <ProductLaunchContainer />
    </div>
  );
};

export default FastFashionLandingPage;
