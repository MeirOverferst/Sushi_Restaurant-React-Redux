import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { pizzasInfo } from '../config/boxesInfo';
import { connect } from 'react-redux';
import {change, increment, addToOrder,decrement } from '../redux/redux';
import '../style/innerNav.css';
class Pizzas extends Component {

  
  render() {
    return (
      <>
      <div className="cl-effect-inner ">
      <NavLink  className=" nav-ItemInner " to="/menu/burgers"><span data-hover="Soups">Soups</span></NavLink>
      <NavLink  className=" nav-ItemInner " to="/menu/salads"><span data-hover="Salads">Salads</span></NavLink>
    </div>
      <div className= "d-sm-flex flex-wrap">

        {pizzasInfo.map((pizza, index) => {
            return (
              <div className="container col-4" key={index}>
                <h4 className="title">{pizza.productName}</h4>
                <img className="card-img-top img-fluid max-width:30% " src={pizza.productImg} />
                <button className="col-3" onClick={this.props.decrement}  identity={index}>-</button>
                <input className="col-3" type="text"  onChange={this.props.changeValue}  identity={index} value={this.props['pizzaValue'+ index]}/>
                <button className="col-3" onClick={this.props.increment} identity={index}>+</button>
                <br />
                <div className="mt-3">
                  <button buttoncounter={index} pizzatype={pizza.productName} price={pizza.price} className="btn btn-success" onClick={this.props.addToOrder}>Add to Order</button><span><strong>&nbsp;{pizza.price}$</strong></span>
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
    pizzaValue0: state.values[0],
    pizzaValue1: state.values[1],
    pizzaValue2: state.values[2],
    pizzaValue3: state.values[3],
    pizzaValue4: state.values[4],
    pizzaValue5: state.values[5],
    pizzaValue6: state.values[6],
    pizzaValue7: state.values[7],
    pizzaValue8: state.values[8],
    pizzaValue9: state.values[9],
    pizzaValue10: state.values[10],
    pizzaValue11: state.values[11],
    pizzaValue12: state.values[12],
    pizzaValue13: state.values[13],
    pizzaValue14: state.values[14],
    pizzaValue15: state.values[15],
    pizzaValue16: state.values[16],
    pizzaValue17: state.values[17],
    pizzaValue18: state.values[18],
    pizzaValue19: state.values[19],
    pizzaValue20: state.values[20],
    pizzaValue21: state.values[21],
    pizzaValue22: state.values[22],
    pizzaValue23: state.values[23]
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeValue: ev => dispatch(change(ev)),
    increment: ev => dispatch(increment(ev)),
    addToOrder: ev => dispatch(addToOrder(ev)),
    decrement: ev => dispatch(decrement(ev))
  }
}

export const PizzaContainer = connect(mapStateToProps, mapDispatchToProps)(Pizzas)

