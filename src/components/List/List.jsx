import React, { useState, useEffect } from "react";
import styles from "./List.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../../store/slices/products";
import { getProducts } from "../../store/apis/products";
import Item from "./Item/Item";

const List = () => {
  const [displayProducts, setDisplayProducts] = useState(null);
  const {
    productData: { products, filters },
  } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    getProducts()
      .then((res) => {
        if (!res.errors) {
          dispatch(setProducts(res.data.products));
        } else {
          alert(res.errors[0].message);
        }
      })
      .catch((err) => alert(err));
  }, []);

  useEffect(() => {
    const { keyWord, brandName } = filters;
    if (products) {
      const newProducts = products.filter(
        (product) =>
          product.name.indexOf(keyWord) !== -1 &&
          product.brand.name.indexOf(brandName) !== -1
      );
      setDisplayProducts(newProducts);
    }
  }, [products, filters]);

  return (
    <div className={styles.container}>
      {displayProducts &&
        displayProducts.map((product) => (
          <Item key={product._id} product={product} />
        ))}
    </div>
  );
};

export default List;
