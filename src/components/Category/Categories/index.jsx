import React from "react";

import style from "./Categories.module.css";

const Categories = ({ value, onChangeCategory }) => {
  const items = [
    "Всі",
    "Холодні закуски",
    "Гарячі закуски",
    "М'ясні страви",
    "Супи",
    "Рибні страви",
    "Гриль меню",
    "Фірмові страви",
    "Напої",
  ];

  return (
    <div className={style.header_bottom}>
      <nav className={style.hb_nav}>
        {items.map((categoryName, i) => (
          <div
            key={i}
            onClick={() => onChangeCategory(i, categoryName)}
            className={value === i ? `${style.hbn_butt} ${style.active}` : `${style.hbn_butt}`}
          >
            <span>{categoryName}</span>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Categories;
