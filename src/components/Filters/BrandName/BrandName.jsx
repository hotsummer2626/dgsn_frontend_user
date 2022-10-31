import React, { useState } from "react";
import styles from "./BrandName.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { getBrands } from "../../../store/apis/brands";
import { setBrands } from "../../../store/slices/brands";
import { setFilter } from "../../../store/slices/products";

const BrandName = () => {
  const [isOptionsShow, setIsOptionsShow] = useState(false);
  const [selectValue, setSelectValue] = useState("Please select a brand");
  const {
    brandData: { brands },
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  const toggleSelect = () => {
    if (brands) {
      return setIsOptionsShow(!isOptionsShow);
    }
    setIsOptionsShow(true);
    getBrands()
      .then((res) => {
        if (!res.errors) {
          dispatch(setBrands(res.data.brands));
        } else {
          alert(res.data.errors[0].message);
        }
      })
      .catch((err) => alert(err));
  };

  const onClickOptionHandler = (brand) => () => {
    dispatch(
      setFilter({
        filterName: "brandName",
        value: brand.name,
      })
    );
    setSelectValue(brand.name);
    setIsOptionsShow(false);
  };
  return (
    <div className={styles.container}>
      <div className={styles.select} onClick={toggleSelect}>
        <div className={styles.value}>{selectValue}</div>
        <div className={`${styles.icon} ${isOptionsShow ? styles.active : ""}`}>
          <FontAwesomeIcon icon={faChevronUp} />
        </div>
      </div>
      {isOptionsShow && (
        <div className={styles.options}>
          {brands &&
            brands.map((brand) => (
              <div
                key={brand._id}
                className={styles.option}
                onClick={onClickOptionHandler(brand)}
              >
                <div className={styles.imgWrapper}>
                  <img src={brand.imgSrc} alt="brand logo" />
                </div>
                <div>{brand.name}</div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default BrandName;
