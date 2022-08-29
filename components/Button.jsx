import React from "react";

const Button = ({ name }) => {
  return (
    <button
      className="w-32 py-3 px-5 bg-blue-900 rounded-md  text-blue-300 text-lg font-semibold drop-shadow-lg
                                    hover:bg-blue-800 uppercase "
      onClick={() => {}}
    >
      {name}
    </button>
  );
};

export default Button;
