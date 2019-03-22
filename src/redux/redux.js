import { createStore } from 'redux';

 const initialState = {
  values: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  basket: [],
}

const reducer = (state = initialState, action) => {
  const updatedState = {...state};

  switch(action.type) {
    case 'changeBoxValue':
    const boxInputIdentity = action.event.target.getAttribute('identity');
    updatedState.values[boxInputIdentity] = action.event.target.value;
    console.log(updatedState.basket);
    return updatedState;
    case 'boxIncrement':
    const buttonIncIdentityBox = action.event.target.getAttribute('identity');
    updatedState.values[buttonIncIdentityBox] = parseInt(state.values[buttonIncIdentityBox]) + 1
    console.log(updatedState.basket);
    return updatedState;
    case 'boxDecrement':
    const buttonDecIdentityBox = action.event.target.getAttribute('identity');
    updatedState.values[buttonDecIdentityBox] = parseInt(state.values[buttonDecIdentityBox]) - 1
    if(state.values[buttonDecIdentityBox] < 1){
      state.values[buttonDecIdentityBox] = 1;}
    return updatedState;
    case 'addBox':
    let bproduct = action.event.target.getAttribute('boxtype');
    let bprice = parseFloat(action.event.target.getAttribute('price'));
    let bbuttonIdentifier = parseInt(action.event.target.getAttribute('buttoncounter'));
    const boxFound = updatedState.basket.find(item => item.product === bproduct); 
    if (boxFound) {
    boxFound.quantity = parseInt(updatedState.values[bbuttonIdentifier]);
    } else {
        const boxObject = {product: bproduct, price: bprice, quantity: parseInt(updatedState.values[bbuttonIdentifier])};
        updatedState.basket = [...state.basket, boxObject];
        state.values[bbuttonIdentifier] = 1; 
      }
      if(state.values[bbuttonIdentifier]> 1 ){
        state.values[bbuttonIdentifier] = 1; 
      }
      console.log(updatedState.basket);
      return updatedState;
      case 'changeSoupValue':
      const soupInputIdentity = action.event.target.getAttribute('identity');
      updatedState.values[soupInputIdentity] = action.event.target.value;
      return updatedState;
    case 'soupIncrement':
      const buttonIncIdentitySoup = action.event.target.getAttribute('identity');
      updatedState.values[buttonIncIdentitySoup] = parseInt(state.values[buttonIncIdentitySoup]) + 1
      return updatedState;
      case 'soupDecrement':
      const buttonDecIdentitySoup = action.event.target.getAttribute('identity');
      updatedState.values[buttonDecIdentitySoup] = parseInt(state.values[buttonDecIdentitySoup]) - 1
      if(state.values[buttonDecIdentitySoup] <1){
        state.values[buttonDecIdentitySoup] = 1;}
        return updatedState;
    case 'addSoup':
      let soproduct = action.event.target.getAttribute('souptype');
      let soprice = parseFloat(action.event.target.getAttribute('price'));
      let sobuttonIdentifier = parseInt(action.event.target.getAttribute('bbuttoncounter'));
      const soupFound = updatedState.basket.find(item => item.product === soproduct); 

      if (soupFound) {
        soupFound.quantity = parseInt(updatedState.values[sobuttonIdentifier]);
      } else {
       
        const soupObject = {product: soproduct, price: soprice, quantity: parseInt(updatedState.values[sobuttonIdentifier])};
        updatedState.basket = [...state.basket, soupObject];
        state.values[sobuttonIdentifier] = 1;
      }
      if(state.values[sobuttonIdentifier]> 1 ){
        state.values[sobuttonIdentifier] = 1; 
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

export const boxChange = ev => {
  return { 
      type: 'changeBoxValue',
      event: ev
}
}

export const boxIncrement = ev => {
  return { 
      type: 'boxIncrement',
      event: ev
}
}

export const boxDecrement = ev => {
    return { 
        type: 'boxDecrement',
        event: ev
    }
  }

export const addBoxToOrder = ev => {
  return { 
      type: 'addBox',
      event: ev
}
}

export const soupChange = ev => {
  return { 
      type: 'changeSoupValue',
      event: ev
}
}

export const soupIncrement = ev => {
  return { 
      type: 'soupIncrement',
      event: ev
}
}
export const soupDecrement = ev => {
  return { 
      type: 'soupDecrement',
      event: ev
  }
}

export const addSoupToOrder = ev => {
  return { 
      type: 'addSoup',
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