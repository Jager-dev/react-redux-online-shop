import React from 'react';
import {useDispatch, useSelector} from "react-redux";

const Cart = () => {
  const cart = useSelector(store => store.cart)
  const dispatch = useDispatch()

  return (
    <div>
      {
        cart.length ? <table className="table table-secondary">
            <thead>
            <th>Название продукта</th>
            <th>Количество</th>
            <th>Цена</th>
            <th>Удалить</th>
            </thead>
            <tbody>
            {
              cart.map(item =>
                <tr>
                  <td>{item.title}</td>
                  <td>
                    <button onClick={() => dispatch({type: "DEC_ITEM_FROM_CART", payload: item})}>-</button>
                    {item.quantity}
                    <button onClick={() => dispatch({type: "ADD_TO_CART", payload: item})}>+</button>
                  </td>
                  <td>{item.price}</td>
                  <td>
                    <button onClick={() => dispatch({type: "REMOVE_FROM_CART", payload: item.id})}>x</button>
                  </td>
                </tr>
              )
            }
            </tbody>
          </table> :
          <h3>Корзтна пуста</h3>
      }
    </div>
  );
};

export default Cart;