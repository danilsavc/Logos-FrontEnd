import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import axios from "../../axios";

import styles from "./Ordering.module.css";

const Ordering = () => {
  const isItemInBasket = useSelector((state) => state.basket.ItemsInBasket);
  const isSumPay = useSelector((state) => state.basket.SumPay);
  const isAmountInBasket = useSelector((state) => state.basket.AmountItemInBasket);
  const authMe = useSelector((state) => state.auth.data) || "";

  const [isComp1, setComp1] = useState(0);
  const [isComp2, setComp2] = useState(2);
  const [isComp3, setComp3] = useState(0);
  const [isAmPers, setAmPers] = useState(1);

  let conditions = false;
  let objForm = {
    name: authMe.firstName || "",
    phone: authMe.phone || "",
    delivery: "",
    pay: "",
    paid: "",
    deliveryTime: "",
    amountPers: "",
    call: "Ні",
    item: [],
    amountInBasket: "",
  };

  const getDataObj = async () => {
    if (conditions) {
      console.log(isItemInBasket);
      objForm.name = document.getElementById("name").value;
      objForm.phone = document.getElementById("phoneNum").value;
      if (isComp1 === 0) {
        objForm.delivery =
          "Вулиця: " +
          document.getElementById("adress_1").value +
          ", " +
          "Номер будинку: " +
          document.getElementById("adress_2").value +
          ", " +
          "№ квартири/офісу: " +
          document.getElementById("adress_3").value +
          ", " +
          "Під'їзд: " +
          document.getElementById("adress_4").value +
          ", " +
          "Поверх: " +
          document.getElementById("adress_5").value +
          ", " +
          "Коментар: " +
          document.getElementById("adress_6").value;
      } else {
        objForm.delivery = document.getElementById("select").value;
      }
      if (isComp2 === 0) {
        objForm.paid = "paid";
      } else if (isComp2 === 1) {
        objForm.paid = "offline card";
      } else if (isComp2 === 2) {
        objForm.paid = "offline Здача з = " + document.getElementById("oddMoney").value;
      }
      if (isComp3 === 0) {
        objForm.deliveryTime = "Найближчим часом";
      } else if (isComp3 === 1) {
        objForm.deliveryTime = "На " + document.getElementById("deliveriTime").value;
      }
      objForm.amountPers = isAmPers;
      objForm.pay = isSumPay;
      objForm.item = isItemInBasket;
      objForm.amountInBasket = isAmountInBasket;
    }

    console.log(objForm);

    await axios.post(`/order`, objForm);
    <Navigate to='/' />;
  };

  return (
    <div>
      <div className={styles.MainOrdering}>
        <Link to='/basket' className={styles.m_link}>
          &#60; В кошик
        </Link>
        <div className={styles.m_lineblock}>
          <hr className={styles.ml_hr} />
          <h1 className={styles.ml_title}>Оформлення заказу</h1>
        </div>
        <div className={styles.m_block}>
          <h1 className={styles.mb_title}>1. Контактна інформація</h1>
          <div className={styles.mb_lineblock}>
            <input
              defaultValue={authMe.firstName}
              id='name'
              className={styles.mbl_input}
              type='text'
              placeholder="Ім'я"
            />
            <input
              defaultValue={"+380" + authMe.phone}
              id='phoneNum'
              className={styles.mbl_input}
              type='tel'
              placeholder='Телефон'
            />
          </div>
        </div>
        <div className={styles.m_block}>
          <h1 className={styles.mb_title}>2. Доставка</h1>
          <div className={styles.mb_lineblock}>
            <div className={styles.mbl_rblock}>
              <input
                type='radio'
                name='radiobutt'
                id={styles.mbl_rb1}
                className={styles.mbl_class_rb}
                defaultChecked={true}
              />
              <label
                htmlFor={styles.mbl_rb1}
                onClick={() => {
                  setComp1(0);
                }}
                className={styles.mbl_radiobutt1}
              >
                <span>Доставка</span>
              </label>
              <input
                type='radio'
                name='radiobutt'
                id={styles.mbl_rb2}
                className={styles.mbl_class_rb}
              />
              <label
                htmlFor={styles.mbl_rb2}
                onClick={() => {
                  setComp1(1);
                }}
                className={styles.mbl_radiobutt1}
              >
                <span>Самовивіз</span>
              </label>
            </div>
            <div className={styles.mbl_clock}></div>
            <span className={styles.mbl_span}>Доставимо через 1 годину 30 хвилин</span>
          </div>
          {isComp1 === 0 ? (
            <div>
              <p className={styles.mb_p}>Адреса доставки</p>
              <div className={styles.mb_iblock}>
                <input
                  id='adress_1'
                  className={`${styles.mbib_input} ${styles.mbib_input1}`}
                  type='text'
                  placeholder='Вкажіть вулицю'
                />
                <input
                  id='adress_2'
                  className={styles.mbib_input}
                  type='text'
                  placeholder='Номер будинку'
                />
                <input
                  id='adress_3'
                  className={`${styles.mbib_input} ${styles.mbib_input2}`}
                  type='text'
                  placeholder='№ квартири/офісу'
                />
                <input
                  id='adress_4'
                  className={styles.mbib_input}
                  type='text'
                  placeholder="Під'їзд"
                />
                <input
                  id='adress_5'
                  className={styles.mbib_input}
                  type='text'
                  placeholder='Поверх'
                />
                <input
                  id='adress_6'
                  className={`${styles.mbib_input} ${styles.mbib_input3}`}
                  type='text'
                  placeholder='Коментар'
                />
              </div>
            </div>
          ) : (
            <div>
              <p className={styles.mb_p}>Виберіть ресторан</p>
              <select id='select' name='select' className={styles.mb_select}>
                <option value='default' defaultValue={true}>
                  Виберіть ресторан
                </option>
                <option value='value1'>Значение 1</option>
                <option value='value2'>Значение 2</option>
                <option value='value3'>Значение 3</option>
              </select>
            </div>
          )}
        </div>
        <div className={styles.m_block}>
          <h1 className={styles.mb_title}>3. Оплатити</h1>
          <div className={styles.mb_rblock}>
            <input
              type='radio'
              name='radiobutt1'
              id={styles.mbl_rb1_2}
              className={styles.mbl_class_rb}
            />
            <label
              htmlFor={styles.mbl_rb1_2}
              onClick={() => {
                setComp2(0);
              }}
              className={styles.mbl_radiobutt1}
            >
              <span>Оплата онлайн</span>
            </label>
            <input
              type='radio'
              name='radiobutt1'
              id={styles.mbl_rb2_2}
              className={styles.mbl_class_rb}
            />
            <label
              htmlFor={styles.mbl_rb2_2}
              onClick={() => {
                setComp2(1);
              }}
              className={styles.mbl_radiobutt1}
            >
              <span>Кур'єру карткою</span>
            </label>
            <input
              type='radio'
              name='radiobutt1'
              id={styles.mbl_rb3_2}
              className={styles.mbl_class_rb}
              defaultChecked={true}
            />
            <label
              htmlFor={styles.mbl_rb3_2}
              onClick={() => {
                setComp2(2);
              }}
              className={styles.mbl_radiobutt1}
            >
              <span>Готівкою</span>
            </label>
          </div>
          {isComp2 === 2 && (
            <input id='oddMoney' className={styles.mbib_input} type='text' placeholder='Здача з' />
          )}
        </div>
        <div className={styles.m_block}>
          <h1 className={styles.mb_title}>4. Коли доставити</h1>
          <div className={styles.mb_lineblock}>
            <div className={styles.mbl_rblock}>
              <input
                type='radio'
                name='radiobutt2'
                id={styles.mbl_rb1_3}
                className={styles.mbl_class_rb}
                defaultChecked={true}
              />
              <label
                htmlFor={styles.mbl_rb1_3}
                onClick={() => {
                  setComp3(0);
                }}
                className={styles.mbl_radiobutt1}
              >
                <span>Найближчим часом</span>
              </label>
              <input
                type='radio'
                name='radiobutt2'
                id={styles.mbl_rb2_3}
                className={styles.mbl_class_rb}
              />
              <label
                htmlFor={styles.mbl_rb2_3}
                onClick={() => {
                  setComp3(1);
                }}
                className={styles.mbl_radiobutt1}
              >
                <span>На час</span>
              </label>
            </div>
            {isComp3 === 1 && (
              <input
                id='deliveriTime'
                className={styles.mbib_input}
                type='text'
                placeholder='Вкажіть час'
              />
            )}
          </div>
          <div className={styles.mb_ablock}>
            <div className={styles.mb_amount}>
              <span className={styles.mba_span}>Кількість персон</span>
              <div className={styles.mba_block}>
                <button
                  onClick={() => {
                    if (isAmPers > 1) {
                      setAmPers(isAmPers - 1);
                    }
                  }}
                  className={styles.mbab_butt}
                >
                  -
                </button>
                <span className={styles.mbab_span}>{isAmPers}</span>
                <button
                  onClick={() => {
                    setAmPers(isAmPers + 1);
                  }}
                  className={styles.mbab_butt}
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <p className={styles.mb_p}>Бажаєте ми зателефонуємо?</p>
          <div className={styles.mb_radiocheck}>
            <input
              type='radio'
              name='radio'
              id={styles.mb_radio1}
              className={styles.mbr_radio}
              defaultChecked={true}
            />
            <label
              onClick={() => {
                objForm.call = "Ні";
              }}
              htmlFor={styles.mb_radio1}
              className={styles.mbr_label}
            >
              Не передзвонювати
            </label>
          </div>
          <div className={styles.mb_radiocheck}>
            <input type='radio' name='radio' id={styles.mb_radio2} className={styles.mbr_radio} />
            <label
              onClick={() => {
                objForm.call = "Так";
              }}
              htmlFor={styles.mb_radio2}
              className={styles.mbr_label}
            >
              Потрібен дзвінок оператора
            </label>
          </div>
        </div>
        <div className={styles.m_block}>
          <div className={styles.mb_lineblock1}>
            <div className={styles.mbl_cont}>
              <input
                type='checkbox'
                name='checkbox'
                id={styles.mbl_checkbox}
                className={styles.mbl_cb}
              />
              <label
                onClick={() => {
                  if (conditions) {
                    conditions = false;
                  } else {
                    conditions = true;
                  }
                }}
                htmlFor={styles.mbl_checkbox}
                className={styles.mbl_label}
              >
                <span className={styles.mbll_span}>Г</span>
              </label>
              <span className={styles.mbl_span2}>
                Я згоден на обробку моїх перс. даних відповідно до{" "}
                <span className={styles.mbl_span3}>Умов</span>
              </span>
            </div>
            <button onClick={getDataObj} className={styles.mbl_button}>
              Оформити замовлення
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ordering;
