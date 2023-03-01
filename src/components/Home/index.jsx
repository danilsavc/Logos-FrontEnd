import React from "react";

import styles from "./Home.module.css";
import MapContact from "../Actions/MapContact";
import Preview from "./Preview";
import AboutBlock from "./AboutBlock";
// import { useDispatch, useSelector } from "react-redux";

// import { fetchItems } from "../../Redux/Slices/Items";
// import { selectFilter } from "../../Redux/Slices/Filter";

const Home = () => {
  return (
    <main className={styles.Main}>
      <Preview MainTitle='Холодні закуски' categoryID={1}/>
      <Preview MainTitle='Горячі закуски' categoryID={2}/>
      <Preview MainTitle="М'ясні закуски" categoryID={3}/>
      <AboutBlock />
      <MapContact />
    </main>
  );
};

export default Home;
