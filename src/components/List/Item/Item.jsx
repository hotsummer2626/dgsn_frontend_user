import React from "react";
import styles from "./Item.module.scss";

const Item = ({ product }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imgWrapper}>
        <img src={product.imgSrc} alt="product" />
      </div>
      <div className={styles.details}>
        <div className={styles.name}>{product.name}</div>
        <div className={styles.price}>${product.price}</div>
        <div className={styles.expireDate}>{product.expireDate}</div>
      </div>
    </div>
  );
};

export default Item;
