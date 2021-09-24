import classnames from "classnames";
import { SyntheticEvent, useCallback, useState } from "react";
import {
  MdAccessAlarm,
  MdBrightness3,
  MdDehaze,
  MdWbSunny,
} from "react-icons/md";
import { PlaybackProps } from "../../types/playback";
import { ThemeProps } from "../../types/theme";
import { TimerProps } from "../../types/timer";
import { MEDITATION_SECONDS } from "../MeditationAwaitOptions/MeditationAwaitOptions";
import ProgressiveSvgBorder from "../ProgressiveSvgBorder";
import openNavigationByPosition from "../SeventyTwoNamesOfGod/openNavigationByPosition";
import styles from "./UserIntereactions.module.scss";

const secondsHandler = (secs: number) => {
  return secs && `${secs}s`;
};

interface UserInteractionsProps {
  theme: ThemeProps;
  playback: PlaybackProps;
  timer: TimerProps;
  navigation: any;
}

const UserInteractions = ({
  theme,
  playback,
  timer,
  navigation,
}: UserInteractionsProps) => {
  const [showCountDown, setShowCountDown] = useState(timer?.isRunning);

  const { isDarkModeActive, setDarkMode } = theme;

  const ThemeChangerClickHandler = useCallback(() => {
    if (isDarkModeActive) {
      setDarkMode && setDarkMode(false);
    } else {
      setDarkMode && setDarkMode(true);
    }
  }, [isDarkModeActive, setDarkMode]);

  const aWaitClickHandler = useCallback(
    (ev: SyntheticEvent) => {
      if (timer?.isRunning) {
        timer?.pause && timer.pause();
      }

      navigation?.setShowMeditationAwaitOptions(true);

      ev.preventDefault();
      ev.stopPropagation();
    },
    [timer, navigation]
  );

  console.log("==============================>>");
  console.log("-> navigation.isPlaying: ", navigation.isPlaying);
  console.log("-> timer.isRunning: ", timer.isRunning);
  console.log("==============================//");

  return (
    <nav className={styles.UserInteractions}>
      <button
        type="button"
        className={classnames("PositionChanger", {
          Hidden: !navigation?.showingControls,
        })}
        onClick={(event) =>
          openNavigationByPosition(
            // posicao + 1,
            1,
            navigation.setShowingNavByPosition,
            event
          )
        }
      >
        <MdDehaze width={20} height={20} className="Icon" />

        {navigation.actualName > 0 && (
          <span className="FloatingCircle">{navigation.actualName}</span>
        )}
      </button>

      <button
        type="button"
        className={classnames("ThemeChanger", {
          Hidden: !navigation?.showingControls,
        })}
        onClick={ThemeChangerClickHandler}
      >
        {isDarkModeActive && (
          <MdWbSunny width={20} height={20} className="Icon" />
        )}

        {!isDarkModeActive && (
          <MdBrightness3 width={20} height={20} className="Icon" />
        )}
      </button>

      <button
        type="button"
        className={classnames("AwaitChanger", {
          Hidden: !navigation?.showingControls,
        })}
        onClick={aWaitClickHandler}
      >
        {showCountDown && !!playback?.playbackTime && (
          <>
            {secondsHandler(playback?.playbackTime)}

            <ProgressiveSvgBorder
              size={40}
              strokeWidth={1}
              progress={(timer.seconds * 100) / MEDITATION_SECONDS}
            />
          </>
        )}

        {!showCountDown && (
          <MdAccessAlarm width={20} height={20} className="Icon" />
        )}
      </button>
    </nav>
  );
};

export default UserInteractions;
