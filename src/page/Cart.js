import React from 'react'

const Cart = ({cart}) => {
  return (
    <div>
      <h2>장바구니</h2>
      {cart.length === 0 ? (
        <p>장바구니에 상품이 없습니다.</p>
      ) : (
        cart.map((product, index) => (
          <div key={index}>
            <img src={product.img} 
            alt={product.title} 
            style={{ width: '100px' }} />
            <h3>{product.title}</h3>
            <p>사이즈: {product.selectedSize}</p>
            <p>{product.price}원</p>
          </div>
        ))
      )}
    </div>
  )
}

export default Cart
