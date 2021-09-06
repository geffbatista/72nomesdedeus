import { SyntheticEvent, useCallback } from "react";
import { event } from "../../lib/gtag";
import { NomesDeDeusType } from "../../types";

interface NavigationMenuProps {
  className?: string;
  onClick?: () => void;
  SetentaEDoisNomesDeDeus: NomesDeDeusType;
}

const NavigationMenu = ({
  className,
  onClick,
  SetentaEDoisNomesDeDeus,
}: NavigationMenuProps) => {
  const onClickHandler = useCallback(
    (ev: SyntheticEvent) => {
      event({
        category: "NavigationByPosition",
        action: "click-to-navigate",
        label: ev?.currentTarget?.textContent || undefined,
      });

      if (onClick) {
        return onClick();
      }
    },
    [onClick]
  );

  return (
    <nav className={className}>
      <ul>
        {SetentaEDoisNomesDeDeus.map((nome, posicao) => (
          <li key={nome.label}>
            <a
              href={`#nome${posicao + 1}`}
              title={nome.label}
              onClick={onClickHandler}
            >
              <em>{`#${posicao + 1}`}</em>
              <h2>{nome.means}</h2>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationMenu;
