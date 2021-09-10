import { SyntheticEvent, useCallback } from "react";
import { event } from "../../lib/gtag";
import { NamesOfGodType } from "../../types";

interface NavigationMenuProps {
  className?: string;
  onClick?: () => void;
  SeventyTwoNames: NamesOfGodType;
}

const NavigationMenu = ({
  className,
  onClick,
  SeventyTwoNames,
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

  if (!SeventyTwoNames) {
    return null;
  }

  return (
    <nav className={className}>
      <ul>
        {SeventyTwoNames.map((nome, posicao) => (
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
