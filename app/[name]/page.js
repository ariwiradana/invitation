"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import Cover from "@/components/cover/app";
import Wishes from "@/components/wishes/app";
import { useEffect } from "react";

const Home = ({ params }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Cover name={params.name} />
      <div className="h-screen"></div>
      <Wishes />
    </>
  );
};

export default Home;
