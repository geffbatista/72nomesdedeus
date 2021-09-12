import classnames from "classnames";
import { useDarkMode } from "next-dark-mode";
import { Dispatch, SetStateAction, SyntheticEvent, useState } from "react";
import { MdInvertColors } from "react-icons/md";
import { useDoubleTap } from "use-double-tap";
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
  const [isZoomed, setZoomed] = useState(false);

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

  const doubleClickHandler = (ev: SyntheticEvent) => {
    if (isZoomed) {
      setZoomed(false);
    } else {
      setZoomed(true);
    }

    ev.preventDefault();
    ev.stopPropagation();
  };

  const bind = useDoubleTap((ev) => doubleClickHandler(ev));

  return (
    <div className="NamesWrapper">
      {SeventyTwoNames?.map((nome, posicao) => (
        <article key={nome.svg} id={`nome${posicao + 1}`} {...bind}>
          <svg
            className={classnames("NomeSvg", {
              Zoomed: isZoomed,
            })}
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
