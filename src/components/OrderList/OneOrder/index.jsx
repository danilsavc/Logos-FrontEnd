import React from "react";
import { NavLink, useParams } from "react-router-dom";
import axios from "../../../axios";
import SkeletonOneItem from "../../Skeleton/SkeletonOneItem";

import style from "./OneOrder.module.css";
import OneOrderItem from "./OneOrderItem";

const OneOrder = () => {
  const { id } = useParams();
  const [data, setData] = React.useState();

  React.useEffect(() => {
    axios
      .get(`/order/${id}`)
      .then((item) => {
        setData(item.data);
      })
      .catch((err) => {
        console.log(err);
        alert("Помилка при отриманні замовлення");
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(data);

  if (data) {
    return (
      <div className={style.order}>
        <NavLink to='/order-list' className={style.back}>
          <div>&#8249; Повернутися назад</div>
        </NavLink>

        <div className={style.head_title}>
          <div className={style.head_block}></div>
          <div className={style.head_text}>
            <span>Замовлення № {data.numberOrder}</span>
          </div>
        </div>
        <div className={style.item}>
          {data.item.map((item, index) => (
            <div key={index}>
              <OneOrderItem img={item.imgUrl} title={item.title} price={item.price} />
            </div>
          ))}
        </div>

        <div className={style.info}>
          <div className={style.name}>Ім'я клієнта: {data.firstName}</div>
          <div className={style.deliveryTime}>На коли: {data.deliveryTime}</div>
          <div className={style.delivery}>Адреса: {data.adress ? data.adress : data.delivery}</div>
          <div className={style.amountPers}>Кількість персон: {data.amountPers}</div>
          <div className={style.call}>Уточнення замовлення: {data.call}</div>
          <div className={style.phone}>Телефон: +380{data.phone}</div>
          <div>Дата створення замовлення: {data.createdAt}</div>
          <div>До оплати: {data.pay}</div>
        </div>
      </div>
    );
  } else {
    return <SkeletonOneItem />;
  }
};

export default OneOrder;
