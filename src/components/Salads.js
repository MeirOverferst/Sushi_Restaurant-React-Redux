import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { saladsInfo } from '../config/saladsInfo';
import { connect } from 'react-redux';
import { saladChange, saladIncrement, addSaladToOrder,saladDecrement } from '../redux/redux';
import '../style/innerNav.css';

class Salads extends Component {
  render() {
    return (
      <>
      <div className="cl-effect-inner ">
      <NavLink  className=" nav-ItemInner " to="/menu/burgers"><span data-hover="Soups">Soups</span></NavLink>
      <NavLink  className=" nav-ItemInner " to="/menu/pizzas"><span data-hover="Boxes">Boxes</span></NavLink>
    </div>
      <div className= "d-sm-flex flex-wrap">
        {saladsInfo.map((salad, index) => {
            return (
              <div className="container col-3" key={index}>
                <h4 className="title" >{salad.productName}</h4>
                <img className="card-img-top img-fluid " src={salad.productImg} />
                <button className="col-4" onClick={this.props.decrement}  identity={index}>-</button>
                <input className="col-4" type="text" onChange={this.props.changeValue} identity={index} value={this.props['value'+ index]}/>
                <button className="col-4" onClick={this.props.increment} identity={index}>+</button>
                <br />
                <div className="mt-3">
                <button buttoncounter={index} saladtype={salad.productName} price={salad.price} className="btn btn-success" onClick={this.props.addToOrder}>Add to Order</button><span><strong>&nbsp;{salad.price}$</strong></span>
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
   value3: state.values[3],
   value4: state.values[4],
   value5: state.values[5]
  
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeValue: ev => dispatch(saladChange(ev)),
    increment: ev => dispatch(saladIncrement(ev)),
    addToOrder: ev => dispatch(addSaladToOrder(ev)),
    decrement: ev => dispatch(saladDecrement(ev))
  }
}

export const SaladContainer = connect(mapStateToProps, mapDispatchToProps)(Salads)