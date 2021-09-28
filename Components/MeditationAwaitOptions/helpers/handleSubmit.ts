import { SyntheticEvent } from "react";
import NowPlusSeconds from "../../../lib/HomeHelpers/NowPlusSeconds";
import { NavigationProps } from "../../../types/navigation";
import { PlaybackProps } from "../../../types/playback";
import { TimerProps } from "../../../types/timer";

interface HandleSubmitProps {
  ev: SyntheticEvent;
  navigation?: NavigationProps;
  playback?: PlaybackProps;
  timer?: TimerProps;
}

const handleSubmit = ({
  ev,
  navigation,
  playback,
  timer,
}: HandleSubmitProps) => {
  // console.log("-> FORM SUBMIT");

  const formRef = ev?.currentTarget;

  if (!formRef) {
    return null;
  }

  const timeFieldValue = formRef.querySelector("#MeditationTimeField");

  const meditationTimeFromForm = Number(timeFieldValue) || 3;

  // console.log("---> meditationTimeFromForm: ", meditationTimeFromForm);

  if (meditationTimeFromForm && ev) {
    playback?.setMeditationTime &&
      playback?.setMeditationTime(meditationTimeFromForm);

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

  !!timer?.restart && timer?.restart(NowPlusSeconds(playback?.meditationTime));
};

export default handleSubmit;
