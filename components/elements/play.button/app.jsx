import React from "react";
import { BsFillPauseFill, BsFillPlayFill } from "react-icons/bs";

const PlayButton = ({ audioRef, play, togglePlay, showButton }) => {
  return (
    <>
      <audio ref={audioRef}>
        <source src="/music/audio.mp3" type="audio/mpeg" />
      </audio>
      {!showButton && (
        <button
          onClick={togglePlay}
          className="w-12 h-12 rounded-full bg-primary flex justify-center items-center fixed right-4 bottom-4 z-40"
        >
          {play ? (
            <BsFillPauseFill
              onClick={togglePlay}
              className="text-white"
              size={28}
            />
          ) : (
            <BsFillPlayFill
              onClick={togglePlay}
              className="text-white"
              size={28}
            />
          )}
        </button>
      )}
    </>
  );
};

export default PlayButton;
