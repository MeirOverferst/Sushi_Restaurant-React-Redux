import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { boxesInfo } from '../config/boxesInfo';
import { connect } from 'react-redux';
import {boxChange, boxIncrement, addBoxToOrder,boxDecrement } from '../redux/redux';
import '../style/innerNav.css';
class Boxes extends Component {

  
  render() {
    return (
      <>
      <div className="cl-effect-inner ">
      <NavLink  className=" nav-ItemInner " to="/menu/soups"><span data-hover="Soups">Soups</span></NavLink>
      <NavLink  className=" nav-ItemInner " to="/menu/salads"><span data-hover="Salads">Salads</span></NavLink>
    </div>
      <div className= "d-sm-flex flex-wrap">

        {boxesInfo.map((box, index) => {
            return (
              <div className="container col-4" key={index}>
                <h4 className="title">{box.productName}</h4>
                <img className="card-img-top img-fluid max-width:30% " alt="box.productName" src={box.productImg} />
                <button className="col-3" onClick={this.props.decrement}  identity={index}>-</button>
                <input className="col-3" type="text"  onChange={this.props.changeValue}  identity={index} value={this.props['Value'+ index]}/>
                <button className="col-3" onClick={this.props.increment} identity={index}>+</button>
                <br />
                <div className="mt-3">
                  <button buttoncounter={index} boxtype={box.productName} price={box.price} className="btn btn-success" onClick={this.props.addToOrder}>Add to Order</button><span><strong>&nbsp;{box.price}$</strong></span>
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
    Value0: state.values[0],
    Value1: state.values[1],
    Value2: state.values[2],
    Value3: state.values[3],
    Value4: state.values[4],
    Value5: state.values[5],
    Value6: state.values[6],
    Value7: state.values[7],
    Value8: state.values[8],
    Value9: state.values[9],
    Value10: state.values[10],
    Value11: state.values[11],
    Value12: state.values[12],
    Value13: state.values[13],
    Value14: state.values[14],
    Value15: state.values[15],
    Value16: state.values[16],
    Value17: state.values[17],
    Value18: state.values[18],
    Value19: state.values[19],
    Value20: state.values[20],
    Value21: state.values[21],
    Value22: state.values[22],
    Value23: state.values[23]
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeValue: ev => dispatch(boxChange(ev)),
    increment: ev => dispatch(boxIncrement(ev)),
    addToOrder: ev => dispatch(addBoxToOrder(ev)),
    decrement: ev => dispatch(boxDecrement(ev))
  }
}

export const BoxesContainer = connect(mapStateToProps, mapDispatchToProps)(Boxes)

