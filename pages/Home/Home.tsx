import Head from "next/head";
import {
  LegacyRef,
  SyntheticEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { useTimer } from "react-timer-hook";
import HeadProperties from "../../Components/Head";
import MeditationAwaitOptions from "../../Components/MeditationAwaitOptions";
import { MEDITATION_SECONDS } from "../../Components/MeditationAwaitOptions/MeditationAwaitOptions";
import NavigationByPosition from "../../Components/NavigationByPosition";
import SeventyTwoNamesOfGod from "../../Components/SeventyTwoNamesOfGod";
import UserInteractions from "../../Components/UserInteractions";
import callAName from "../../lib/HomeHelpers/callAName";
import callNextName from "../../lib/HomeHelpers/callNextName";
import NowPlusSeconds from "../../lib/HomeHelpers/NowPlusSeconds";
import onScroll from "../../lib/HomeHelpers/onScroll";
import { HomePageProps } from "../../types/HomeTypes";

const Home = ({ SeventyTwoNames, isMeditating = false }: HomePageProps) => {
  const [isDarkModeActive, setDarkMode] = useState(true);
  const [actualName, setActualName] = useState(0);
  const [isPlaying, setPlaying] = useState(isMeditating);
  const [showingNavByPosition, setShowingNavByPosition] = useState(false);
  const [showingMeditationAwaitOptions, setShowMeditationAwaitOptions] =
    useState(false);
  const [meditationTime, setMeditationTime] = useState(MEDITATION_SECONDS);

  const mainRef: LegacyRef<HTMLElement> | null = useRef(null);
  const sessionRef: LegacyRef<HTMLElement> | null = useRef(null);

  const [showingControls, setShowingControls] = useState(true);

  const [scale, setScale] = useState({
    "2x": false,
    "3x": false,
  });

  const pageClickHandler = useCallback(
    (ev: SyntheticEvent) => {
      setShowingControls(!showingControls);

      ev.preventDefault();
      ev.stopPropagation();
    },
    [showingControls]
  );

  const pageDoubleClickHandler = useCallback(
    (ev: SyntheticEvent) => {
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
    },
    [scale]
  );

  // TIMER:
  const { seconds, isRunning, start, pause, resume, restart } = useTimer({
    expiryTimestamp: NowPlusSeconds(meditationTime),
    autoStart: isPlaying,
    onExpire: () => {
      if (window?.location?.hash) {
        callNextName(window);
      } else {
        callAName(window, 2);
      }
    },
  });
  // TIMER

  const timer = { seconds, isRunning, restart };

  useEffect(() => {
    const actualSessionRef = sessionRef?.current;

    actualSessionRef?.addEventListener("scroll", () =>
      onScroll({ isPlaying, timer, navigation: { actualName, setActualName } })
    );

    return () => {
      actualSessionRef?.removeEventListener("scroll", () =>
        onScroll({
          isPlaying,
          timer,
          navigation: { actualName, setActualName },
        })
      );
    };
  }, [setMeditationTime, actualName, isPlaying, timer]);

  useEffect(() => {
    const MeditatioTimeFromSessionStorage =
      window?.sessionStorage?.getItem("meditation-time");

    if (MeditatioTimeFromSessionStorage) {
      setMeditationTime(Number(MeditatioTimeFromSessionStorage));
    }
  }, []);

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

      <main
        className={!isDarkModeActive ? "LightTheme" : "DarkTheme"}
        onFocus={() => console.log("MAIN FOCUSED!")}
        ref={mainRef}
      >
        <section
          ref={sessionRef}
          onFocus={() => console.log("SECTION FOCUSED!")}
        >
          <header>
            <h1>72 nomes de deus</h1>
          </header>

          <UserInteractions
            theme={{
              isDarkModeActive,
              setDarkMode,
            }}
            navigation={{
              setShowMeditationAwaitOptions,
              setShowingNavByPosition,
              clickHandler: pageClickHandler,
              doubleClickHandler: pageDoubleClickHandler,
              scale,
              showingControls,
              actualName,
              setActualName,
              isPlaying,
            }}
            playback={{ playbackTime: seconds, isPlaying }}
            timer={{ seconds, isRunning, start, pause, resume, restart }}
          />

          <SeventyTwoNamesOfGod
            SeventyTwoNames={SeventyTwoNames}
            navigation={{
              setShowingNavByPosition,
              setShowMeditationAwaitOptions,
              doubleClickHandler: pageDoubleClickHandler,
              clickHandler: pageClickHandler,
              scale,
              actualName,
              setActualName,
            }}
            playback={{
              meditationTime: meditationTime,
              isPlaying: isPlaying,
              setPlaying: setPlaying,
              playbackTime: seconds,
            }}
            timer={{
              seconds,
              isRunning,
              start,
              pause,
              resume,
              restart,
            }}
          />

          <footer>Feito para compartilhar</footer>
        </section>

        <NavigationByPosition
          SeventyTwoNames={SeventyTwoNames}
          setShowPanel={setShowingNavByPosition}
          showing={showingNavByPosition}
        />

        <MeditationAwaitOptions
          navigation={{
            setShow: setShowMeditationAwaitOptions,
            showing: showingMeditationAwaitOptions,
          }}
          playback={{
            meditationTime: meditationTime,
            setMeditationTime: setMeditationTime,
            setPlaying: setPlaying,
          }}
        />

        <aside></aside>
      </main>
    </>
  );
};

export default Home;
