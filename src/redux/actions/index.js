import {ADD_TO_CART, DEC_QUANTITY, GET_CATALOG, REMOVE_FROM_CART} from "../constants";
import axios from "axios";

export const addToCart = (product) => {
  return {type: ADD_TO_CART, payload: product}
}

export const getCatalog = () => {
  return (dispatch) => {
    axios("https://6115f1058f38520017a38640.mockapi.io/catalog")
      .then(({data}) => {
        return dispatch({type: GET_CATALOG, payload: data})
      })
  }
}

export const decQuantity = (idx) => {
  return {type: DEC_QUANTITY, payload: idx}
}

export const delItem = (id) => {
  return {type: REMOVE_FROM_CART, payload: id}
}