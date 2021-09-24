import { Dispatch, SetStateAction } from "react";

export interface PlaybackProps {
  isPlaying?: boolean;
  setPlaying?: Dispatch<SetStateAction<boolean>>;

  playbackTime?: number;

  meditationTime?: number;

  setMeditationTime?: Dispatch<SetStateAction<number>>;
}
