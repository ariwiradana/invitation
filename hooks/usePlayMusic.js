import React, { useRef, useState } from "react";

const usePlayMusic = () => {
  const [play, setPlay] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (play) {
      audio.pause();
    } else {
      audio.play();
    }
    setPlay(!play);
  };

  const stopPlayback = () => {
    const audio = audioRef.current;
    audio.pause();
    audio.currentTime = 0;
    setPlay(false);
  };
  return { play, audioRef, togglePlay, stopPlayback };
};

export default usePlayMusic;
