import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Home from './components/Home';
import {CartContainer} from './components/Cart';
import Menu from './components/Menu';
import Confirm from './components/Confirm';
import './style/navBar.css';
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <div className="blabla  cl-effect-5 ">
              <NavLink  className=" nav-Item navlink" to="/"><span data-hover="Home">Home</span></NavLink>
              <NavLink className=" nav-Item navlink" to="/cart"><span data-hover="Cart">Cart</span></NavLink>
          </div>
          <div >
            <Route path="/" exact component={Home} />
            <Route path="/cart" component={CartContainer}/>
            <Route path="/menu" component={Menu}/>
            <Route path="/confirmation" component={Confirm} />
          </div>
        </>
      </BrowserRouter>
    );
  }
}
