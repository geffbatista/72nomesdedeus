import { Dispatch, SetStateAction } from "react";

export interface NavigationProps {
  actualName?: number;
  setActualName?: Dispatch<SetStateAction<number>>;

  doubleClickHandler?: any;
  clickHandler?: any;

  scale?: any;

  setShowingNavByPosition?: Dispatch<SetStateAction<boolean>>;
  setShowMeditationAwaitOptions?: Dispatch<SetStateAction<boolean>>;

  setShow?: Dispatch<SetStateAction<boolean>>;
}
