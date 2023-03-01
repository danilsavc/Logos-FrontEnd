import React from "react";

import style from "./Delivery.module.css";
import DeliveryItem from "./DeliveryItem";

import delivery from "../../Assets/delivery.json";
import Map from "../Map";

const Delivery = () => {
  window.scrollTo(0, 0);
  return (
    <div className={style.delivery}>
      <div className={style.title}>
        <div className={style.block}></div>
        <div className={style.text}>
          <span>Умови доставки</span>
        </div>
      </div>
      <div className={style.main}>
        <div className={style.item}>
          {delivery.map((item, index) => (
            <div key={index}>
              <DeliveryItem title={item.title} text={item.text} />
            </div>
          ))}
        </div>

        <div className={style.map}>
          <Map />
        </div>
      </div>
      <div className={style.footer}>
        <div className={style.schedule}>
          <span className={style.deliveryDate}>Графік роботи доставки:</span>
          <span className={style.deliveryClock}>З 10:00-21:00</span>
          <span className={style.cafeDate}>Графік роботи кафе:</span>
          <span className={style.cafeClock}>З 08:00-21:00</span>
        </div>

        <div className={style.minimum}>
          <span className={style.order}>Мінімальне замовлення:</span>
          <span className={style.minimumText}>
            Безкоштовна доставка пішим кур'єром за умови замовлення від 400 UAH Доставка оператором
            таксі від будь-якої суми замовлення - за тарифами перевізника.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
