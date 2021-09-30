import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

const Home = () => {
  const data = [
    {
      "id": 1,
      "title": "Mushroom - Chanterelle, Dry",
      "price": "4.32",
      "description": "Traumatic subcutaneous emphysema, initial encounter",
      "amount": 1,
      "images": "http://dummyimage.com/235x100.png/cc0000/ffffff"
    },
    {
      "id": 2,
      "title": "Soup - Campbells, Creamy",
      "price": "1.13",
      "description": "Hemiplegia, unspecified affecting left dominant side",
      "amount": 2,
      "images": "http://dummyimage.com/222x100.png/5fa2dd/ffffff"
    },
    {
      "id": 3,
      "title": "Beer - Maudite",
      "price": "9.42",
      "description": "Obstructed labor due to malpos and malpresent, unsp, fetus 2",
      "amount": 3,
      "images": "http://dummyimage.com/173x100.png/ff4444/ffffff"
    }
  ]
  const dispatch = useDispatch()
  const catalog = useSelector(store => store.catalog)

  useEffect(() => {
    dispatch({type: "GET_CATALOG", payload: data})
  }, [dispatch])

  return (
    <div className="container">
      <div className="row">
        {
          catalog.map(product =>
          <div className="col-md-3 mb-4" key={product.id}>
            <img src={product.images} alt="" className="w-100 h-50"/>
            <h5>{product.title}</h5>
            <p>{product.price}</p>
            <button onClick={() => dispatch({type: "ADD_TO_CART", payload: product})}>В корзину</button>
          </div>
          )
        }
      </div>
    </div>
  );
};

export default Home;