import React from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import Footer from "./Footer";
import Header from "./Header";
import { selectIsAuth } from "../Redux/Slices/auth";

const Layout = () => {
  const userData = useSelector((state) => state.auth.data);
  const isAuth = useSelector(selectIsAuth);
  return (
    <>
      <Header isAuth={isAuth} />
      <div className='Wrapper'>
        <Outlet />
      </div>
      <Footer user_role={userData?.role} />
    </>
  );
};

export { Layout };
