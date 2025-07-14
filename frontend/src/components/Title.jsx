import React from "react";

const Title = ({ title, subtitle }) => {
  return (
    <div className="mt-2 px-4 py-12">
      <h1 className="text-5xl text-gray-700 text-center">{title}</h1>
      <p className="text-xl text-center text-gray-700">{subtitle}</p>
    </div>
  );
};

export default Title;
