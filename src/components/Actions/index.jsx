import React from "react";

import style from "./Actions.module.css";
import ActionsItem from "./ActionsItem";

import actions from "../../Assets/actions.json";
import MapContact from "./MapContact";

const Actions = () => {
  window.scrollTo(0, 0);
  return (
    <div className={style.actions}>
      <div className={style.title}>
        <div className={style.block}></div>
        <div className={style.text}>
          <span>Акції</span>
        </div>
      </div>
      <div className={style.item}>
        {actions.map((item, index) => (
          <div key={index}>
            <ActionsItem img={item.img} title={item.title} text={item.text} date={item.date} />
          </div>
        ))}
      </div>
      <MapContact />
    </div>
  );
};

export default Actions;
