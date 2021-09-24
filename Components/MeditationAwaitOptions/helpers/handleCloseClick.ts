import { event } from "../../../lib/gtag";

const handleCloseClick = (navigation: any) => {
  event({
    category: "MeditationAwaitOptions",
    action: "click-to-close",
    label: "close-meditation-options",
  });

  return navigation?.setShow(false);
};

export default handleCloseClick;
