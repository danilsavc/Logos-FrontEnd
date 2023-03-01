import React from "react";

import style from "./OneOrderItem.module.css";

const OneOrderItem = ({ img, title, price }) => {
  return (
    <div className={style.mbb_item}>
      <img src={img} alt='imgUrl' className={style.mbbi_img} />
      <div className={style.mbbi_info}>
        <p className={style.mbbii_title}>{title}</p>
      </div>
      <span className={style.mbbi_price}>{price} uah</span>
    </div>
  );
};

export default OneOrderItem;
