import React from 'react';

const Cart = ({ cart, increaseQuantity, decreaseQuantity, removeFromCart }) => {
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <div className="cart-items border-black">
        <h2 className='bg-secondary fw-bold text-black border-secondary rounded-3 ps-5'>Shopping Cart</h2>
        <ul className='fw-bold'>
          {cart.map(item => (
            <li key={item.id} className="cart-item">
              <div className="cart-product-info">
                <img src={item.image} alt={item.title} className="cart-product-img"/>
                <div className="cart-product-details">
                  <p>{item.title}</p>
                  <p>₹{item.price}</p>
                </div>
              </div>
              <div className="quantity-controls">
                <button onClick={() => decreaseQuantity(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => increaseQuantity(item.id)}>+</button>
              </div>
              <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="price-details border-black fw-bold">
        <h3 className=' fw-bold text-black'>Price Details</h3>
        <p>Total MRP: ₹{totalPrice.toFixed(2)}</p>
        <p>Coupon Discount: ₹50</p>
        <p>Platform Fee: ₹10</p>
        <p>Shipping Charges: ₹20</p>
        <p>Total Amount: ₹{(totalPrice - 50 + 10 + 20).toFixed(2)}</p>
        <button className="place-order-btn">Place Order</button>
      </div>
    </div>
  );
};

export default Cart;
