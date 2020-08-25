import React, { useContext, useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  IconButton,
  Container,
  Button,
  Grow,
} from '@material-ui/core';
import {
  Add as AddIcon,
  Remove as RemoveIcon,
  ShoppingCart,
  Clear as ClearIcon,
} from '@material-ui/icons';

import { CartContext } from '../../Context/CartContext';
import { useHistory } from 'react-router-dom';
import useStyles from './CartStyles';

const Cart = () => {
  const [deliveryCharge, setDeliveryCharge] = useState(10);
  const classes = useStyles();
  const cartContext = useContext(CartContext);
  const history = useHistory();

  useEffect(() => {
    if (+cartContext.totalPrice >= 50) {
      setDeliveryCharge(5);
    } else {
      setDeliveryCharge(10);
    }
  }, [cartContext.totalPrice]);

  let content = (
    <Container className={classes.emptyContainer}>
      <ShoppingCart className={classes.shoppingCartIcon} />
      <Typography variant="h6">Empty Cart!</Typography>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => history.push('/')}
      >
        Add Some Products
      </Button>
    </Container>
  );

  if (cartContext.cart.length > 0) {
    content = (
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={3}>
              Details
            </TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Product Name</TableCell>
            <TableCell align="right">Qty.</TableCell>
            <TableCell align="right">Unit Price</TableCell>
            <TableCell align="right">Sum</TableCell>
            <TableCell align="right">Clear</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cartContext.cart.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.name}</TableCell>
              <TableCell align="right">
                <IconButton
                  color="secondary"
                  onClick={() => cartContext.removeFromCart(item.id)}
                >
                  <RemoveIcon />
                </IconButton>
                {item.quantity}
                <IconButton
                  color="primary"
                  onClick={() => cartContext.addToCart(item)}
                >
                  <AddIcon />
                </IconButton>
              </TableCell>
              <TableCell align="right">${item.price}</TableCell>
              <TableCell align="right">${item.total} </TableCell>
              <TableCell align="right">
                <Button
                  color="secondary"
                  onClick={() => cartContext.removeItemFromCart(item.id)}
                >
                  <ClearIcon />
                </Button>
              </TableCell>
            </TableRow>
          ))}

          <TableRow>
            <TableCell rowSpan={3} />
            <TableCell colSpan={2}>Subtotal</TableCell>
            <TableCell align="right">
              ${cartContext.totalPrice ? cartContext.totalPrice : 0}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2}>
              Delivery Charge{' '}
              {cartContext.totalPrice &&
                +cartContext.totalPrice < 50 &&
                `(add $${(50 - +cartContext.totalPrice).toFixed(
                  2
                )} to save $5)`}
            </TableCell>
            <TableCell align="right">
              ${cartContext.totalPrice ? deliveryCharge : 0}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2}>Total</TableCell>
            <TableCell align="right">
              ${(+cartContext.totalPrice + deliveryCharge).toFixed(2) || 0}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
  }

  return (
    <>
      <Grow in timeout={500}>
        <TableContainer component={Paper} className={classes.tableContainer}>
          {content}
        </TableContainer>
      </Grow>
      {cartContext.cart.length > 0 && (
        <Container className={classes.cartBottom}>
          <Button
            variant="outlined"
            color="primary"
            style={{ marginRight: '20px' }}
            onClick={() => history.push('/')}
          >
            Products
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => cartContext.clearCart()}
          >
            Clear Cart
          </Button>
        </Container>
      )}
    </>
  );
};

export default Cart;
