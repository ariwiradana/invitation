"use client";

import Cover from "@/components/cover/app";
import Wishes from "@/components/wishes/app";

const Home = ({ params }) => {
  return (
    <>
      <Cover name={params.name || ""} />
      <div className="h-screen"></div>
      <Wishes />
    </>
  );
};

export default Home;
