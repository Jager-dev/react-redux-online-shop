import {ADD_TO_CART, DEC_QUANTITY, GET_CATALOG, REMOVE_FROM_CART} from "../constants";

const initialState = {
  catalog: [],
  cart: []
}

export const index = (state = initialState, action) => {
  switch (action.type){
    case GET_CATALOG:
      return {...state, catalog: action.payload}
    case DEC_QUANTITY:
      if (state.cart[action.payload].quantity > 1){
        return {...state, cart: state.cart.map((item, idx) => idx === action.payload ? {...item, quantity: item.quantity - 1} : item)}
      }
      return state
    case ADD_TO_CART:
      const findProduct = state.cart.find(item => item.id === action.payload.id)
      const addItem = state.cart.map(el => el.id === action.payload.id ? {...el, quantity: el.quantity + 1} : el)
      if (findProduct){
        return {...state, cart: addItem}
      }
      return {...state, cart: [...state.cart, {...action.payload, quantity: 1}]}
    case REMOVE_FROM_CART:
      return {...state, cart: state.cart.filter(item => item.id !== action.payload)}
    default:
      return state
  }
}