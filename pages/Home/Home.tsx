import { delay } from "lodash";
import Head from "next/head";
import { LegacyRef, useEffect, useRef, useState } from "react";
import HeadProperties from "../../Components/Head";
import NavigationByPosition from "../../Components/NavigationByPosition";
import SeventyTwoNamesOfGod from "../../Components/SeventyTwoNamesOfGod";
import { NamesOfGodType } from "../../types";
import clearUrl from "./helpers/clearUrl";

interface HomePageProps {
  SeventyTwoNames: NamesOfGodType;
}

const Home = ({ SeventyTwoNames }: HomePageProps) => {
  const [showingNavByPosition, setShowingNavByPosition] = useState(false);

  const sessionRef: LegacyRef<HTMLElement> | null = useRef(null);

  const onScrollHandler = delay(
    () => clearUrl(window),
    1400,
    "-> URL Cleared!"
  );

  useEffect(() => {
    if (window) {
      sessionRef?.current?.addEventListener("scroll", () => onScrollHandler);

      return sessionRef?.current?.removeEventListener(
        "scroll",
        () => onScrollHandler
      );
    }
  }, [sessionRef, onScrollHandler]);

  if (!SeventyTwoNames) {
    return null;
  }

  return (
    <>
      <Head>
        <title>72 nomes de deus</title>

        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=yes, viewport-fit=cover"
        />

        <HeadProperties />
      </Head>

      <main>
        <section ref={sessionRef}>
          <header>
            <h1>72 nomes de deus</h1>
          </header>

          <SeventyTwoNamesOfGod
            SeventyTwoNames={SeventyTwoNames}
            setShowingNavByPosition={setShowingNavByPosition}
          />

          <footer>Feito para compartilhar</footer>
        </section>

        <NavigationByPosition
          SeventyTwoNames={SeventyTwoNames}
          setShowPanel={setShowingNavByPosition}
          showing={showingNavByPosition}
        />

        <aside></aside>
      </main>
    </>
  );
};

export default Home;
