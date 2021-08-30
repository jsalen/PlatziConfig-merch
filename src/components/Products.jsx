import React, { useContext } from 'react';
import Product from './Product';

import { AppContext } from '../context/AppContext';

import '../styles/components/Products.css';

const Products = () => {
  const {
    state: { products, cart },
    addToCart,
  } = useContext(AppContext);

  const handleAddToCart = (product) => {
    let newCart = [...cart];
    let itemInCart = newCart.find((item) => product.id === item.id);
    if (itemInCart) {
      itemInCart.qtyInCart++;
    } else {
      itemInCart = {
        ...product,
        qtyInCart: 1,
      };
      newCart.push(itemInCart);
    }
    addToCart(newCart);
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
