import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addToCart, decQuantity, delItem} from "../../redux/actions";
import {Button, Table} from "react-bootstrap";

const Cart = () => {
  const cart = useSelector(store => store.cart)
  const dispatch = useDispatch()

  return (
    <div>
      {
        cart.length ? <Table responsive>
            <thead className="thead">
            <th>Название продукта</th>
            <th>Количество</th>
            <th>Цена</th>
            <th>Сумма</th>
            <th>Удалить</th>
            </thead>
            <tbody>
            {
              cart.map((item, idx) =>
                <tr>
                  <td>{item.title}</td>
                  <td>
                    <Button variant="outline-warning" onClick={() => dispatch(decQuantity(idx))} className="me-2"> - </Button>
                    {item.quantity}
                    <Button variant="outline-primary" onClick={() => dispatch(addToCart(item))} className="ms-2"> + </Button>
                  </td>
                  <td>{item.price}</td>
                  <td>{(item.price * item.quantity).toFixed(2)}</td>
                    <td>
                      <Button variant="danger" onClick={() => dispatch(delItem(item.id))}>Удалить</Button>
                  </td>
                </tr>
              )
            }
            </tbody>
            <div>Итого:
              {
                cart.reduce((acc, item) => {
                    return (item.price * item.quantity) + acc
                  }, 0
                ).toFixed(2)
              }
            </div>
          </Table> :
          <h3>Корзина пуста</h3>
      }
    </div>
  );
}

export default Cart;