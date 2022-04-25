import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/HomePage";
import { Provider } from "react-redux";
import store from "./redux/store";
import Cart from "./Components/Cart";
import Product from "./Components/Product";
import App from "./App";
import Love from "./Components/Love";
import Signin from "./Components/Signin";
import Signup from "./Components/signup";
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <Provider store={store}>
            <App />
          </Provider>
        }
      >
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="product" element={<Product />}>
          <Route
            index
            element={
              <main style={{ padding: "1rem" }}>
                <p>Select an invoice</p>
              </main>
            }
          />
          <Route path=":productId" element={<Love />} />
        </Route>
        <Route path="cart" element={<Cart />} />
        <Route path="signin" element={<Signin />} />
        <Route path="signup" element={<Signup />} />
        <Route path="shoppingcart" element={<Home />} />
      </Route>
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
