import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom"
import Home from "./views/Home";
import Cart from "./views/Cart";
import Header from "./components/Header";

const App = () => {
  return (
    <Router>
      <Header />
      <Route exact path="/"><Home /></Route>
      <Route path="/cart"><Cart /></Route>
    </Router>
  );
};

export default App;