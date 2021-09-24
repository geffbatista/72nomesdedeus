import { SyntheticEvent } from "react";
import { NavigationProps } from "../../../types/navigation";
import { PlaybackProps } from "../../../types/playback";
import { TimerProps } from "../../../types/timer";

interface HandleSubmitProps {
  ev: SyntheticEvent;
  navigation?: NavigationProps;
  playback?: PlaybackProps;
  timer?: TimerProps;
}

const handleSubmit = ({ ev, navigation, playback }: HandleSubmitProps) => {
  console.log("-> FORM SUBMIT");

  if (ev) {
    console.log("ev: ", ev);
    ev.preventDefault();
    ev.stopPropagation();
  }

  if (navigation?.setShow) {
    navigation?.setShow(false);
  }

  if (playback?.setPlaying) {
    playback?.setPlaying(true);
  }

  if (window.location.hash) {
    window.location.href = `/meditar${window.location.hash}`;
  } else {
    window.location.href = "/meditar#nome1";
  }
};

export default handleSubmit;
