import React from 'react';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const Header = () => {
  const cart = useSelector(store => store.cart)

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Online Shop</a>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">Cart({cart.length})</Link>
            </li>
          </ul>
       </div>
    </nav>
  );
};

export default Header;