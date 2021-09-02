import React, { useContext } from 'react';
import Map from '../components/Map.jsx';

import useGoogleAddress from '../hooks/useGoogleAddress.js';
import { AppContext } from '../context/AppContext';

import '../styles/components/Success.css';

const Success = () => {
  const {
    state: { buyer },
  } = useContext(AppContext);
  const address = useGoogleAddress(buyer[0].address);

  return (
    <div className="Succes">
      <div className="Success-content">
        <h2>{buyer[0].name}, Gracias por tu compra</h2>
        <span>Tu pedido llegara en 3 dias a tu dirección:</span>
        <div className="Success-map">
          <Map address={address} />
        </div>
      </div>
    </div>
  );
};

export default Success;
