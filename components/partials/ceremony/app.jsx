import Container from "@/components/container/app";
import Button from "@/components/elements/button/app";
import Link from "next/link";
import React from "react";
import { BiSolidCalendar, BiSolidMap, BiSolidTimeFive } from "react-icons/bi";
import { FaMap, FaPaperPlane } from "react-icons/fa";

const Ceremony = () => {
  return (
    <div className="px-5 py-20 lg:py-24 bg-primary bg-[url('/images/texture.png')] bg-no-repeat bg-cover bg-center">
      <p
        data-aos-duration="2000"
        data-aos="fade-up"
        className="text-center text-base font-public-sans text-white leading-6 max-w-screen-md mx-auto"
      >
        Merupakan suatu kebahagiaan dan kehormatan bagi kami, apabila
        Bapak/Ibu/Saudara/i, berkenan hadir untuk memberikan doa restu.
      </p>
      <div
        data-aos-duration="2000"
        data-aos="fade-up"
        data-aos-delay="200"
        className="border-2 border-white rounded-3xl overflow-hidden mt-8 flex max-w-screen-md mx-auto"
      >
        <div className="p-5">
          <h5 className="uppercase text-2xl text-white font-playfair-display leading-loose border-b-2 border-b-white whitespace-nowrap">
            Waktu & Tempat
          </h5>
          <div className="flex flex-col gap-y-2 mt-6">
            <div className="flex gap-x-2">
              <BiSolidCalendar className="text-white min-w-[16px] mt-[2px]" />
              <h6 className="text-white font-public-sans text-base">
                17 September 2023
              </h6>
            </div>
            <div className="flex gap-x-2">
              <BiSolidTimeFive className="text-white min-w-[16px] mt-[2px]" />
              <h6 className="text-white font-public-sans text-base">
                17.00 WITA - Selesai
              </h6>
            </div>
            <div className="flex gap-x-2">
              <BiSolidMap className="text-white min-w-[16px] mt-[2px]" />
              <h6 className="text-white font-public-sans text-base">
                Jl. Ciung Wanara No.Br, Babakan, Kec. Sukawati, Kabupaten
                Gianyar
              </h6>
            </div>
            <div className="mt-5">
              <Link
                href="https://goo.gl/maps/4s5wEC16dsK1jnJi9"
                target="_blank"
              >
                <Button
                  extendClass="uppercase"
                  icon={<FaMap />}
                  title="Petunjuk Arah"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ceremony;
