import React from "react";

const Button = ({ title, icon, extendClass, disabled, ...props }) => {
  return (
    <button
      disabled={disabled}
      className={`flex items-center justify-center gap-x-2 bg-primary px-4 py-2 rounded-md text-white font-public-sans text-sm font-semibold ${
        extendClass || ""
      } ${
        disabled ? "pointer-events-none bg-opacity-50" : "pointer-events-auto"
      }`}
      {...props}
    >
      {icon || ""}
      {title || ""}
    </button>
  );
};

export default Button;
