import React from "react";

const Title = ({
  title,
  extendClass,
  dataAos,
  dataAosDelay,
  dataAosDuration,
}) => {
  return (
    <h4
      data-aos-duration={dataAosDuration || "0"}
      data-aos={dataAos || ""}
      data-aos-delay={dataAosDelay || "0"}
      className={`font-playfair-display text-3xl lg:text-4xl uppercase text-primary text-center ${
        extendClass || ""
      }`}
    >
      {title}
    </h4>
  );
};

export default Title;
