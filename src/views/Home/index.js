import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addToCart, getCatalog} from "../../redux/actions";

const Home = () => {
  const dispatch = useDispatch()
  const catalog = useSelector(store => store.catalog)

  useEffect(() => {
    dispatch(getCatalog())
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
            <button onClick={() => dispatch(addToCart(product))}>В корзину</button>
          </div>
          )
        }
      </div>
    </div>
  );
};

export default Home;