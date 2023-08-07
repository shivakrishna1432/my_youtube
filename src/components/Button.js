import React from "react";

const Button = ({ name }) => {
  return (
    <button className="bg-gray-200 hover:scale-110 hover:bg-gray-300 px-3 py-1 text-sm rounded-md m-2">
      {name}
    </button>
  );
};

export default Button;
