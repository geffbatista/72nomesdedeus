import { SyntheticEvent } from "react";

const handleButtonClick = (ev: SyntheticEvent) => {
  console.log("-> CLICK BUTTON");

  ev.stopPropagation();
};

export default handleButtonClick;
