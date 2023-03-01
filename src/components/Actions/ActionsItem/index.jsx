import React from "react";

import style from "./ActionsItem.module.css";

const ActionsItem = ({ img, title, text, date }) => {
  return (
    <div className={style.content}>
      <img className={style.img} src={img} alt='action' />
      <span className={style.title}>{title}</span>
      <span className={style.text}>{text}</span>
      <span className={style.date}>{date}</span>
    </div>
  );
};

export default ActionsItem;
