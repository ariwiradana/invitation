import React from "react";
import { BiLoader } from "react-icons/bi";

const Button = ({ title, icon, extendClass, disabled, loading, ...props }) => {
  return (
    <button
      disabled={loading || disabled}
      className={`flex items-center min-w-[100px] justify-center gap-x-2 min-h-[40px] bg-primary px-4 py-2 rounded-md text-white font-public-sans text-sm font-semibold ${
        extendClass || ""
      } ${
        loading || disabled
          ? "pointer-events-none bg-opacity-50"
          : "pointer-events-auto"
      }`}
      {...props}
    >
      {loading ? (
        <BiLoader size={20} className="animate-spin text-white" />
      ) : (
        <>
          {icon || ""}
          {title || ""}
        </>
      )}
    </button>
  );
};

export default Button;
