import React from "react";
import Title from "./Title";

const Rings = () => {
  return (
    <div className="container mx-auto py-8">
      <Title
        title="OUR RINGS"
        subtitle="Symbolize your story with rings that speak of love, strength, and individuality"
      />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        <img
          src="https://media.tiffany.com/is/image/Tiffany/EcomBrowseM/tiffany-tdiamond-wire-ring-33263635_991760_ED.jpg?defaultImage=NoImageAvailableInternal&fmt=webp"
          alt=""
          className="w-full h-[220px] md:h-[380px] object-cover rounded-lg"
        />
        <img
          src="https://media.tiffany.com/is/image/Tiffany/EcomBrowseM/tiffany-tdiamond-wire-ring-33263635_991760_ED.jpg?defaultImage=NoImageAvailableInternal&fmt=webp"
          alt=""
          className="w-full h-[220px] md:h-[380px] object-cover rounded-lg"
        />
        <img
          src="https://media.tiffany.com/is/image/Tiffany/EcomBrowseM/tiffany-tdiamond-wire-ring-33263635_991760_ED.jpg?defaultImage=NoImageAvailableInternal&fmt=webp"
          alt=""
          className="w-full h-[220px] md:h-[380px] object-cover rounded-lg"
        />
        <img
          src="https://media.tiffany.com/is/image/Tiffany/EcomBrowseM/tiffany-tdiamond-wire-ring-33263635_991760_ED.jpg?defaultImage=NoImageAvailableInternal&fmt=webp"
          alt=""
          className="w-full h-[220px] md:h-[380px] object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default Rings;
