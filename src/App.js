import React from "react";
import "./global.scss";
import styles from "./App.module.scss";
import Filters from "./components/Filters/Filters";
import List from "./components/List/List";

const App = () => {
  return (
    <div className={styles.container}>
      <Filters />
      <List />
    </div>
  );
};

export default App;
