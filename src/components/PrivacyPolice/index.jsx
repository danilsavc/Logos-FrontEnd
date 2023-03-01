import React from "react";

import style from "./PrivacyPolice.module.css";

import privacy from "../../Assets/privacy.json";

const PrivacyPolice = () => {
  return (
    <div>
      <div className={style.title}>
        <div className={style.block}></div>
        <div className={style.text}>
          <span>Політика конфіденційності</span>
        </div>
      </div>

      <div className={style.content}>
        {privacy.map((item, index) => (
          <div className={style.item} key={index}>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrivacyPolice;
