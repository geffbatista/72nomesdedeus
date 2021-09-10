import { Dispatch, SetStateAction, SyntheticEvent } from "react";

const openNavigationByPosition = (
  position: number,
  setShowPanel: Dispatch<SetStateAction<boolean>>,
  event: SyntheticEvent
) => {
  event.preventDefault();
  event.stopPropagation();

  setShowPanel(true);
};

export default openNavigationByPosition;
