import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {index} from "./reducer";
import thunk from "redux-thunk";


export const store =  createStore(index, composeWithDevTools(applyMiddleware(thunk)))