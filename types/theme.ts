import { Dispatch, SetStateAction } from "react";

export interface ThemeProps {
  isDarkModeActive?: boolean;
  setDarkMode?: Dispatch<SetStateAction<boolean>>;
}
