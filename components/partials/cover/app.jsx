import React from "react";
import Image from "next/image";
import Button from "../../elements/button/app";
import { GrMail } from "react-icons/gr";
import Container from "../../container/app";
import useCover from "@/hooks/useCover";

const Cover = ({ name, togglePlay }) => {
  const { ref, showButton, handleOpenInvitation } = useCover();
  return (
    <Container>
      <div className="relative z-50" ref={ref}>
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
            <h6
              data-aos-duration="2000"
              data-aos="fade-up"
              className="text-center text-primary font-public-sans text-3xl mb-1"
            >
              {decodeURIComponent(name)}
            </h6>
            <h6
              data-aos-duration="2000"
              data-aos-delay="200"
              data-aos="fade-up"
              className="text-center text-dark italic text-base font-public-sans"
            >
              You&apos;re Invited to
            </h6>
            <h3
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-delay="400"
              className="text-center font-playfair-display text-xl lg:text-3xl max-w-screen-md text-dark my-8"
            >
              Karya Mecaru Rsi Gana Pedagingan Melaspas, Ngenteg Linggih lan
              Manusa Yadnya Mepandes
            </h3>
            {showButton && (
              <div
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-delay="600"
                className="flex justify-center"
              >
                <Button
                  onClick={() => {
                    handleOpenInvitation();
                    togglePlay();
                  }}
                  extendClass="uppercase"
                  icon={<GrMail size={18} />}
                  title="Buka Undangan"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Cover;
