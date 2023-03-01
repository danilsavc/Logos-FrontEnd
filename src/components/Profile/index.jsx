import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { logout, selectIsAuth } from "../../Redux/Slices/auth";

import style from "./Profile.module.css";

const Profile = ({ firstName, lastName, email, phone }) => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  const token = window.localStorage.getItem("token");

  const onClickLogout = () => {
    if (window.confirm("Ви впевнені, що хочете вийти?")) {
      dispatch(logout());
      window.localStorage.removeItem("token");
    }
  };

  if (token && isAuth) {
    return (
      <div className={style.profile}>
        <div className={style.title}>
          <div className={style.block}></div>
          <div className={style.text}>
            <span>Профіль</span>
          </div>
        </div>
        <div className={style.content}>
          <span className={style.firstName}>Ім'я:</span>
          <span className={style.firstNameBd}>{firstName}</span>
          <span className={style.lastName}>Прізвище:</span>
          <span className={style.lastNameBd}>{lastName}</span>
          <span className={style.phone}>Телефон:</span>
          <span className={style.phoneBd}>+380{phone}</span>
          <span className={style.email}>Пошта:</span>
          <span className={style.emailBd}>{email}</span>
        </div>
        <button onClick={onClickLogout} className={style.btn}>
          Вийти з аккаунта
        </button>
      </div>
    );
  } else {
    return <Navigate to='/' />;
  }
};

export default Profile;
