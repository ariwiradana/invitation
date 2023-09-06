"use client";
import Cover from "@/components/partials/cover/app";
import Persons from "@/components/partials/persons/app";
import Wishes from "@/components/partials/wishes/app";
import useAOS from "@/hooks/useAOS";

const Home = () => {
  useAOS();
  return (
    <>
      <Cover name="Nama Undangan" />
      <Persons />
      {/* <Wishes /> */}
    </>
  );
};

export default Home;
