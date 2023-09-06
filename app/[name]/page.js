"use client";
import Cover from "@/components/partials/cover/app";
import Wishes from "@/components/partials/wishes/app";
import Persons from "@/components/partials/persons/app";
import useAOS from "@/hooks/useAOS";
import Ceremony from "@/components/partials/ceremony/app";
import PlayButton from "@/components/elements/play.button/app";
import usePlayMusic from "@/hooks/usePlayMusic";
import Dates from "@/components/partials/dates/app";

const Home = ({ params }) => {
  useAOS();
  const { togglePlay, play, audioRef } = usePlayMusic();
  return (
    <>
      <PlayButton audioRef={audioRef} play={play} togglePlay={togglePlay} />
      <Cover togglePlay={togglePlay} name={params.name} />
      <Persons />
      <Ceremony />
      <Dates />
      <Wishes />
    </>
  );
};

export default Home;
