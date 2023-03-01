import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { selectIsAuth } from "../../Redux/Slices/auth";
import styles from "./Header.module.css";

const HeaderMain = () => {
  const location = useLocation();
  const isAuth = useSelector(selectIsAuth);
  const token = window.localStorage.getItem("token");
  const isAmountInBasket = useSelector((state) => state.basket.AmountItemInBasket);

  return (
    <header className={styles.Header_block}>
      <div className={styles.header_top}>
        <Link to='/' className={styles.ht_title}>
          LOGOS
        </Link>
        <input className={styles.ht_input} type='search' placeholder='Введите адрес доставки' />
        <div className={styles.ht_call}>
          <div className={styles.ht_call_img}></div>
        </div>
        <span className={styles.ht_txt1}>
          Контакти:
          <br />
          <span className={styles.ht_txt2}>+38 (099) 510-57-59</span>
        </span>
        <hr className={styles.ht_hr_vertical} />

        {!isAuth && !token ? (
          <Link to='/login' className={styles.ht_login}>
            <div className={styles.ht_person_img}></div>
            <span className={styles.ht_txt3}>Увійти</span>
          </Link>
        ) : (
          <Link to='/profile' className={styles.ht_login}>
            <div className={styles.ht_person_img}></div>
            <span className={styles.ht_txt3}>Профіль</span>
          </Link>
        )}

        <Link to='/basket' className={styles.ht_basket}>
          <span className={styles.htb_title}>Кошик</span>
          <hr className={styles.ht_hr_vertical2} />
          <div className={styles.htb_num}>
            <span>{isAmountInBasket}</span>
          </div>
        </Link>
      </div>
      <hr className={styles.header_hr} />
      {location.pathname === "/" && (
        <div className={styles.header_banner}>
          <div className={styles.hb_img}></div>
          <div className={styles.hb_shadow}>
            <span className={styles.hb_span}>
              Доставка СМАЧНІШИХ <br />
              СТРАВ ЗА 60 ХВИЛИН
            </span>
            <span className={styles.hb_span_butt}>Ще не куштував?</span>
          </div>
        </div>
      )}

      <hr className={styles.header_hr} />
    </header>
  );
};

export default HeaderMain;
