import React from "react";

// function Product({ productName, price }) {
function Product(props) {
  //   const { productName, price } = props;
  return (
    <div>
      <div>İsim : {props.productName}</div>
      <div>Fiyat: {props.price} </div>
    </div>
  );
}

export default Product;
