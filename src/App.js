import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/authComponent/Header";
import Body from "./components/authComponent/Body";
import Cart from "./components/authComponent/Cart";
import Login from "./components/noAuthComponent/Login";
import Register from "./components/noAuthComponent/Register";
import Page404 from "./components/noAuthComponent/Page404";
import "./App.css";
import Detail from "./components/noAuthComponent/Detail";
import Footer from "./components/noAuthComponent/Footer";
import Home from "./components/noAuthComponent/Home";
import Auth from "./components/Auth";

function App() {
  return (
    <div
      className="App"
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <BrowserRouter>
        <Routes style={{ flex: "1" }}>
          <Route path="/" element={<Home />} />
          <Route
            path="/home"
            element={
              <Auth>
                <Header />
                <Body />
              </Auth>
            }
          />
          <Route
            path="/home/detail/:id"
            element={
              <Auth>
                <Header />
                <Detail />
              </Auth>
            }
          />
          <Route
            path="/cart"
            element={
              <Auth>
                <Header />
                <Cart />
              </Auth>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/*" element={<Page404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
