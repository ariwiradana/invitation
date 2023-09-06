"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import Cover from "@/components/partials/cover/app";
import Wishes from "@/components/partials/wishes/app";
import { useEffect } from "react";
import Persons from "@/components/partials/persons/app";

const Home = ({ params }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Cover name={params.name} />
      <Persons />
      {/* <Wishes /> */}
    </>
  );
};

export default Home;

// or Dynamic metadata
export async function generateMetadata({ params }) {
  return {
    title: "...",
  };
}
