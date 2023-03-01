import React from "react";

import Map from "../../Map";
import Contact from "../Contact";

import style from "./MapContact.module.css";

const MapContact = () => {
  return (
    <div className={style.map}>
      <Map />
      <div className={style.contact}>
        <Contact />
      </div>
    </div>
  );
};

export default MapContact;
