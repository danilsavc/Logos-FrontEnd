import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";

import axios from "../../axios";

import MapContact from "../Actions/MapContact";
import ItemAddition from "./ItemAddition";
import styles from "./Items.module.css";
import SkeletonOneItem from "../Skeleton/SkeletonOneItem";
import { truncateText, truncateTitle } from "../../truncate";
import { useDispatch } from "react-redux";
import { setItemInBasket } from "../../Redux/Slices/basket";

const Items = ({ user_role }) => {
  const [data, setData] = React.useState();
  const [isLoading, setIsLoading] = React.useState(true);

  const [items, setItems] = React.useState();
  const [Loading, setLoading] = React.useState(true);
  const [deleteItem, setDeleteItem] = React.useState(false);

  const { id } = useParams();
  
  const dispatch = useDispatch();
  const amountItem = 1;
  function AddToBasket(obj) {
    dispatch(setItemInBasket(obj));
  };

  React.useEffect(() => {
    window.scrollTo(0, 0);
    axios
      .get(`/items/${id}`)
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.warn(err);
        alert("Помилка при отрмианні товара");
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  React.useEffect(() => {
    axios
      .get(`/items`)
      .then((res) => {
        setItems(res.data.results.slice(0, 4));
        setLoading(false);
      })
      .catch((err) => {
        console.warn(err);
        alert("Помилка при отрмианні товара");
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const onClickDelete = () => {
    if (window.confirm("Ви впевненні що хочете видалити товар?")) {
      axios
        .delete(`/items/${id}`)
        .then(() => {
          setDeleteItem(true);
        })
        .catch((err) => {
          console.warn(err);
          alert("Помилка при отриманні товара");
        });
    }
  };

  if (deleteItem) {
    return <Navigate to='/items' />;
  }

  if ((isLoading, Loading)) {
    return (
      <div className={styles.skeleton}>
        <SkeletonOneItem />
      </div>
    );
  } else {
    return (
      <div>
        <div className={styles.top_block}>
          <div className={styles.lineblock}>
            <Link to='/items' className={styles.tbl_link}>
              <span className={styles.tbl_span}>&#60;</span>Повернутися назад
            </Link>
          </div>
          <div className={styles.tb_container}>
            <img src={data.imgUrl} alt='' className={styles.tbc_img} />
            <div className={styles.tbc_info}>
              <h1 className={styles.tbci_h1}>{data.title}</h1>
              <p className={styles.tbci_p}>{data.text}</p>
              <p className={styles.tbci_gramm}>Вага: {data.weight} г</p>
              <div className={styles.lineblock}>
                <button onClick={() => {AddToBasket({ title: data.title, weight: data.weight, text: data.text, price: data.price, imgUrl:data.imgUrl, id: id, amountItem: amountItem})}} className={styles.tbcil_butt}>
                  Кошик
                  <div className={styles.tbcil_verline}></div>
                  <div className={styles.tbcil_img}></div>
                </button>
                <span className={styles.tbcil_price}>{data.price} UAH</span>
              </div>
              <div className={styles.lineblock1}>
                <span className={styles.tbcil_span}>Білки</span>
                <span className={styles.tbcil_span}>Жири</span>
                <span className={styles.tbcil_span}>Вуглеводи</span>
                <span className={styles.tbcil_span}>Ккал</span>
                <span className={styles.tbcil_span}>Вага</span>
              </div>
              <div className={styles.tbci_hr}></div>
              <div className={styles.lineblock2}>
                <span className={styles.tbcil_span1}>17.23</span>
                <span className={styles.tbcil_span1}>7.63</span>
                <span className={styles.tbcil_span1}>22.35</span>
                <span className={styles.tbcil_span1}>234</span>
                <span className={styles.tbcil_span1}>210 г</span>
              </div>
            </div>
          </div>
        </div>
        {user_role === "admin" ? (
          <div className={styles.deleteAndUpdate}>
            <button onClick={onClickDelete} className={styles.btn}>
              Видалити товар
            </button>
            <Link to={`/items/${id}/edit`}>
              <button className={styles.btn}>Оновити товар</button>
            </Link>
          </div>
        ) : (
          ""
        )}

        <div className={styles.hr_block}></div>
        <div className={styles.main_block}>
          <div className={styles.mb_top}>
            <div className={styles.mbt_verline}></div>
            <h1 className={styles.mbt_title}>З ЦИМ ТОВАРОМ КУПУЮТЬ</h1>
          </div>
          <div className={styles.mbt_container}>
            {items.map((item, index) => (
              <ItemAddition
                title={truncateTitle(item.title)}
                price={item.price}
                imgUrl={item.imgUrl}
                weight={item.weight}
                text={truncateText(item.text)}
                id={item._id}
                key={index}
              />
            ))}
          </div>
          <MapContact />
        </div>
      </div>
    );
  }
};

export default Items;
