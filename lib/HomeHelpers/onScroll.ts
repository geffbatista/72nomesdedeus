import { debounce } from "lodash";
import { NavigationProps } from "../../types/navigation";
import { PlaybackProps } from "../../types/playback";
import { TimerProps } from "../../types/timer";
import { event } from "../gtag";
import NowPlusSeconds from "./NowPlusSeconds";

interface OnScrollProps {
  isPlaying?: boolean;
  timer: TimerProps;
  navigation?: NavigationProps;
  playback?: PlaybackProps;
}

const onScroll = debounce(
  ({ isPlaying, timer, navigation, playback }: OnScrollProps) => {
    const actualPosition =
      Number(window?.location?.hash?.split("nome")[1]) || 0;

    navigation?.setActualName && navigation.setActualName(actualPosition);

    // console.log("-> on scroll");
    // console.log("-> isPlaying: ", isPlaying);
    // console.log("-> timer?.restart: ", !!timer?.restart);
    // console.log("-> actualPosition: ", actualPosition);
    // console.log("-------------------------//");

    if (isPlaying && timer?.restart && actualPosition <= 71) {
      timer?.restart(NowPlusSeconds(playback?.meditationTime));
    }

    event({
      category: "Session",
      action: "scroll",
      label: `nome-${actualPosition}`,
    });
  },
  1500
);

export default onScroll;
