import { Dispatch, SetStateAction, SyntheticEvent } from "react";

type DoubleClickHandlerProps = {
  ev: SyntheticEvent;
  scale: {
    "2x": boolean;
    "3x": boolean;
  };
  setScale: Dispatch<
    SetStateAction<{
      "2x": boolean;
      "3x": boolean;
    }>
  >;
};

const doubleClickHandler = ({
  ev,
  setScale,
  scale,
}: DoubleClickHandlerProps) => {
  if (scale["2x"]) {
    setScale({
      "2x": false,
      "3x": true,
    });
  } else if (scale["3x"]) {
    setScale({
      "2x": false,
      "3x": false,
    });
  } else {
    setScale({
      "2x": true,
      "3x": false,
    });
  }

  ev.preventDefault();
  ev.stopPropagation();
};

export default doubleClickHandler;
