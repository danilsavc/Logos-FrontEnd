import axios from "../../axios";
import React from "react";

import style from "./CreateItem.module.css";
import { useNavigate, useParams } from "react-router-dom";

const CreateItem = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [title, setTitle] = React.useState("");
  const [text, setText] = React.useState("");
  const [weight, setWeight] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [imgUrl, setImgUrl] = React.useState("");
  const [category, setCategory] = React.useState("");
  const isEditing = Boolean(id);

  const onSubmit = async () => {
    try {
      const fields = {
        title,
        text,
        weight,
        price,
        imgUrl,
        category,
      };
      const { data } = isEditing
        ? await axios.patch(`/items/${id}`, fields)
        : await axios.post("/items", fields);

      const _id = isEditing ? id : data._id;
      navigate(`/items/${_id}`);
    } catch (err) {
      console.warn(err);
      alert("Помилка при створенні Товару");
    }
  };

  React.useEffect(() => {
    if (id) {
      axios
        .get(`/items/${id}`)
        .then(({ data }) => {
          setTitle(data.title);
          setText(data.text);
          setWeight(data.weight);
          setPrice(data.price);
          setImgUrl(data.imgUrl);
          setCategory(data.category);
        })
        .catch((err) => {
          console.warn(err);
          alert("Помилка при отриманні блюда");
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={style.createItem}>
      <div className={style.titleHeader}>
        <div className={style.block}></div>
        <div className={style.textHeader}>
          <span>Create Item</span>
        </div>
      </div>

      <div className={style.content}>
        <p className={style.title}>Title:</p>
        <input
          onChange={(e) => setTitle(e.target.value)}
          className={style.input_title}
          type='text'
          value={title}
        />

        <p className={style.text}>Text:</p>
        <input
          onChange={(e) => setText(e.target.value)}
          className={style.input_text}
          type='text'
          value={text}
        />

        <p className={style.category}>Catagory:</p>
        <input
          onChange={(e) => setCategory(e.target.value)}
          type='number'
          className={style.input_category}
          value={category}
        />

        <p className={style.price}>Price:</p>
        <input
          onChange={(e) => setPrice(e.target.value)}
          className={style.input_price}
          type='number'
          value={price}
        />

        <p className={style.weight}>Weight:</p>
        <input
          onChange={(e) => setWeight(e.target.value)}
          className={style.input_weight}
          type='number'
          value={weight}
        />

        <p className={style.imgUrl}>ImgUrl:</p>
        <input
          onChange={(e) => setImgUrl(e.target.value)}
          className={style.input_imgUrl}
          type='text'
          value={imgUrl}
        />
        <button onClick={onSubmit} className={style.btn}>
          {isEditing ? "Зберігти" : "Додати"}
        </button>
      </div>
    </div>
  );
};

export default CreateItem;
