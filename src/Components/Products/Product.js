import React from 'react';
import {
  Grid,
  Card,
  Typography,
  Grow,
  CardContent,
  CardActions,
  CardMedia,
  Button,
} from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

import useStyle from './ProductStyles';

const Product = ({ product, addToCartHandler }) => {
  const classes = useStyle();

  return (
    <Grow in timeout={500}>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card>
          <CardMedia
            className={classes.image}
            image={product.imageUrl}
            title={product.name}
          />
          <CardContent className={classes.cardContent}>
            <Typography variant="h6" color="textPrimary">
              {product.name}
            </Typography>
            <Typography variant="h6" color="textSecondary" component="p">
              ${product.price}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              color="secondary"
              variant="outlined"
              startIcon={<AddShoppingCart />}
              fullWidth
              onClick={() => addToCartHandler(product)}
            >
              Add to cart
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grow>
  );
};

export default Product;
