import React from "react";
import Title from "./Title";

const Earrings = () => {
  return (
    <div className="container mx-auto">
      <Title
        title="OUR Earrings"
        subtitle="Symbolize your story with Earrings that speak of love, strength, and individuality"
      />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        <img
          src="https://media.tiffany.com/is/image/Tiffany/EcomBrowseM/tiffany-solitaire-diamond-stud-earrings-14041419_921472_ED_M.jpg?defaultImage=NoImageAvailableInternal&fmt=webp"
          alt=""
          className="w-full h-[220px] md:h-[380px] object-cover rounded-lg"
        />
        <img
          src="https://media.tiffany.com/is/image/Tiffany/EcomBrowseM/tiffany-solitaire-diamond-stud-earrings-14041419_921472_ED_M.jpg?defaultImage=NoImageAvailableInternal&fmt=webp"
          alt=""
          className="w-full h-[220px] md:h-[380px] object-cover rounded-lg"
        />
        <img
          src="https://media.tiffany.com/is/image/Tiffany/EcomBrowseM/tiffany-solitaire-diamond-stud-earrings-14041419_921472_ED_M.jpg?defaultImage=NoImageAvailableInternal&fmt=webp"
          alt=""
          className="w-full h-[220px] md:h-[380px] object-cover rounded-lg"
        />
        <img
          src="https://media.tiffany.com/is/image/Tiffany/EcomBrowseM/tiffany-solitaire-diamond-stud-earrings-14041419_921472_ED_M.jpg?defaultImage=NoImageAvailableInternal&fmt=webp"
          alt=""
          className="w-full h-[220px] md:h-[380px] object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default Earrings;
