import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import MetaHead from '../components/MetaHead';

import { AppContext } from '../context/AppContext';

import '../styles/components/Checkout.css';

const meta = (
  <MetaHead
    title="Checkout"
    description="Encuentra todos tus productos favoritos"
    image="https://davecast.s3.amazonaws.com/avatarnegativo.jpg"
    url="https://fake-platzi-store-merch.web.app/"
  />
);

const Checkout = () => {
  const {
    state: { cart },
    removeFromCart,
  } = useContext(AppContext);

  const handleRemove = (product) => () => {
    removeFromCart(product);
  };

  const showSumTotal = () => {
    const reducer = (accum, current) => accum + current.price;
    const sum = cart.reduce(reducer, 0);

    return sum;
  };

  return (
    <>
      {meta}
      <div className="Checkout">
        <div className="Checkout-content">
          <h3>{cart.length > 0 ? 'Lista de Pedidos:' : 'No hay productos.'}</h3>
          {cart.map((item, idx) => (
            <div className="Checkout-item" key={idx}>
              <div className="Checkout-element">
                <h4>{item.title}</h4>
                <span>${item.price}</span>
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
    </>
  );
};

export default Checkout;
