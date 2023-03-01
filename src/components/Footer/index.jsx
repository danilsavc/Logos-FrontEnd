import React from "react";

import { NavLink } from "react-router-dom";

import styles from "./Footer.module.css";

const Footer = ({ user_role }) => {
  return (
    <footer className={styles.Footer}>
      <div className={styles.f_container}>
        <div className={styles.f_info}>
          <h1 className={styles.fi_title}>LOGOS</h1>
          <p className={styles.fi_txt}>
            © ТОВ СК «АПШЕРОН» <br />
            Усі права захищені. 2022-2023
          </p>
          <NavLink to='/privacy-policy'>
            <p className={styles.fi_a}>Політика конфіденційності</p>
          </NavLink>
        </div>
        <nav className={styles.f_nav}>
          <NavLink
            to='/about-restaurant'
            className={({ isActive }) =>
              isActive ? `${styles.fn_butt} ${styles.fn_buttActive}` : `${styles.fn_butt}`
            }
          >
            <span>Про ресторан</span>
          </NavLink>
          <NavLink
            to='/delivery'
            className={({ isActive }) =>
              isActive ? `${styles.fn_butt} ${styles.fn_buttActive}` : `${styles.fn_butt}`
            }
          >
            <span>Умови доставки</span>
          </NavLink>
          <NavLink
            to='/items'
            className={({ isActive }) =>
              isActive ? `${styles.fn_butt} ${styles.fn_buttActive}` : `${styles.fn_butt}`
            }
          >
            <span>Меню</span>
          </NavLink>
          <NavLink
            to='/actions'
            className={({ isActive }) =>
              isActive ? `${styles.fn_butt} ${styles.fn_buttActive}` : `${styles.fn_butt}`
            }
          >
            <span>Акції</span>
          </NavLink>

          {user_role === "admin" ? (
            <>
              <NavLink
                to='/create-item'
                className={({ isActive }) =>
                  isActive ? `${styles.fn_butt} ${styles.fn_buttActive}` : `${styles.fn_butt}`
                }
              >
                <span>Додати меню</span>
              </NavLink>
              <NavLink
                to='/order-list'
                className={({ isActive }) =>
                  isActive ? `${styles.fn_butt} ${styles.fn_buttActive}` : `${styles.fn_butt}`
                }
              >
                <span>Список замовлень</span>
              </NavLink>
            </>
          ) : (
            ""
          )}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
