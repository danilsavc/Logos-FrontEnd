import React from "react";

import style from "./Contact.module.css";

import location from "../../../Assets/img/Location.svg";
import message from "../../../Assets/img/Message.svg";
import facebook from "../../../Assets/img/facebook.svg";
import youtube from "../../../Assets/img/youtube.svg";
import instagram from "../../../Assets/img/instagram.svg";
import { NavLink } from "react-router-dom";

const Contact = () => {
  return (
    <div className={style.contact}>
      <span className={style.title}>Контакти</span>
      <div className={style.stick}></div>

      <div className={style.location}>
        <img className={style.imgLocation} src={location} alt='location' />
        <span className={style.ownAdress}>Наша адреса:</span>
        <span className={style.adress}>вулиця Сталеварів, 11, Запоріжжя, Запорізька область</span>
      </div>

      <div className={style.message}>
        <img className={style.imgMessage} src={message} alt='message' />
        <span className={style.ownEmail}>Наша пошта:</span>
        <span className={style.email}>danilsavc@gmail.com</span>
      </div>

      <div className={style.stick2}></div>

      <div className={style.order}>
        <NavLink to='/items'>
          <div className={style.btn}>
            <span>Зробити замовлення</span>
          </div>
        </NavLink>
        <span className={style.telephone}>+38 (099) 510-57-59</span>
        <span className={style.call}>Залишайте заявку або дзвоніть нам</span>
      </div>

      <div className={style.sites}>
        <span className={style.text}>Ми у соц мережах: </span>
        <img className={style.site} src={facebook} alt='facebook' />
        <img className={style.site} src={instagram} alt='instagram' />
        <img className={style.site} src={youtube} alt='youtube' />
      </div>
    </div>
  );
};

export default Contact;
