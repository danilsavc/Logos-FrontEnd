import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./AboutBlock.module.css";

const AboutBlock = () => {
  return (
    <div>
      <div className={styles.m_aboutblock}>
        <div className={styles.mab_shadow}>
          <div className={styles.mabs_left}>
            <h1 className={styles.mabsl_h1}>НАШ РЕСТОРАН</h1>
            <p className={styles.mabsl_p}>
              Ми розташовані в одному з наймальовничіших місць
              <br />
              міста – на березі річки, це ваш оазис у межах міста,
              <br />
              куди можна втекти від галасливого та запорошеного мегаполісу.
              <br />
              Ми справді унікальні, адже все продумано до
              <br />
              дрібниць: проект побудований з дикого закарпатського зрубу,
              <br />
              камін в основному залі ресторану та панорамні вікна з<br />
              видом на річку, затишні альтанки на березі річки та найкраща
              <br />
              видова тераса, намет із посадкою на 200 осіб,
              <br />
              казковий дитячий будиночок та басейн.
            </p>
            <NavLink to='/items'>
              <button className={styles.mabsl_butt}>ПОДИВИТИСЯ МЕНЮ</button>
            </NavLink>
          </div>
          <div className={styles.mabs_right}>
            <div className={styles.mabsr_block}>
              <div className={styles.mabsrb_img_onion}></div>
              <p className={styles.mabsrb_p}>Найсвіжіші продукти</p>
            </div>
            <div className={styles.mabsr_block}>
              <div className={styles.mabsrb_img_flash}></div>
              <p className={styles.mabsrb_p1}>Швидка доставка</p>
            </div>
            <div className={styles.mabsr_block}>
              <div className={styles.mabsrb_img_chef}></div>
              <p className={styles.mabsrb_p}>Найкращі кухарі</p>
            </div>
            <div className={styles.mabsr_block}>
              <div className={styles.mabsrb_img_onion}></div>
              <p className={styles.mabsrb_p}>Найсвіжіші продукти</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBlock;
