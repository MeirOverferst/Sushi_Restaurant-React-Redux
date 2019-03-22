import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { burgersInfo } from '../config/soupsInfo';
import { connect } from 'react-redux';
import { burgerChange, burgerIncrement, addBurgerToOrder ,burgerDecrement } from '../redux/redux';
import '../style/innerNav.css';

class Burgers extends Component {
  render() {
    return (
      <>
      <div className="cl-effect-inner ">
      <NavLink  className=" nav-ItemInner " to="/menu/salads"><span data-hover="Salads">Salads</span></NavLink>
      <NavLink  className=" nav-ItemInner " to="/menu/pizzas"><span data-hover="Boxes">Boxes</span></NavLink>
    </div>
      <div className= "d-sm-flex flex-wrap">
        {burgersInfo.map((burger, index) => {
            return (
              <div className="container col-3" key={index}>
                <h4 className="title" >{burger.productName}</h4>
                <img className="card-img-top img-fluid " src={burger.productImg} />
                <button className="col-4" onClick={this.props.decrement}  identity={index}>-</button>
                <input className="col-4" type="text" onChange={this.props.changeValue} identity={index} value={this.props['value'+ index]}/>
                <button className="col-4" onClick={this.props.increment} identity={index}>+</button>
                <br />
                <div className="mt-3">
                <button bbuttoncounter={index} burgertype={burger.productName} price={burger.price} className="btn btn-success" onClick={this.props.addToOrder}>Add to Order</button><span><strong>&nbsp;{burger.price}$</strong></span>
                </div>
                <hr />
              </div>
            )
          })
        }
        </div>
        <NavLink to="/menu">Back to Menu</NavLink>
      </>
    )
  }
}


const mapStateToProps = state => {
  return {
    value0: state.values[0],
   value1: state.values[1],
    value2: state.values[2],
    value3: state.values[3]
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeValue: ev => dispatch(burgerChange(ev)),
    increment: ev => dispatch(burgerIncrement(ev)),
    decrement: ev => dispatch(burgerDecrement(ev)),
    addToOrder: ev => dispatch(addBurgerToOrder(ev))
  }
}

export const BurgerContainer = connect(mapStateToProps, mapDispatchToProps)(Burgers)