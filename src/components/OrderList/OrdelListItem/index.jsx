import React from "react";

import axios from "../../../axios";

import style from "./OrdelListItem.module.css";

import orderImg from "./../../../Assets/img/order.svg";
import { useDispatch } from "react-redux";
import { deleteItem } from "../../../Redux/Slices/Order";
import { NavLink } from "react-router-dom";

const OrderListItem = ({ item, id }) => {
  const dispatch = useDispatch();

  const onClickDelete = () => {
    if (window.confirm("Ви впевненні що хочете видалити товар?")) {
      axios
        .delete(`/order/${id}`)
        .then(dispatch(deleteItem()))
        .catch((err) => {
          console.warn(err);
          alert("Помилка при отриманні товара");
        });
    }
  };

  return (
    <div className={style.content}>
      <div className={style.item}>
        <NavLink to={`/order-list/${id}`} className={style.img}>
          <img src={orderImg} alt='orderimg' />
        </NavLink>
        <div className={style.numberOrder}># Замолвення: {item.numberOrder}</div>
        <div className={style.pay}>До сплати: {item.pay}</div>
        <div onClick={onClickDelete} className={style.cancel}>
          x
        </div>
      </div>
      <div className={style.hr}></div>
    </div>
  );
};

export default OrderListItem;
