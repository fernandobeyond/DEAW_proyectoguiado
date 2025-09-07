import React from 'react';
import './css/Cart.css';

const Cart = ({ cartItems, onRemoveFromCart }) => {
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div className="cart-container">
      <h2 className="cart-heading">Tu Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <div className="cart-empty">
          <p>Tu carrito está vacío.</p>
        </div>
      ) : (
        <div>
          <ul className="cart-items-list">
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <div className="cart-item-info">
                  <img src={item.image} alt={item.name} className="cart-item-image" />
                  <div className="cart-item-details">
                    <h4 className="cart-item-name">{item.name}</h4>
                    <span className="cart-item-price">${item.price.toFixed(2)}</span>
                  </div>
                </div>
                <button
                  onClick={() => onRemoveFromCart(item.id)}
                  className="cart-remove-button"
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
          <div className="cart-total-container">
            <h3 className="cart-total">
              Total: <span className="cart-total-amount">${calculateTotal()}</span>
            </h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;