import { Dispatch, SetStateAction } from "react";
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
            className="Posicao"
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
        </article>
      ))}
    </div>
  );
};

export default SeventyTwoNamesOfGod;
