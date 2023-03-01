import React from "react";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import styles from "./Login.module.css";
import { fetchAyth, selectIsAuth } from "../../../Redux/Slices/auth";

const Login = () => {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    // setError,
    formState: { isValid },
  } = useForm({
    defaultValues: {
      email: "admin@gmail.com",
      password: "admin",
    },
    mode: "onChange",
  });

  const onSubmit = async (values) => {
    const data = await dispatch(fetchAyth(values));

    if (!data.payload) {
      alert("Не вдалось авторизуватися");
    }

    if ("token" in data.payload) {
      window.localStorage.setItem("token", data.payload.token);
    }
  };

  if (isAuth) {
    return <Navigate to='/' />;
  }

  return (
    <div className={styles.Login_main}>
      <div className={styles.Login}>
        <div className={styles.login_top}>
          <hr className={styles.lt_hr} />
          <h1 className={styles.lt_title}>Логін</h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.login_block}>
            <input
              className={styles.lb_input}
              placeholder='E-mail'
              type='email'
              {...register("email", { required: "Вкажіть пошту" })}
            />
            <input
              className={styles.lb_input}
              placeholder='Пароль'
              type='password'
              {...register("password", { required: "Вкажіть пароль" })}
            />
            <div className={styles.lb_buttons}>
              <NavLink to='/registration' className={styles.lbb_butt}>
                Зареєструватися
              </NavLink>
              <button disabled={!isValid} type='submit' className={styles.lbb_butt}>
                Увійти
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
