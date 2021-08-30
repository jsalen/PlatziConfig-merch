import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AppContext } from '../context/AppContext';

import '../styles/components/Checkout.css';

const Checkout = () => {
  const {
    state: { cart },
    removeFromCart,
  } = useContext(AppContext);

  const handleRemove = (product) => () => {
    removeFromCart(product);
  };

  const showSumTotal = () => {
    const sum = cart.reduce(
      (sum, { price, qtyInCart }) => sum + price * qtyInCart,
      0
    );

    return sum;
  };

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        <h3>{cart.length > 0 ? 'Lista de Pedidos:' : 'No hay productos.'}</h3>
        {cart.map((item) => (
          <div className="Checkout-item" key={item.id}>
            <div className="Checkout-element">
              <h4>{item.title}</h4>
              <span>
                Cantidad: {item.qtyInCart} - Precio Unitario: ${item.price}
              </span>
            </div>
            <button type="button" onClick={handleRemove(item)}>
              <i className="fas fa-trash"></i>
            </button>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>Precio Total: ${showSumTotal()}</h3>
          <Link to="/checkout/information">
            <button type="button">Continuar pedido</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Checkout;
