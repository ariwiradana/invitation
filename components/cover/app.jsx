import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Button from "../elements/button/app";
import { GrMail } from "react-icons/gr";
import Container from "../container/app";
import Link from "next/link";
import useCover from "@/hooks/useCover";

const Cover = ({ name }) => {
  const { ref, handleOpenInvitation } = useCover();

  return (
    <Container>
      <div className="relative" ref={ref}>
        <Image
          priority
          alt="flower-top"
          width={200}
          height={200}
          className="absolute left-0 top-0 z-10 w-auto h-auto"
          src="/images/flower-top.png"
        />
        <Image
          priority
          alt="flower-bottom"
          width={200}
          height={200}
          className="absolute right-0 bottom-0 z-10 w-auto h-auto"
          src="/images/flower-bottom.png"
        />
        <div className="h-screen bg-background relative bg-[url('/images/texture.png')] bg-center bg-no-repeat bg-cover flex justify-center items-center">
          <div className="p-5 relative z-20">
            <h3 className="text-center font-playfair-display text-2xl lg:text-3xl max-w-lg text-dark">
              Karya Mecaru Rsi Gana Pedagingan Melaspas, Ngenteg Linggih lan
              Manusa Yadnya Mepandes
            </h3>
            <div className="my-8">
              <h6 className="text-center text-dark font-thin font-public-sans text-lg lg:text-xl">
                Dear: <span>{decodeURIComponent(name)}</span>
              </h6>
              <h6 className="text-center mt-2 text-dark italic font-bold text-sm lg:text-base font-public-sans">
                You&apos;re Invited
              </h6>
            </div>
            <div className="flex justify-center">
              <Button
                onClick={handleOpenInvitation}
                extendClass="uppercase"
                icon={<GrMail size={18} />}
                title="Buka Undangan"
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Cover;
