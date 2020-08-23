import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  createMuiTheme,
} from '@material-ui/core';
import {
  Storefront as StoreIcon,
  ShoppingCart as CartIcon,
} from '@material-ui/icons';
import { useHistory } from 'react-router-dom';

const theme = createMuiTheme({
  spacing: 10,
});

const useStyles = makeStyles(() => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = () => {
  const classes = useStyles();
  const history = useHistory();

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
          <Badge badgeContent="2" color="secondary" showZero>
            <CartIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
