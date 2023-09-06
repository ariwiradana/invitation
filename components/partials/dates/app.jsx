import Container from "@/components/container/app";
import Title from "@/components/elements/title/app";
import useDates from "@/hooks/useDates";
import Image from "next/image";
import React from "react";

const Dates = () => {
  const TimeCard = ({ value, label }) => {
    return (
      <div className="rounded-lg border border-primary overflow-hidden">
        <div className="flex justify-center items-center p-4">
          <h6 className="font-playfair-display text-2xl italic">{value}</h6>
        </div>
        <div className="bg-primary flex justify-center items-center px-4 py-2">
          <h6 className="text-white font-public-sans text-sm">{label}</h6>
        </div>
      </div>
    );
  };

  const { timeRemaining } = useDates("2023-09-17T00:00:00Z");

  return (
    <Container className="px-5 py-12 relative bg-[url('/images/wave-pattern.png')] bg-center bg-no-repeat bg-cover">
      <div className="flex justify-center absolute inset-0 w-full h-full items-center p-5">
        <Image
          alt="flower-2"
          src="/images/flower-2.png"
          width={300}
          height={300}
          className="opacity-20"
        />
      </div>
      <div className="relative z-10 flex flex-col gap-y-8">
        <p
          data-aos-duration="1000"
          data-aos="zoom-in-up"
          className="mt-5 text-center text-base font-public-sans text-dark leading-6 max-w-screen-md mx-auto"
        >
          Dengan ini (Yadnya), kami berbakti kepada Hyang Widhi dan dengan ini
          pula Hyang Widhi memelihara dan mengasihi kamu. Dengan saling
          memelihara satu sama lain, kamu akan mencapai kebaikan yang maha
          tinggi.
        </p>
        <div
          data-aos-duration="1000"
          data-aos="zoom-in-up"
          data-aos-delay="200"
          className="grid grid-cols-4 gap-x-4"
        >
          <TimeCard label="Hari" value={timeRemaining?.days} />
          <TimeCard label="Jam" value={timeRemaining?.hours} />
          <TimeCard label="Menit" value={timeRemaining?.minutes} />
          <TimeCard label="Detik" value={timeRemaining?.seconds} />
        </div>
      </div>
    </Container>
  );
};

export default Dates;
