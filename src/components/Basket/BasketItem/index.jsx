import React from 'react'
import { useDispatch } from 'react-redux';
import { setItemInBasket, deleteItem, deleteOneItemFromAmount } from '../../../Redux/Slices/basket';
import styles from "./BasketItem.module.css";

const BasketItem = ({ title, weight, text, price, imgUrl, id, amountItem}) => {
    const dispatch = useDispatch();
    function AddToBasket(obj) {
        dispatch(setItemInBasket(obj));
    };
    function DeleteItemBasket(obj) {
        dispatch(deleteItem(obj));
    }
    function DeleteOneItemBasket(obj) {
        dispatch(deleteOneItemFromAmount(obj));
    }
    return (
        <div className={styles.mbb_item}>
            <img src={imgUrl} alt='imgUrl' className={styles.mbbi_img}/>
            <div className={styles.mbbi_info}>
                <p className={styles.mbbii_title}>{title}</p>
                <p className={styles.mbbii_txt}>{text}</p>
            </div>
            <div className={styles.mbbi_amount}>
                <button onClick={() => {if(amountItem>1){DeleteOneItemBasket({ title, weight, text, price, imgUrl, id, amountItem })}}} className={styles.mbbia_butt}>-</button>
                <span className={styles.mbbia_num}>{amountItem}</span>
                <button onClick={() => {AddToBasket({ title, weight, text, price, imgUrl, id, amountItem })}} className={styles.mbbia_butt}>+</button>
            </div>
            <span className={styles.mbbi_price}>{price} uah</span>
            <button onClick={() => {DeleteItemBasket({ title, weight, text, price, imgUrl, id, amountItem })}} className={styles.mbbi_cancel}>+</button>
        </div>
    )
}

export default BasketItem;
