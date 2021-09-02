import classnames from "classnames";
import NavigationMenu from "../NavigationMenu";
import { NavigationByPositionProps } from "./types";

const NavigationByPosition = ({
  SetentaEDoisNomesDeDeus,
  setShowPanel,
  showing,
}: NavigationByPositionProps) => {
  const panelClassNames = classnames("Panel", {
    Showing: showing,
  });

  const overlayClassNames = classnames("Overlay", {
    Showing: showing,
  });

  return (
    <>
      <NavigationMenu
        className={panelClassNames}
        SetentaEDoisNomesDeDeus={SetentaEDoisNomesDeDeus}
        onClick={() => setShowPanel(false)}
      />
      <button
        className={overlayClassNames}
        title="Fechar"
        onClick={() => setShowPanel(false)}
      />
    </>
  );
};

export default NavigationByPosition;
