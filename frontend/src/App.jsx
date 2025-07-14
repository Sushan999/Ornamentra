import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Title from "./components/Title";
import Necklaces from "./components/Necklaces";
import Rings from "./components/Rings";
import Earrings from "./components/Earrings";
import Footer from "./components/Footer";
import Explore from "./components/Explore";
import Login from "./components/Pages/Login";
import Wishlist from "./components/Pages/Wishlist";
import Cart from "./components/Pages/Cart";
import Details from "./components/Pages/Details";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Landing />
              <Necklaces />
              <Rings />
              <Explore />
              <Earrings />
              <Footer />
            </>
          }
        />
        <Route path="/necklace/:id" element={<Details />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
