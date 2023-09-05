"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import Cover from "@/components/cover/app";
import Wishes from "@/components/wishes/app";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Cover name="Nama Undangan" />
      <div className="h-screen"></div>
      <Wishes />
    </>
  );
};

export default Home;
