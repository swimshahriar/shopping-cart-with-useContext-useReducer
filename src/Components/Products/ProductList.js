import React, { useContext } from 'react';
import { Grid } from '@material-ui/core';

import { CartContext } from '../../Context/CartContext';
import Product from './Product';
import useStyle from './ProductListStyles';

const products = [
  {
    id: 1,
    name: 'Product 1',
    imageUrl: 'https://www.roudstudio.com/images/works/product-photo/img07.jpg',
    price: '20.77',
  },
  {
    id: 2,
    name: 'Product 2',
    imageUrl: 'https://www.roudstudio.com/images/works/product-photo/img07.jpg',
    price: '10.2',
  },
  {
    id: 3,
    name: 'Product 3',
    imageUrl: 'https://www.roudstudio.com/images/works/product-photo/img07.jpg',
    price: '9.9',
  },
  {
    id: 4,
    name: 'Product 4',
    imageUrl: 'https://www.roudstudio.com/images/works/product-photo/img07.jpg',
    price: '10.15',
  },
  {
    id: 5,
    name: 'Product 5',
    imageUrl: 'https://www.roudstudio.com/images/works/product-photo/img07.jpg',
    price: '13.6',
  },
  {
    id: 6,
    name: 'Product 6',
    imageUrl: 'https://www.roudstudio.com/images/works/product-photo/img07.jpg',
    price: '15.5',
  },
];

const ProductList = () => {
  const classes = useStyle();
  const cartContext = useContext(CartContext);

  const addToCartHandler = (product) => cartContext.addToCart(product);

  return (
    <div className={classes.margin}>
      <Grid container spacing={2}>
        {products.map((product) => (
          <Product
            product={product}
            key={product.id}
            addToCartHandler={addToCartHandler}
          />
        ))}
      </Grid>
    </div>
  );
};

export default ProductList;
