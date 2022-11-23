import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartPage from "./CartPage";
import Home from "./Home";
import EmptyPage from './EmptyCardPage';
import SucessPage from "./SucessPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartPage/>}/>
        <Route path="/empty" element={<EmptyPage />}/>
        <Route path="/sucess" element={<SucessPage/>}/>
        <Route path="*" element={<EmptyPage />} />
      </Routes>
      </BrowserRouter>


      
    </div>
  );
}

export default App;
