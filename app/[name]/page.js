"use client";
import Cover from "@/components/partials/cover/app";
import Wishes from "@/components/partials/wishes/app";
import Persons from "@/components/partials/persons/app";
import useAOS from "@/hooks/useAOS";
import Ceremony from "@/components/partials/ceremony/app";

const Home = ({ params }) => {
  useAOS();
  return (
    <>
      <Cover name={params.name} />
      <Persons />
      <Ceremony />
      {/* <Wishes /> */}
    </>
  );
};

export default Home;
