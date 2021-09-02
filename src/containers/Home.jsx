import React from 'react';
import Products from '../components/Products';
import MetaHead from '../components/MetaHead';
import { Helmet } from 'react-helmet';

import initialState from '../initialState';

const meta = (
  <MetaHead
    title="Productos"
    description="Encuentra todos tus productos favoritos"
    image="https://davecast.s3.amazonaws.com/avatarnegativo.jpg"
    url="https://fake-platzi-store-merch.web.app/"
  />
);

const Home = () => {
  return (
    <>
      {meta}
      <Products products={initialState.products} />
    </>
  );
};

export default Home;
