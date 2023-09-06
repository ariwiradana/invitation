"use client";
import Cover from "@/components/partials/cover/app";
import Wishes from "@/components/partials/wishes/app";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Cover name="Nama Undangan" />
      <div className="h-[20vh]"></div>
      <Wishes />
    </>
  );
};

export default Home;
