import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./Basket.module.css";
import BasketItem from "./BasketItem";

const Basket = () => {
  const isItemInBasket = useSelector((state) => state.basket.ItemsInBasket);
  const isSumPay = useSelector((state) => state.basket.SumPay);
  const isAmountInBasket = useSelector((state) => state.basket.AmountItemInBasket);
  const FreeDelivery = 1500 - isSumPay;
  return (
    <div>
      <div className={styles.top_block}>
        <Link to='/items' className={styles.tb_link}>
          &#60; До вибору страви
        </Link>
        <div className={styles.tb_lineblock}>
          <hr className={styles.tb_hr} />
          <h1 className={styles.tb_title}>Кошик</h1>
          <span className={styles.tb_span}>у кошику {isAmountInBasket} товару</span>
        </div>
      </div>
      <div className={styles.main_block}>
        <div className={styles.mb_basket}>
          {isItemInBasket.map((item, index) => (
            <div key={index}>
              <BasketItem
                title={item.title}
                weight={item.weight}
                text={item.text}
                price={item.price}
                imgUrl={item.imgUrl}
                id={item.id}
                amountItem={item.amountItem}
              />
              <div className={styles.mbb_hr}></div>
            </div>
          ))}
        </div>

        <div className={styles.mb_container}>
          <hr className={styles.mb_hr} />
        </div>
      </div>
      <div className={styles.foot_block}>
        <div className={styles.fb_total}>
          <div className={styles.fbt_info}>
            <p className={styles.fbti_txt1}>
              Разом: <span className={styles.fbti_txt1_1}>{isSumPay} UAH</span>
            </p>
            <p className={styles.fbti_txt2}>
              До безкоштовної доставки не вистачає:{" "}
              <span className={styles.fbti_txt2_1}>{isSumPay > 1500 ? `0` : FreeDelivery} UAH</span>
            </p>
            <p className={styles.fbti_txt3}>
              Мінімальна сума замовлення <span className={styles.fbti_txt3_1}>1500 UAH</span>
            </p>
          </div>
          <Link to='/basket/ordering' className={styles.fbt_butt}>
            Оформити замовлення
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Basket;
