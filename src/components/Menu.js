import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import {BoxesContainer} from './boxes';
import {SoupsContainer} from './Soups';
import {SaladContainer} from './Salads';
import '../style/menu.css';

class ProductPage extends Component {
  render() {
    return(
      <div className="menu-body"> 
      <h2 className="menu-head">MENU</h2>
      <div className="cl-effect-menu menubox">
        <NavLink className=" nav-Itemmenu " to="/menu/boxes"><span data-hover="Boxes">Boxes</span></NavLink>
        <NavLink className="  nav-Itemmenu "  to="/menu/soups"><span data-hover="Soups">Soups</span></NavLink>
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
        <Route path="/menu/boxes" component={BoxesContainer} />
        <Route path="/menu/soups" component={SoupsContainer}/>
        <Route path="/menu/salads" component={SaladContainer}/>
      </>
    )
  }
}
