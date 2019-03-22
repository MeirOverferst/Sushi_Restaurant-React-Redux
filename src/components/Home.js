import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import introImg from "../images/Copy white of Sushi Pinterest Image Template - Made with PosterMyWall (3).jpg";
import '../style/home.css'

export default class Home extends Component {
  render() {
    return (
      <>
      <div className="homeWrpr">
      <img className="introImg" src={introImg}  />
      <div className="cl-effect-5 centeral">
      <NavLink  className=" nav-Item navlink centeral" to="/menu"><span data-hover="menu">menu</span></NavLink>
      </div>
        </div>
      </>
    )
  }
}
