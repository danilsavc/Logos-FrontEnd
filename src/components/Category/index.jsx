import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useInView } from "react-intersection-observer";

import ItemAddition from "../Items/ItemAddition";
import Categories from "./Categories";
import styles from "./Category.module.css";

import { fetchItems, setCurrenPage } from "../../Redux/Slices/Items";
import { selectFilter, setCategoryId, setCategoryName } from "../../Redux/Slices/Filter";
import SkeletonItems from "../Skeleton/SkeletonItems";
import Pagination from "../Paginations";
import { truncateText, truncateTitle } from "../../truncate";

const Category = () => {
  const dispatch = useDispatch();

  const { items, status, countPage, currentPage } = useSelector((state) => state.items);
  const { categoryId, categoryName } = useSelector(selectFilter);

  const isLoading = status === "loading";

  const onChangeCategory = (id, categoryName) => {
    dispatch(setCategoryId(id));
    onChangePage(1);
    dispatch(setCategoryName(categoryName));
  };

  const onChangePage = (number) => {
    dispatch(setCurrenPage(number));
  };

  React.useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(
      fetchItems({
        categoryId,
        currentPage,
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryId, currentPage]);

  return (
    <div>
      <Categories value={categoryId} onChangeCategory={onChangeCategory} />
      <div className={styles.titleline}>
        <div className={styles.tl_verline}></div>
        <h1 className={styles.tl_title}>{categoryName}</h1>
      </div>
      <div className={styles.itemsblock}>
        {(isLoading ? [...Array(6)] : items.results).map((item, index) =>
          isLoading ? (
            <SkeletonItems key={index} />
          ) : (
            <ItemAddition
              title={truncateTitle(item.title)}
              price={item.price}
              imgUrl={item.imgUrl}
              weight={item.weight}
              text={truncateText(item.text)}
              id={item._id}
              key={index}
            />
          )
        )}
      </div>

      <div className={styles.pagination}>
        <Pagination countPage={countPage} currentPage={currentPage} onChangePage={onChangePage} />
      </div>
      {/* <div ref={ref} className={styles.target}></div> */}
    </div>
  );
};

export default Category;
