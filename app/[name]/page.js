"use client";
import Cover from "@/components/partials/cover/app";
import Wishes from "@/components/partials/wishes/app";
import Persons from "@/components/partials/persons/app";
import useAOS from "@/hooks/useAOS";

const Home = ({ params }) => {
  useAOS();
  return (
    <>
      <Cover name={params.name} />
      <Persons />
      {/* <Wishes /> */}
    </>
  );
};

export default Home;
