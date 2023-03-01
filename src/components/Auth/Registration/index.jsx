import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { fetchRegister, selectIsAuth } from "../../../Redux/Slices/auth";

import styles from "./Registration.module.css";

const Registration = () => {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    // setError,
    formState: { isValid },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  const onSubmit = async (values) => {
    const data = await dispatch(fetchRegister(values));

    if (!data.payload) {
      alert("Не вдалось зареєструватися");
    }

    if ("token" in data.payload) {
      window.localStorage.setItem("token", data.payload.token);
    }
  };

  if (isAuth) {
    return <Navigate to='/' />;
  }

  return (
    <div className={styles.Registration_main}>
      <div className={styles.Registration}>
        <div className={styles.registration_top}>
          <hr className={styles.rt_hr} />
          <h1 className={styles.rt_title}>Реєстрація</h1>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.registration_block}>
            <div className={styles.rb_inputs}>
              <input
                className={styles.rb_input}
                {...register("firstName", { required: "Вкажіть ім'я" })}
                placeholder="Ім'я"
                type='text'
              />
              <input
                className={styles.rb_input}
                {...register("lastName", { required: "Вкажіть прізвище" })}
                placeholder='Прізвище'
                type='text'
              />
              <input
                className={styles.rb_input}
                {...register("phone", { required: "Вкажіть телефон" })}
                placeholder='Телефон'
                type='tel'
              />
              <input
                className={styles.rb_input}
                {...register("email", { required: "Вкажіть пошту" })}
                placeholder='E-mail'
                type='email'
              />
              <input
                className={styles.rb_input}
                {...register("password", { required: "Вкажіть пароль" })}
                placeholder='Пароль'
                type='password'
              />
            </div>
            <div className={styles.rb_buttons}>
              <button disabled={!isValid} type='submit' className={styles.rbb_butt}>
                Зареєструватися
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
