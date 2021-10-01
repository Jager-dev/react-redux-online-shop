import {createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";


const initialState = {
  catalog: [],
  cart: []
}

const reducer = (state = initialState, action) => {
  switch (action.type){
    case "GET_CATALOG":
      return {...state, catalog: action.payload}
    case "DEC_ITEM_FROM_CART":
      const findItem = state.cart.find(item => item.id === action.payload.id)
      const delItem = state.cart.map(el => el.id === action.payload.id ? {...el, quantity: el.quantity - 1, total_price: el.quantity > 1 ? el.total_price - +el.price : el.total_price} : el)
      if (findItem){
        return {...state, cart: delItem}
      }
      return {...state, cart: [...state.cart, {...action.payload, quantity: 0}]}
    case "ADD_TO_CART":
      const findProduct = state.cart.find(item => item.id === action.payload.id)
      const addItem = state.cart.map(el => el.id === action.payload.id ? {...el, quantity: el.quantity + 1, total_price: el.quantity > 0 ? +el.total_price + +el.price : el.total_price} : el)
      if (findProduct){
        return {...state, cart: addItem}
      }
      return {...state, cart: [...state.cart, {...action.payload, quantity: 1}]}
    case "REMOVE_FROM_CART":
      return {...state, cart: state.cart.filter(item => item.id !== action.payload)}
    case "ALL_CARTS_SUM":
      return {...state, cart: state.cart.map(el => el.total_price + el.total_price)}
    default:
      return state
  }
}
export const store =  createStore(reducer, composeWithDevTools())