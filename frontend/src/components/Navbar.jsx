import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Top Navbar */}
      <div className="flex justify-between items-center px-2 md:px-12 py-4 bg-gray-50">
        <div className="text-xl md:text-2xl font-semibold text-gray-900">
          <button onClick={toggleSidebar}>
            <i className="ri-menu-line"></i>
          </button>
        </div>

        <Link to="/">
          <h1 className="text-xl md:text-2xl font-semibold ml-10 md:ml-26">
            ORNAMENTRA
          </h1>
        </Link>

        <div className="flex gap-1 md:gap-3 text-gray-800">
          <Link to="/search">
            <i className="ri-search-line text-xl md:text-2xl"></i>
          </Link>
          <Link to="/wishlist">
            <i className="ri-star-line text-xl md:text-2xl"></i>
          </Link>
          <Link to="/login">
            <i className="ri-account-circle-line text-xl md:text-2xl"></i>
          </Link>
          <Link to="/cart">
            <i className="ri-shopping-bag-line text-xl md:text-2xl"></i>
          </Link>
        </div>
      </div>

      {/* Category Nav (Desktop) */}
      <div className="hidden lg:flex justify-center gap-16 text-gray-900 py-1 bg-gray-100">
        <Link to="/necklaces">NECKLACES</Link>
        <Link to="/rings">RINGS</Link>
        <Link to="/earrings">EARRINGS</Link>
        <Link to="/bracelet">BRACELET</Link>
        <Link to="/bangles">BANGLES</Link>
        <Link to="/nosepins">NOSE PINS</Link>
        <Link to="/anklets">ANKLETS</Link>
      </div>

      {/* Sidebar (Mobile + Desktop) */}
      {isSidebarOpen && (
        <div
          id="sidebar"
          className="fixed top-16 lg:top-25 left-0 h-full bg-gray-100 z-30 w-full md:w-1/3  overflow-y-auto"
        >
          <div className="py-8 flex flex-col text-sm">
            <div className="px-6 flex justify-end">
              <button onClick={toggleSidebar}>
                <i className="ri-close-line text-2xl text-gray-700"></i>
              </button>
            </div>

            <div className="space-y-6 px-12 hidden md:block">
              <Link
                to="/"
                className="uppercase block pb-6 border-b border-gray-600"
              >
                shop
              </Link>
              <Link
                to="/login"
                className="uppercase block pb-6 border-b border-gray-600"
              >
                sign in / sign up
              </Link>
            </div>

            <div className="space-y-6 hidden lg:block px-12 mt-6">
              <Link to="/about" className="uppercase block">
                about us
              </Link>
              <Link to="/contact" className="uppercase block">
                contact / locate us
              </Link>
              <Link to="/shipping" className="uppercase block">
                shipping information
              </Link>
              <Link to="/legal" className="uppercase block">
                legal
              </Link>
              <Link to="/careers" className="uppercase block">
                careers
              </Link>
              <Link to="/magazine" className="uppercase block">
                vnv magazine
              </Link>
            </div>

            {/* Mobile Category Menu */}
            <div className="space-y-4 lg:hidden flex flex-col items-center text-lg px-12">
              <Link to="/necklaces" className="uppercase block">
                NECKLACES
              </Link>
              <Link to="/rings" className="uppercase block">
                RINGS
              </Link>
              <Link to="/earrings" className="uppercase block">
                EARRINGS
              </Link>
              <Link to="/bracelet" className="uppercase block">
                BRACELET
              </Link>
              <Link to="/bangles" className="uppercase block">
                BANGLES
              </Link>
              <Link to="/nosepins" className="uppercase block">
                NOSE PINS
              </Link>
              <Link to="/anklets" className="uppercase block">
                ANKLETS
              </Link>
            </div>

            <div className="mt-16 hidden lg:block px-12">
              <p className="text-sm uppercase">Sign up for newsletter</p>
              <div className="bg-gray-200 p-4 mt-2">
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  className="w-full bg-transparent border-none focus:outline-none text-black placeholder:text-gray-500"
                />
              </div>

              <div className="text-sm uppercase mt-12">Follow us on</div>
              <div className="flex gap-2 mt-2">
                <a href="https://facebook.com">
                  <img
                    src="https://www.vegnonveg.com/assets/images/facebook.svg"
                    alt="Facebook"
                    className="w-6 h-6"
                  />
                </a>
                <a href="https://instagram.com">
                  <img
                    src="https://www.vegnonveg.com/assets/images/instagram.svg"
                    alt="Instagram"
                    className="w-6 h-6"
                  />
                </a>
                <a href="https://whatsapp.com">
                  <img
                    src="https://www.vegnonveg.com/assets/images/whatsapp.svg"
                    alt="WhatsApp"
                    className="w-6 h-6"
                  />
                </a>
                <a href="https://youtube.com">
                  <img
                    src="https://www.vegnonveg.com/assets/images/youtube.svg"
                    alt="YouTube"
                    className="w-6 h-6"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
