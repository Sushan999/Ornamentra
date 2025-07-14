import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Necklaces from "./components/Necklaces";
import Rings from "./components/Rings";
import Earrings from "./components/Earrings";
import Footer from "./components/Footer";
import Explore from "./components/Explore";
import Login from "./components/Pages/Login";
import Wishlist from "./components/Pages/Wishlist";
import Cart from "./components/Pages/Cart";
import Details from "./components/Pages/Details";
import Profile from "./components/Pages/Profile";

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
        <Route path="/profile" element={<Profile />} />

        <Route path="/necklaces" element={<Necklaces />} />
        <Route path="/rings" element={<Rings />} />
        <Route path="/earrings" element={<Earrings />} />

        <Route path="/:category/:id" element={<Details />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
