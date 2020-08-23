import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { CircularProgress } from '@material-ui/core';

// import components
import Header from './Components/Header/Header';
import ProductList from './Components/Products/ProductList';

// Lazy import
const Cart = React.lazy(() => import('./Components/Cart/Cart'));

const App = () => {
  return (
    <Router>
      <header>
        <Header />
      </header>
      <main>
        <Suspense fallback={<CircularProgress />}>
          <Switch>
            <Route path="/" exact>
              <ProductList />
            </Route>
            <Route path="/cart" exact>
              <Cart />
            </Route>
            <Redirect to="/" />
          </Switch>
        </Suspense>
      </main>
    </Router>
  );
};

export default App;
