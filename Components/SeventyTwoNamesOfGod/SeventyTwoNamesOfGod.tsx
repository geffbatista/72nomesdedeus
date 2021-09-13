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
  const [showingControls, setShowingControls] = useState(true);
  const [scale, setScale] = useState({
    "2x": false,
    "3x": false,
  });

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

  const clickHandler = (ev: SyntheticEvent) => {
    setShowingControls(!showingControls);

    ev.preventDefault();
    ev.stopPropagation();
  };

  const doubleClickHandler = (ev: SyntheticEvent) => {
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

  const bind = useDoubleTap((ev) => doubleClickHandler(ev), 200, {
    onSingleTap: clickHandler,
  });

  return (
    <div className="NamesWrapper">
      {SeventyTwoNames?.map((nome, posicao) => (
        <article key={nome.svg} id={`nome${posicao + 1}`} {...bind}>
          <svg
            className={classnames("NomeSvg", {
              Zooming2x: scale["2x"],
              Zooming3x: scale["3x"],
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
            className={classnames("PositionChanger", {
              Hidden: !showingControls,
            })}
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
            className={classnames("ThemeChanger", { Hidden: !showingControls })}
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
