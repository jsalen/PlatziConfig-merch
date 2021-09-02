import React, { useContext } from 'react';
import Product from './Product';

import { AppContext } from '../context/AppContext';

import '../styles/components/Products.css';

const Products = () => {
  const {
    state: { products },
    addToCart,
  } = useContext(AppContext);

  const handleAddToCart = (product) => () => {
    addToCart(product);
  };

  return (
    <section className="Products">
      <div className="Products-items">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </section>
  );
};

export default Products;
