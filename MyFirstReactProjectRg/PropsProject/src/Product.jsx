import React from 'react'

function Product({productName, price}) {
    // const {productName, price} = props; // distructing
  return (
    <>

        <div>ÜRÜN BİLGİLERİ</div>

            {/* <div>
                <div>İsim : {props.productName}</div>
                <div>Fiyat : {props.price} TL</div>
            </div>  */}

             <div>
                <div>İsim : {productName}</div>
                <div>Fiyat : {price} TL</div>
            </div> 
    </>
  )
}

export default Product