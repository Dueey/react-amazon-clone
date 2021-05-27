import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import styled from "styled-components";
import ReactNotification, { store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

export default function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        key: id,
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });

    store.addNotification({
      // title: "Item Added to Basket",
      // message: title,
      content: productNotification,
      type: "warning",
      insert: "top",
      container: "top-right",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 5000,
        onScreen: false,
      },
    });

    function productNotification() {
      return (
        <div className='product_notification'>
          <h1>Item Added to Basket</h1>
          <div className='notification_container'>
            <img src={image} alt='' />
            <div className='product_info_notification'>
              <p>{title}</p>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className='product'>
      <div className='product_info'>
        <p>{title}</p>
        <p className='product_price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='product_rating'>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt='' />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}
