import React from "react";

const Button = ({ title, icon, extendClass, ...props }) => {
  return (
    <button
      className={`flex items-center gap-x-2 bg-primary px-4 py-2 rounded-md text-white font-public-sans text-sm font-semibold ${
        extendClass || ""
      }`}
      {...props}
    >
      {icon || ""}
      {title || ""}
    </button>
  );
};

export default Button;
