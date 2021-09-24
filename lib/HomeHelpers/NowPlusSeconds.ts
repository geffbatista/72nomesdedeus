import { MEDITATION_SECONDS } from "../../Components/MeditationAwaitOptions/MeditationAwaitOptions";

const NowPlusSeconds = (val?: number) => {
  const time = new Date();

  if (val) {
    time.setSeconds(time.getSeconds() + val);
  } else {
    time.setSeconds(time.getSeconds() + MEDITATION_SECONDS);
  }

  return time;
};

export default NowPlusSeconds;
