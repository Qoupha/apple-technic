import React from "react";
import Products from "./components/Products";
import Layout from "./components/Layout";
import Cart from "./components/Cart";
import Registration from "./components/Registration";
import { Routes, Route } from "react-router-dom";


function App() {
  return(
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/registration" element={<Registration />}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App;
