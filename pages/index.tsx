import { debounce } from "lodash";
import Head from "next/head";
import React, {
  Dispatch,
  LegacyRef,
  SetStateAction,
  SyntheticEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import HeadProperties from "../Components/Head";
import NavigationByPosition from "../Components/NavigationByPosition";
import { NomesDeDeusType } from "../types";
import { default as os72omesdedeus } from "./api/72-nomes-de-deus";

interface HomePageProps {
  SetentaEDoisNomesDeDeus: NomesDeDeusType;
}

const openNavigationPanel = (
  position: number,
  setShowPanel: Dispatch<SetStateAction<boolean>>,
  evento: SyntheticEvent
) => {
  evento.preventDefault();
  evento.stopPropagation();

  setShowPanel(true);
};

const onScrollHandler = debounce(() => {
  if (window && window !== undefined) {
    return window.history.pushState({}, "title", window.location.pathname);
  }
}, 1.2);

export default function Home({ SetentaEDoisNomesDeDeus }: HomePageProps) {
  const [showingNavByPosition, setShowingNavByPosition] = useState(false);

  const sessionRef: LegacyRef<HTMLElement> | null = useRef(null);

  useEffect(() => {
    sessionRef?.current?.addEventListener("scroll", () => onScrollHandler());

    return sessionRef?.current?.removeEventListener("scroll", () =>
      onScrollHandler()
    );
  }, [sessionRef]);

  return (
    <>
      <Head>
        <title>72 nomes de deus</title>

        <HeadProperties />
      </Head>

      <main>
        <section ref={sessionRef}>
          <header>
            <h1>72 nomes de deus</h1>
          </header>

          <div className="NamesWrapper">
            {SetentaEDoisNomesDeDeus.map((nome, posicao) => (
              <article key={nome.svg} id={`nome${posicao + 1}`}>
                <svg
                  className="NomeSvg"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox={nome.viewBox}
                  width={nome.width}
                  height={nome.height}
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
                    openNavigationPanel(
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

          <footer>Feito para compartilhar</footer>
        </section>

        <NavigationByPosition
          SetentaEDoisNomesDeDeus={SetentaEDoisNomesDeDeus}
          setShowPanel={setShowingNavByPosition}
          showing={showingNavByPosition}
        />

        <aside></aside>
      </main>
    </>
  );
}

// This function gets called at build time
export async function getStaticProps() {
  const SetentaEDoisNomesDeDeus = os72omesdedeus;

  return {
    props: { SetentaEDoisNomesDeDeus },
  };
}
