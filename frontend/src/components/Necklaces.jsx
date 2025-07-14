import React from "react";
import Title from "./Title";

const Necklaces = () => {
  return (
    <div className="container mx-auto ">
      <Title
        title="OUR NECKLACES"
        subtitle="Elevate Every Look with a Perfect Necklace"
      />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        <img
          src="https://media.tiffany.com/is/image/Tiffany/EcomBrowseM/tiffany-locksmall-pendant-74365787_1076534_ED.jpg?defaultImage=NoImageAvailableInternal&fmt=webp"
          alt=""
          className="w-full h-[220px] md:h-[380px] object-cover rounded-lg"
        />
        <img
          src="https://media.tiffany.com/is/image/Tiffany/EcomBrowseM/tiffany-locksmall-pendant-74365787_1076534_ED.jpg?defaultImage=NoImageAvailableInternal&fmt=webp"
          alt=""
          className="w-full h-[220px] md:h-[380px] object-cover rounded-lg"
        />
        <img
          src="https://media.tiffany.com/is/image/Tiffany/EcomBrowseM/tiffany-locksmall-pendant-74365787_1076534_ED.jpg?defaultImage=NoImageAvailableInternal&fmt=webp"
          alt=""
          className="w-full h-[220px] md:h-[380px] object-cover rounded-lg"
        />
        <img
          src="https://media.tiffany.com/is/image/Tiffany/EcomBrowseM/tiffany-locksmall-pendant-74365787_1076534_ED.jpg?defaultImage=NoImageAvailableInternal&fmt=webp"
          alt=""
          className="w-full h-[220px] md:h-[380px] object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default Necklaces;
