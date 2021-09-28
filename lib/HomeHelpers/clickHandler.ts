import { Dispatch, SetStateAction, SyntheticEvent } from "react";

type ClickHandlerProps = {
  ev: SyntheticEvent;
  setShowingControls: Dispatch<SetStateAction<boolean>>;
  showingControls: boolean;
};

const clickHandler = ({
  ev,
  setShowingControls,
  showingControls,
}: ClickHandlerProps) => {
  setShowingControls(!showingControls);

  ev.preventDefault();
  ev.stopPropagation();
};

export default clickHandler;
