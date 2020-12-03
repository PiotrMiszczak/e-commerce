import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Hedaer from './components/Header'
import Main from './views/Main'
import ProductPage from './views/ProductPage'
import CartPage from './views/CartPage'
import SinginPage from './views/SigninPage'
import RegisterPage from './views/RegisterPage'
import ProductAddPage from './views/ProductAddPage'


function App() {
  return (
    <Router>
    <div className="grid-container">
    <Hedaer />
    <Switch>
      <Route exact path='/'>
      <Main />
    </Route>
    <Route path='/signin'>
      <SinginPage />
    </Route>
    <Route exact path='/products'>
      <ProductAddPage />
    </Route>
    <Route path='/register'>
      <RegisterPage />
    </Route>
    <Route path='/products/:id'>
    <ProductPage />
    </Route>
    <Route path='/cart/:id?'>
    <CartPage />
    </Route>
    </Switch>
    <footer>Rigths reserved</footer>
    </div>
    </Router>
  );
}

export default App;
