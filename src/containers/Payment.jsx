import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { PayPalButton } from 'react-paypal-button';

import { AppContext } from '../context/AppContext';

import '../styles/components/Payment.css';

const Payment = () => {
  const history = useHistory();
  const { PP_CLIENT_ID } = process.env;

  const {
    state: { cart, buyer },
    addNewOrder,
  } = useContext(AppContext);

  const paypalOptions = {
    clientId: PP_CLIENT_ID,
    intent: 'capture',
    currency: 'USD',
  };

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect',
  };

  const handlePaymentSuccess = (data) => {
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        products: cart,
        payment: data,
      };
      addNewOrder(newOrder);
      history.push('/checkout/success');
    }
  };

  const handleSumTotal = () => {
    const sum = cart.reduce((accum, { price }) => accum + price, 0);

    return sum;
  };

  console.log(PP_CLIENT_ID);
  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido:</h3>
        {cart.map((item, idx) => (
          <div className="Payment-item" key={idx}>
            <div className="Payment-element">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
          </div>
        ))}
        {cart.length > 0 && (
          <div className="Payment-item">
            <div className="Payment-element">
              <h4>Total:</h4>
              <span>$ {handleSumTotal()}</span>
            </div>
          </div>
        )}
        <div className="Payment-button">
          <PayPalButton
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            amount={handleSumTotal()}
            onPaymentStart={() => console.log('Start Payment!')}
            onPaymentSuccess={(data) => handlePaymentSuccess(data)}
            onPaymentError={(error) => console.log(error)}
            onPaymentCancel={(data) => console.log(data)}
          />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Payment;
