import React, { useState } from "react";
import ItemAddition from "../../Items/ItemAddition";
import styles from "./Preview.module.css";
import SkeletonOneItem from "../../Skeleton/SkeletonOneItem";
import axios from "../../../axios";
import { truncateText, truncateTitle } from "../../../truncate";

const Preview = ({ MainTitle, categoryID }) => {
  const categoryId = categoryID;
  const [items, setItems] = useState();
  const [isLoading, setLoading] = useState(true);

  React.useEffect(() => {
    window.scrollTo(0, 0);
    axios
      .get(`/items/categoryId/${categoryId}`)
      .then((res) => {
        setItems(res.data.results.slice(0, 4));
        setLoading(false);
      })
      .catch((err) => {
        console.warn(err);
        alert("Помилка при отрмианні товара");
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryID]);

  return (
    <div>
      <div className={styles.m_titleblock}>
        <div className={styles.mtb_verline}></div>
        <h1 className={styles.mtb_title}>{MainTitle}</h1>
      </div>
      <div className={styles.m_itemslineblock}>
        {(isLoading ? [...Array(4)] : items).map((item, index) =>
          isLoading ? (
            <SkeletonOneItem key={index} />
          ) : (
            <ItemAddition
              title={truncateTitle(item.title)}
              price={item.price}
              imgUrl={item.imgUrl}
              weight={item.weight}
              text={truncateText(item.text)}
              id={item._id}
              key={index}
            />
          )
        )}
      </div>
      <div className={styles.m_hr}></div>
    </div>
  );
};

export default Preview;
