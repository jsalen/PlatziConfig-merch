import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = ({ address }) => {
  const { GOOGLE_API_KEY } = process.env;

  const mapStyles = {
    width: '50%',
    height: '30vh',
  };

  const defaultCenter = {
    lat: address.lat,
    lng: address.lng,
  };

  return (
    <LoadScript googleMapsApiKey={GOOGLE_API_KEY}>
      <GoogleMap mapContainerStyle={mapStyles} zoom={15} center={defaultCenter}>
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
