import React from "react";
import styles from "./KeyWord.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../../../store/slices/products";

const KeyWord = () => {
  const {
    productData: { filters },
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  const inputChangeHandler = (filterName) => (e) =>
    dispatch(
      setFilter({
        filterName,
        value: e.target.value,
      })
    );

  return (
    <div className={styles.container}>
      <input
        type="text"
        value={filters.keyWord}
        placeholder="Please input product name"
        onChange={inputChangeHandler("keyWord")}
      />
      <div className={styles.icon}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </div>
    </div>
  );
};

export default KeyWord;
