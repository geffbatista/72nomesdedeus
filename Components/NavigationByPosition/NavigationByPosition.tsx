import classnames from "classnames";
import { event } from "../../lib/gtag";
import NavigationMenu from "../NavigationMenu";
import { NavigationByPositionProps } from "./types";

const NavigationByPosition = ({
  SeventyTwoNames,
  setShowPanel,
  showing,
}: NavigationByPositionProps) => {
  const panelClassNames = classnames("Panel", {
    Showing: showing,
  });

  const overlayClassNames = classnames("Overlay", {
    Showing: showing,
  });

  const handleCloseClick = () => {
    event({
      category: "NavigationByPosition",
      action: "click-to-close",
      label: "close-menu",
    });

    return setShowPanel(false);
  };

  return (
    <>
      <NavigationMenu
        className={panelClassNames}
        SeventyTwoNames={SeventyTwoNames}
        onClick={() => setShowPanel(false)}
      />
      <button
        className={overlayClassNames}
        title="Fechar"
        onClick={handleCloseClick}
      />
    </>
  );
};

export default NavigationByPosition;
