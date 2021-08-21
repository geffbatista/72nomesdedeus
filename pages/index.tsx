import classnames from "classnames";
import { delay } from "lodash";
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
import { NomesDeDeusType } from "../types";
import { SetentaEDoisNomes } from "./api/72-nomes-de-deus/data";

interface HomePageProps {
  SetentaEDoisNomesDeDeus: NomesDeDeusType;
}

interface NavegacaoPorPosicaoProps {
  SetentaEDoisNomesDeDeus: NomesDeDeusType;
  mostrarPainel: Dispatch<SetStateAction<boolean>>;
  exibindo?: boolean;
}

const lideComClickNaPosicao = (
  posicao: number,
  alterarNavPorPosicao: Dispatch<SetStateAction<boolean>>,
  evento: SyntheticEvent
) => {
  evento.preventDefault();
  evento.stopPropagation();

  alterarNavPorPosicao(true);
};

const NavegacaoPorPosicao = ({
  SetentaEDoisNomesDeDeus,
  mostrarPainel,
  exibindo,
}: NavegacaoPorPosicaoProps) => {
  const classesDoPainel = classnames("Painel", {
    Exibindo: exibindo,
  });

  const classesDoFundo = classnames("Fundo", {
    Exibindo: exibindo,
  });

  return (
    <>
      <nav className={classesDoPainel}>
        <ul>
          {SetentaEDoisNomesDeDeus.map((nome, posicao) => (
            <li key={nome.label}>
              <a
                href={`#nome${posicao + 1}`}
                title={nome.label}
                onClick={() => mostrarPainel(false)}
              >
                Nome {posicao + 1}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <button
        className={classesDoFundo}
        title="Fechar"
        onClick={() => mostrarPainel(false)}
      />
    </>
  );
};

const lideComOScroll = (window: Window & typeof globalThis) => {
  if (window) {
    delay(() => {
      window.location.hash = "";
    }, 1200);
  }
};

export default function Home({ SetentaEDoisNomesDeDeus }: HomePageProps) {
  const [mostrarNavPorPosicao, alterarNavPorPosicao] = useState(false);

  const sessionRef: LegacyRef<HTMLElement> | null = useRef(null);

  useEffect(() => {
    sessionRef?.current?.addEventListener("scroll", () =>
      lideComOScroll(window)
    );

    return sessionRef?.current?.removeEventListener("scroll", () =>
      lideComOScroll(window)
    );
  }, [sessionRef]);

  return (
    <div>
      <Head>
        <title>72 nomes de deus</title>
        <meta name="description" content="72 nomes de deus" />
        <link rel="icon" href="/favicon.ico" />
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
                    xlinkHref={`/nomes/${nome.svg}#nome`}
                  />
                </svg>

                <strong className="Significa">{nome.means}</strong>

                <button
                  type="button"
                  className="Posicao"
                  onClick={(evento) =>
                    lideComClickNaPosicao(
                      posicao + 1,
                      alterarNavPorPosicao,
                      evento
                    )
                  }
                >
                  {posicao + 1}
                </button>
              </article>
            ))}
          </div>
        </section>

        <NavegacaoPorPosicao
          SetentaEDoisNomesDeDeus={SetentaEDoisNomesDeDeus}
          mostrarPainel={alterarNavPorPosicao}
          exibindo={mostrarNavPorPosicao}
        />

        <aside></aside>
      </main>

      <footer>Feito para compartilhar</footer>
    </div>
  );
}

// This function gets called at build time
export async function getStaticProps() {
  const SetentaEDoisNomesDeDeus = SetentaEDoisNomes;

  return {
    props: { SetentaEDoisNomesDeDeus },
  };
}
