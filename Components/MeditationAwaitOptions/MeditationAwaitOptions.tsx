import classnames from "classnames";
import { Dispatch, SetStateAction, useState } from "react";
import { PlaybackProps } from "../../types/playback";
import { TimerProps } from "../../types/timer";
import handleButtonClick from "./helpers/handleButtonClick";
import handleCloseClick from "./helpers/handleCloseClick";
import handleSubmit from "./helpers/handleSubmit";

export const MIN_MEDITATION_SECONDS = 1;
export const MAX_MEDITATION_SECONDS = 60;
export const MEDITATION_SECONDS = 13;

interface MeditationAwaitOptionsProps {
  navigation?: {
    setShow: Dispatch<SetStateAction<boolean>>;
    showing: boolean;
  };
  playback?: PlaybackProps;
  timer?: TimerProps;
}

const MeditationAwaitOptions = ({
  navigation,
  playback,
  timer,
}: MeditationAwaitOptionsProps) => {
  const [timeField, setTimeField] = useState<number | undefined>(
    playback?.meditationTime
  );

  const panelClassNames = classnames("Panel ThirdSize FromBottom", {
    Showing: navigation?.showing,
  });

  const overlayClassNames = classnames("Overlay", {
    Showing: navigation?.showing,
  });

  return (
    <>
      <div className={panelClassNames}>
        <form
          id="MeditationOptions"
          onSubmit={(ev) =>
            handleSubmit({
              ev,
              navigation,
              playback,
              timer,
            })
          }
        >
          <label htmlFor="MeditationTimeField">
            Quantos segundos iremos meditar em cada nome?
            <input
              type="number"
              name="meditation_await_time"
              id="MeditationTimeField"
              min={3}
              max={9999}
              value={timeField}
              onChange={(ev) => {
                // console.log(
                //   "-> ev?.currentTarget?.value: ",
                //   ev?.currentTarget?.value
                // );

                setTimeField(Number(ev?.currentTarget?.value));
              }}
            />
          </label>
          <button type="submit" onClick={handleButtonClick}>
            meditar
          </button>
        </form>
      </div>
      <button
        className={overlayClassNames}
        title="Fechar"
        onClick={(ev) => handleCloseClick(ev, navigation)}
      />
    </>
  );
};

export default MeditationAwaitOptions;
