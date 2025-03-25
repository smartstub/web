import React from "react";

const Card = ({ title, children }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-200">
      {title && <h2 className="text-lg font-semibold mb-4">{title}</h2>}
      <div>{children}</div>
    </div>
  );
};

export default Card;
