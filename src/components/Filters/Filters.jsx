import React from "react";
import styles from "./Filters.module.scss";
import KeyWord from "./KeyWord/KeyWord";
import BrandName from "./BrandName/BrandName";

const Filters = () => {
  return (
    <div className={styles.container}>
      <KeyWord />
      <BrandName />
    </div>
  );
};

export default Filters;
