import React from "react";
import "../../App.css";
import Footer from "../Footer/Footer";
import styles from "./banner.module.css";
import Page from "../../pages/Page/Page";

const Banner = () => {
  return (
    <div className="App">
      <Page />
      <div className={styles["banner"]}>
        <div className={styles.content}>
          <h1>DESCUBRE LAS FOTOS DEL PLANETA MARTE</h1>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Banner;
