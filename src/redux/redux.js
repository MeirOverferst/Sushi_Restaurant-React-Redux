import { createStore } from 'redux';

 const initialState = {
  values: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  basket: [],
}

const reducer = (state = initialState, action) => {
  const updatedState = {...state};

  switch(action.type) {
    case 'changePizzaValue':
    const pizzaInputIdentity = action.event.target.getAttribute('identity');
    updatedState.values[pizzaInputIdentity] = action.event.target.value;
    console.log(updatedState.basket);
    return updatedState;
    case 'pizzaIncrement':
    const buttonIncIdentityPizza = action.event.target.getAttribute('identity');
    updatedState.values[buttonIncIdentityPizza] = parseInt(state.values[buttonIncIdentityPizza]) + 1
    console.log(updatedState.basket);
    return updatedState;
    case 'pizzaDecrement':
    const buttonDecIdentityPizza = action.event.target.getAttribute('identity');
    updatedState.values[buttonDecIdentityPizza] = parseInt(state.values[buttonDecIdentityPizza]) - 1
    if(state.values[buttonDecIdentityPizza] < 1){
      state.values[buttonDecIdentityPizza] = 1;}
    return updatedState;
    case 'addPizza':
    let pproduct = action.event.target.getAttribute('pizzatype');
    let pprice = parseFloat(action.event.target.getAttribute('price'));
    let pbuttonIdentifier = parseInt(action.event.target.getAttribute('buttoncounter'));
    const pizzaFound = updatedState.basket.find(item => item.product === pproduct); 
    if (pizzaFound) {
    pizzaFound.quantity = parseInt(updatedState.values[pbuttonIdentifier]);
    } else {
        const pizzaObject = {product: pproduct, price: pprice, quantity: parseInt(updatedState.values[pbuttonIdentifier])};
        updatedState.basket = [...state.basket, pizzaObject];
        state.values[pbuttonIdentifier] = 1; 
      }
      if(state.values[pbuttonIdentifier]> 1 ){
        state.values[pbuttonIdentifier] = 1; 
      }
      console.log(updatedState.basket);
      return updatedState;
      case 'changeBurgerValue':
      const burgerInputIdentity = action.event.target.getAttribute('identity');
      updatedState.values[burgerInputIdentity] = action.event.target.value;
      return updatedState;
    case 'burgerIncrement':
      const buttonIncIdentityBurger = action.event.target.getAttribute('identity');
      updatedState.values[buttonIncIdentityBurger] = parseInt(state.values[buttonIncIdentityBurger]) + 1
      return updatedState;
      case 'burgerDecrement':
      const buttonDecIdentityBurger = action.event.target.getAttribute('identity');
      updatedState.values[buttonDecIdentityBurger] = parseInt(state.values[buttonDecIdentityBurger]) - 1
      if(state.values[buttonDecIdentityBurger] <1){
        state.values[buttonDecIdentityBurger] = 1;}
        return updatedState;
    case 'addBurger':
      let bproduct = action.event.target.getAttribute('burgertype');
      let bprice = parseFloat(action.event.target.getAttribute('price'));
      let bbuttonIdentifier = parseInt(action.event.target.getAttribute('bbuttoncounter'));
      const burgerFound = updatedState.basket.find(item => item.product === bproduct); 

      if (burgerFound) {
        burgerFound.quantity = parseInt(updatedState.values[bbuttonIdentifier]);
      } else {
       
        const burgerObject = {product: bproduct, price: bprice, quantity: parseInt(updatedState.values[bbuttonIdentifier])};
        updatedState.basket = [...state.basket, burgerObject];
        state.values[bbuttonIdentifier] = 1;
      }
      if(state.values[bbuttonIdentifier]> 1 ){
        state.values[bbuttonIdentifier] = 1; 
      }
     
    //   console.log(updatedState.basket);
      return updatedState;
      //salats
      case 'changeSaladValue':
      const saladInputIdentity = action.event.target.getAttribute('identity');
      updatedState.values[saladInputIdentity] = action.event.target.value;
      return updatedState;
      case 'saladIncrement':
      const buttonIncIdentitySalad = action.event.target.getAttribute('identity');
      updatedState.values[buttonIncIdentitySalad] = parseInt(state.values[buttonIncIdentitySalad]) + 1
      return updatedState;
      case 'saladDecrement':
      const buttonDecIdentitySalad = action.event.target.getAttribute('identity');
      updatedState.values[buttonDecIdentitySalad] = parseInt(state.values[buttonDecIdentitySalad]) - 1
      if(state.values[buttonDecIdentitySalad]< 1){
        state.values[buttonDecIdentitySalad] = 1;
      }
      return updatedState;
      case 'addSalad':
      let sproduct = action.event.target.getAttribute('saladtype');
      let sprice = parseFloat(action.event.target.getAttribute('price'));
      let sbuttonIdentifier = parseInt(action.event.target.getAttribute('buttoncounter'));
      const saladFound = updatedState.basket.find(item => item.product === sproduct); 
      if (saladFound) {
        saladFound.quantity = parseInt(updatedState.values[sbuttonIdentifier]);
      } else {
        
        const saladObject = {product: sproduct, price: sprice, quantity: parseInt(updatedState.values[sbuttonIdentifier])};
        updatedState.basket = [...state.basket, saladObject];
        state.values[sbuttonIdentifier] = 1;
      }
      if(state.values[sbuttonIdentifier]> 1 ){
        state.values[sbuttonIdentifier] = 1; 
      }
      console.log(state.basket);
      return updatedState;
      case 'CLEAR_ORDER':
      updatedState.basket = [];
      return updatedState;
    default:
      return state;
  }
}


export let stat=initialState.basket

export const change = ev => {
  return { 
      type: 'changePizzaValue',
      event: ev
}
}

export const increment = ev => {
  return { 
      type: 'pizzaIncrement',
      event: ev
}
}

export const decrement = ev => {
    return { 
        type: 'pizzaDecrement',
        event: ev
    }
  }

export const addToOrder = ev => {
  return { 
      type: 'addPizza',
      event: ev
}
}

export const burgerChange = ev => {
  return { 
      type: 'changeBurgerValue',
      event: ev
}
}

export const burgerIncrement = ev => {
  return { 
      type: 'burgerIncrement',
      event: ev
}
}
export const burgerDecrement = ev => {
  return { 
      type: 'burgerDecrement',
      event: ev
  }
}

export const addBurgerToOrder = ev => {
  return { 
      type: 'addBurger',
      event: ev
}
}

export const saladChange = ev => {
    return { 
        type: 'changeSaladValue',
        event: ev
    }
}
  
export const saladIncrement = ev => {
    return { 
        type: 'saladIncrement',
        event: ev
    }
}
export const saladDecrement = ev => {
  return { 
      type: 'saladDecrement',
      event: ev
  }
}
  
export const addSaladToOrder = ev => {
   return { 
       type: 'addSalad',
       event: ev
}
}
export const clearOrder = ev => {
  return { 
      type: 'CLEAR_ORDER',
      event: ev
}
}



export const store = createStore(reducer);