import { Dispatch, SetStateAction } from "react";
import { NamesOfGodType } from "../../types";

export interface NavigationByPositionProps {
  SeventyTwoNames: NamesOfGodType;
  setShowPanel: Dispatch<SetStateAction<boolean>>;
  showing?: boolean;
}
