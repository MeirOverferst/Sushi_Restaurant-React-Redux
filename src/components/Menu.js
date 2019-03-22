import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import {PizzaContainer} from './Pizzas';
import {BurgerContainer} from './Burgers';
import {SaladContainer} from './Salads';
import '../style/menu.css';

class ProductPage extends Component {
  render() {
    return(
      <div className="menu-body"> 
      <h2 className="menu-head">MENU</h2>
      <div className="cl-effect-menu menubox">
        <NavLink className=" nav-Itemmenu " to="/menu/pizzas"><span data-hover="Boxes">Boxes</span></NavLink>
        <NavLink className="  nav-Itemmenu "  to="/menu/burgers"><span data-hover="Soups">Soups</span></NavLink>
        <NavLink className=" nav-Itemmenu  " to="/menu/salads"><span data-hover="Salads">Salads</span></NavLink>
        <NavLink className=" nav-Itemmenu  " to="/menu/salads"><span data-hover="Drinks">Drinks</span></NavLink>
        <NavLink className=" nav-Itemmenu  " to="/menu/salads"><span data-hover="Deserts">Deserts</span></NavLink>
    </div>
      </div>
      );
  }
}

export default class Menu extends Component {
  render() {
    return (
      <>
        <Route path="/menu" exact component={ProductPage} />
        <Route path="/menu/pizzas" component={PizzaContainer} />
        <Route path="/menu/burgers" component={BurgerContainer}/>
        <Route path="/menu/salads" component={SaladContainer}/>
      </>
    )
  }
}
