import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import styles from "./ItemAddition.module.css";
import { setItemInBasket } from "../../../Redux/Slices/basket";

const ItemAddition = ({ title, weight, text, price, imgUrl, id }) => {
  const dispatch = useDispatch();
  const amountItem = 1;
  function AddToBasket(obj) {
    dispatch(setItemInBasket(obj));
  };
  return (
    <div>
      <div className={styles.block}>
        <NavLink to={`/items/${id}`}>
          <img src={imgUrl} alt='imgUrl' className={styles.b_img} />
        </NavLink>
        <div className={styles.b_container}>
          <div className={styles.b_linecont}>
            <h1 className={styles.bl_title}>{title}</h1>
            <span className={styles.bl_gramm}>Вага: {weight} г</span>
          </div>
          <p className={styles.b_p}>{text}</p>
          <div className={styles.b_linecont}>
            <span className={styles.bl_price}>{price} UAH</span>
            <button onClick={() => {AddToBasket({ title, weight, text, price, imgUrl, id, amountItem })}} className={styles.bl_butt}>
              В кошик
              <div className={styles.blb_img}></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemAddition;
