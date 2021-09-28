import classnames from "classnames";
import { useDoubleTap } from "use-double-tap";
import { NamesOfGodType } from "../../types";
import { NavigationProps } from "../../types/navigation";
import { PlaybackProps } from "../../types/playback";
import { TimerProps } from "../../types/timer";

interface SeventyTwoNamesOfGodProps {
  SeventyTwoNames: NamesOfGodType;
  navigation: NavigationProps;
  playback: PlaybackProps;
  timer: TimerProps;
}

const SeventyTwoNamesOfGod = ({
  SeventyTwoNames,
  navigation,
  playback,
  timer,
}: SeventyTwoNamesOfGodProps) => {
  const bind = useDoubleTap((ev) => navigation?.doubleClickHandler(ev), 200, {
    onSingleTap: navigation?.clickHandler,
  });

  const namesWrapperClassNames = classnames("NamesWrapper");

  const svgNameClassNames = classnames("NomeSvg", {
    Zooming2x: navigation?.scale?.["2x"],
    Zooming3x: navigation?.scale?.["3x"],
  });

  return (
    <div className={namesWrapperClassNames}>
      {SeventyTwoNames?.map((nome, posicao) => (
        <article key={nome.svg} id={`nome${posicao + 1}`} {...bind}>
          <svg
            className={svgNameClassNames}
            preserveAspectRatio="xMidYMid meet"
            viewBox={nome.viewBox}
            width={nome.width}
            height={nome.height}
            // loading="lazy"
            onFocus={() => console.log("-> SVG ONFOCUS")}
          >
            <use
              className="UseSvg"
              xlinkHref={`images/nomes/${nome.svg}#nome`}
            />
          </svg>

          <strong className="Significa">{nome.means}</strong>
        </article>
      ))}
    </div>
  );
};

export default SeventyTwoNamesOfGod;
