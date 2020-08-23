import React from 'react';

import { Grid, createMuiTheme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Product from './Product';

const products = [
  {
    id: 1,
    name: 'Product 1',
    imageUrl: 'https://www.roudstudio.com/images/works/product-photo/img07.jpg',
    price: '10',
  },
  {
    id: 2,
    name: 'Product 2',
    imageUrl: 'https://www.roudstudio.com/images/works/product-photo/img07.jpg',
    price: '10',
  },
  {
    id: 3,
    name: 'Product 3',
    imageUrl: 'https://www.roudstudio.com/images/works/product-photo/img07.jpg',
    price: '10',
  },
  {
    id: 4,
    name: 'Product 4',
    imageUrl: 'https://www.roudstudio.com/images/works/product-photo/img07.jpg',
    price: '10',
  },
  {
    id: 5,
    name: 'Product 5',
    imageUrl: 'https://www.roudstudio.com/images/works/product-photo/img07.jpg',
    price: '10',
  },
  {
    id: 6,
    name: 'Product 6',
    imageUrl: 'https://www.roudstudio.com/images/works/product-photo/img07.jpg',
    price: '10',
  },
];

const theme = createMuiTheme({
  spacing: 10,
});

const useStyle = makeStyles({
  margin: {
    margin: theme.spacing(2),
  },
});

const ProductList = () => {
  const classes = useStyle();
  return (
    <div className={classes.margin}>
      <Grid container spacing={2}>
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </Grid>
    </div>
  );
};

export default ProductList;
