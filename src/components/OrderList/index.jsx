import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrder, setCurrenPage } from "../../Redux/Slices/Order";
import Pagination from "../Paginations";
import SkeletonOneItem from "../Skeleton/SkeletonOneItem";
import OrderListItem from "./OrdelListItem";

import style from "./OrderList.module.css";

const OrderList = () => {
  const dispatch = useDispatch();
  const { items, status, countPage, currentPage, countItems } = useSelector((state) => state.order);

  const isLoading = status === "loaded";

  const onChangePage = (number) => {
    dispatch(setCurrenPage(number));
  };

  React.useEffect(() => {
    dispatch(
      fetchOrder({
        currentPage,
      })
    );
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, countItems]);

  return (
    <div className={style.order}>
      <div className={style.head_title}>
        <div className={style.head_block}></div>
        <div className={style.head_text}>
          <span>Список замовлень</span>
        </div>
      </div>
      {isLoading ? (
        <div className={style.content}>
          {items.results.map((item, index) => (
            <OrderListItem key={index} item={item} id={item._id} />
          ))}
        </div>
      ) : (
        <SkeletonOneItem />
      )}
      <div className={style.pagination}>
        <Pagination countPage={countPage} currentPage={currentPage} onChangePage={onChangePage} />
      </div>
    </div>
  );
};
export default OrderList;
