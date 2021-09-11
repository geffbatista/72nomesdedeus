import { useDarkMode } from "next-dark-mode";
import { Dispatch, SetStateAction } from "react";
import { MdInvertColors } from "react-icons/md";
import { NamesOfGodType } from "../../types";
import openNavigationByPosition from "./openNavigationByPosition";

interface SeventyTwoNamesOfGodProps {
  SeventyTwoNames: NamesOfGodType;
  setShowingNavByPosition: Dispatch<SetStateAction<boolean>>;
}

const SeventyTwoNamesOfGod = ({
  SeventyTwoNames,
  setShowingNavByPosition,
}: SeventyTwoNamesOfGodProps) => {
  const {
    darkModeActive, // boolean - whether the dark mode is active or not
    switchToDarkMode, // function - toggles the dark mode on
    switchToLightMode, // function - toggles the light mode on
  } = useDarkMode();

  const ThemeChangerClickHandler = () => {
    if (darkModeActive) {
      switchToLightMode();
    } else {
      switchToDarkMode();
    }
  };

  return (
    <div className="NamesWrapper">
      {SeventyTwoNames?.map((nome, posicao) => (
        <article key={nome.svg} id={`nome${posicao + 1}`}>
          <svg
            className="NomeSvg"
            preserveAspectRatio="xMidYMid meet"
            viewBox={nome.viewBox}
            width={nome.width}
            height={nome.height}
            // loading="lazy"
          >
            <use
              className="UseSvg"
              xlinkHref={`images/nomes/${nome.svg}#nome`}
            />
          </svg>

          <strong className="Significa">{nome.means}</strong>

          <button
            type="button"
            className="PositionChanger"
            onClick={(event) =>
              openNavigationByPosition(
                posicao + 1,
                setShowingNavByPosition,
                event
              )
            }
          >
            {posicao + 1}
          </button>

          <button
            type="button"
            className="ThemeChanger"
            onClick={ThemeChangerClickHandler}
          >
            <MdInvertColors className="Icon" />
          </button>
        </article>
      ))}
    </div>
  );
};

export default SeventyTwoNamesOfGod;
