import { SyntheticEvent } from "react";
import { event } from "../../../lib/gtag";
import { NavigationProps } from "../../../types/navigation";

const handleCloseClick = (ev: SyntheticEvent, navigation?: NavigationProps) => {
  ev.preventDefault();

  event({
    category: "MeditationAwaitOptions",
    action: "click-to-close",
    label: "close-meditation-options",
  });

  return (
    navigation?.setShowMeditationAwaitOptions &&
    navigation?.setShowMeditationAwaitOptions(false)
  );
};

export default handleCloseClick;
