import React, { useContext, useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
} from '@material-ui/core';
import {
  Storefront as StoreIcon,
  ShoppingCart as CartIcon,
} from '@material-ui/icons';
import { useHistory } from 'react-router-dom';

import { CartContext } from '../../Context/CartContext';
import useStyles from './HeaderStyles';

const Header = () => {
  const [itemCount, setItemCount] = useState(0);
  const classes = useStyles();
  const history = useHistory();
  const cartContext = useContext(CartContext);

  // updating itemCount state
  useEffect(() => {
    let itemCount = 0;
    cartContext.cart.forEach((item) => {
      itemCount += item.quantity;
    });
    setItemCount(itemCount);
  }, [cartContext.cart]);

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          onClick={() => history.push('/')}
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <StoreIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          YourCart
        </Typography>

        <IconButton color="inherit" onClick={() => history.push('/cart')}>
          <Badge badgeContent={itemCount} color="secondary" showZero>
            <CartIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
