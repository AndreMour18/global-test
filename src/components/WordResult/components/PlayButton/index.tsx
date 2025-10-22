import React, { useRef, useState } from "react";

import { Play } from "~/assets/svgs";

import { PlayButtonProps } from "../../types";

import { Button } from "./styles";

const PlayButton: React.FC<PlayButtonProps> = ({ audioUrl, theme }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (audioRef.current && audioUrl) {
      if (isPlaying) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleAudioEnd = () => {
    setIsPlaying(false);
  };

  if (!audioUrl) {
    return null;
  }

  return (
    <>
      <Button
        onClick={handlePlay}
        theme={theme}
        disabled={!audioUrl}
        aria-label="Play pronunciation"
      >
        <Play />
      </Button>
      <audio
        ref={audioRef}
        src={audioUrl}
        onEnded={handleAudioEnd}
        style={{ display: "none" }}
      />
    </>
  );
};

export default PlayButton;
