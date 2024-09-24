import React from 'react';

const Product = ({ product, addToCart }) => {
  return (
    <div className="product border rounded-4 border-black">
      <img src={product.image} alt={product.title} width="200px" height="200px"/>
      <h3>{product.title}</h3>
      <p className='text-white fw-bold text-center'>⭐ {product.rating?.rate}</p>
      <h3>₹{product.price}</h3>
      <button className="btn btn-secondary fw-semibold mt-3" onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default Product;
