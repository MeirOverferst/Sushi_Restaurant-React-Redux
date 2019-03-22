import React, { Component } from 'react';
import { connect } from 'react-redux';
import {clearOrder} from '../redux/redux';
import { NavLink } from 'react-router-dom';


 class Cart extends Component {
    sum(){
        return this.props.hazmana.reduce((a,b) => a + b.quantity * b.price, 0);
     }

    render(){
        return(
          <>
          <div className="jumbotron">
          {this.props.hazmana.map((item, index) => {
  
                  return(
                      <>
                    <div  key={index} className="bg-white d-flex flex-column py-0 my-3">
                       <div  className="d-flex justify-content-between align-items-center py-0 my-0">
                          <ul className="ml-1 d-flex flex-column">
                             <li className="ml-3">{item.quantity} X {item.product} --{item.price} $</li>
                          </ul>
                       </div>
                    </div>
                     </>
                  )
               })
               }
          
          </div>
          <h1>Sum : {this.sum().toFixed(1)} $ </h1>
          <NavLink onClick={this.props.clrOrder} to="/confirmation">Submit Order</NavLink>
         
          </>
        )
    }
}
// className="btn btn-primary btn-lg" 

const mapStateToProps = state => {
    return{
       hazmana: state.basket,
      
    }
 }
 const mapStateToDispatch = dispatch => {
   return{
     clrOrder: () => dispatch(clearOrder()),
   }
}

 export const CartContainer =  connect(mapStateToProps, mapStateToDispatch)(Cart);
