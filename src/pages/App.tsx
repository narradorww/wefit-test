import React from "react";
import List from "../components/List";
import Header from "../components/Header";
import EmptyCart from "../components/EmptyCart/index";
import Sucess from "../components/Sucess/index";
import Cart from '../components/Cart/index';

function App() {
  return (
    <div className="App">
      <Header />
      <List />
      <Cart />
    </div>
  );
}

export default App;
