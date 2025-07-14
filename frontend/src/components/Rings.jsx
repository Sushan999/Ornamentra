import React from "react";
import Title from "./Title";
import { rings } from "../assets/assets";
import { Link } from "react-router-dom";

const Rings = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <Title
        title="OUR RINGS"
        subtitle="Symbolize your story with rings that speak of love, strength, and individuality"
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        {rings.map((item) => (
          <Link to={`/ring/${item._id}`} key={item._id} className="group block">
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-[220px] md:h-[380px] object-cover rounded-lg group-hover:scale-105 transition duration-300"
            />
            <h3 className="text-sm md:text-base font-medium mt-2 text-center">
              {item.name}
            </h3>
            <p className="text-xs md:text-sm text-gray-500 text-center">
              ${item.price}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Rings;
