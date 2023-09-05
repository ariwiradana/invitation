import React from "react";

const Container = ({ children, id, className }) => {
  return (
    <div className={className} id={id || ""}>
      {children}
    </div>
  );
};

export default Container;
