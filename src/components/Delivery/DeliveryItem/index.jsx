import React from "react";

import style from "./DeliveryItem.module.css";

import down from "../../../Assets/img/down.svg";
import up from "../../../Assets/img/up.svg";

const DeliveryItem = ({ title, text }) => {
  const [itemActive, setItemActive] = React.useState(false);

  const onClick = () => {
    if (itemActive) {
      setItemActive(false);
    } else {
      setItemActive(true);
    }
  };

  return (
    <div className={style.blockItem}>
      <div className={style.item} onClick={onClick}>
        <span>{title}</span>
        <img src={itemActive ? up : down} alt='down' />
      </div>

      <div className={itemActive ? style.textItemActive : style.textItem}>
        <span>{text}</span>
      </div>
    </div>
  );
};

export default DeliveryItem;
