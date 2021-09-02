import { Dispatch, SetStateAction } from "react";
import { NomesDeDeusType } from "../../types";

export interface NavigationByPositionProps {
  SetentaEDoisNomesDeDeus: NomesDeDeusType;
  setShowPanel: Dispatch<SetStateAction<boolean>>;
  showing?: boolean;
}
