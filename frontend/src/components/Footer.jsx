import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto mt-8 md:mt-20 py-8">
        {/* Newsletter */}
        <div className="space-y-4 px-4 md:px-0">
          <h1 className="text-sm uppercase text-black hidden md:block">
            Sign up for newsletter
          </h1>
          <div className="bg-gray-100 p-4 mt-4">
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full bg-transparent border-none focus:outline-none text-black placeholder:text-gray-500"
            />
          </div>
        </div>

        {/* Footer Links */}
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start md:justify-between mt-12">
          <div className="text-sm uppercase flex md:flex-col gap-1">
            <a href="/about" className="">
              About Us
            </a>
            <a href="/contact">Contact / Locate Us</a>
            <a href="/magazine" className="hidden md:block">
              VNV Magazine
            </a>
          </div>

          <div className="text-sm uppercase flex md:flex-col gap-1">
            <a href="/shipping">Shipping Information</a>
            <a href="/returns">Return and Exchange</a>
            <a href="/legal" className="hidden md:block">
              Legal
            </a>
            <a href="/careers" className="hidden md:block">
              Careers
            </a>
          </div>

          <div className="text-sm uppercase flex flex-col gap-1">
            <div className="md:text-end text-center">Follow us on</div>
            <div className="flex gap-2 justify-center md:justify-end">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://www.vegnonveg.com/assets/images/facebook.svg"
                  alt="Facebook"
                  className="w-6 h-6"
                />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://www.vegnonveg.com/assets/images/instagram.svg"
                  alt="Instagram"
                  className="w-6 h-6"
                />
              </a>
              <a href="https://wa.me" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://www.vegnonveg.com/assets/images/whatsapp.svg"
                  alt="WhatsApp"
                  className="w-6 h-6"
                />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
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
    </div>
  );
};

export default Footer;
