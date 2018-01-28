import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from '../containers/Home'
import Navigation from './Navbar'
import Footer from './Footer'
import Polls from '../containers/Polls'
import Product from '../containers/Product'
import Cart from '../containers/Cart'
import Products from '../containers/Products'
import Category from '../containers/Category'
import Login from '../components/Login'
import Checkout from '../containers/Checkout'

const App = () => (
  <div className="wrapper-wide">
    <Navigation />

    <main>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} /> 
      </Switch>
    </main>

    <Footer />

  </div>
)

module.exports = App
