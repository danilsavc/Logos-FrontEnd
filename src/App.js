import React from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Login from "./components/Auth/Login";
import Registration from "./components/Auth/Registration";
import Home from "./components/Home";
import Basket from "./components/Basket";
import { Layout } from "./components/Layout";
import Actions from "./components/Actions";
import Delivery from "./components/Delivery";
import Ordering from "./components/Ordering";
import PrivacyPolice from "./components/PrivacyPolice";
import AboutRest from "./components/AboutRest";
import Items from "./components/Items";
import Category from "./components/Category";

import { fetchAythMe } from "./Redux/Slices/auth";
import CreateItem from "./components/CreateItem";
import Profile from "./components/Profile";
import OrderList from "./components/OrderList";
import OneOrder from "./components/OrderList/OneOrder";

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.auth.data || []);

  React.useEffect(() => {
    dispatch(fetchAythMe());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path='items/:id' element={<Items user_role={data.role} />}></Route>
          <Route path='items/:id/edit' element={<CreateItem />}></Route>
          <Route path='items' element={<Category />}></Route>
          <Route path='login' element={<Login />}></Route>
          <Route path='registration' element={<Registration />}></Route>
          <Route path='basket' element={<Basket />}></Route>
          <Route path='basket/ordering' element={<Ordering />}></Route>
          <Route path='actions' element={<Actions />}></Route>
          <Route path='delivery' element={<Delivery />}></Route>
          <Route path='privacy-policy' element={<PrivacyPolice />}></Route>
          <Route path='about-restaurant' element={<AboutRest />}></Route>
          <Route
            path='profile'
            element={
              <Profile
                firstName={data.firstName}
                lastName={data.lastName}
                phone={data.phone}
                email={data.email}
              />
            }
          ></Route>
          <Route path='create-item' element={<CreateItem />}></Route>
          <Route path='order-list' element={<OrderList />}></Route>
          <Route path='order-list/:id' element={<OneOrder />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
