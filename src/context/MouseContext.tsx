import React, { createContext, useState, ReactNode } from "react";

export const MouseContext = createContext({
  shadowPosition: "3px 3px",
});

interface Props {
  readonly children: ReactNode;
}

interface Mouse {
  x: number;
  y: number;
}

export function MouseContextProvider(props: Props) {
  const [mouse, setMouse] = useState<Mouse>({ x: 0, y: 0 });

  document.onmousemove = (e) => {
    setMouse({
      x: e.x,
      y: e.y,
    });
  };

  return (
    <MouseContext.Provider
      value={{ shadowPosition: calculateShadowPosition(mouse) }}
    >
      {props.children}
    </MouseContext.Provider>
  );
}

function calculateShadowPosition(mouse: Mouse) {
  const x =
    (10 * mouse.x - 5 * document.body.clientWidth) / document.body.clientWidth;

  const y =
    (10 * mouse.y - 5 * document.body.clientHeight) /
    document.body.clientHeight;

  return `${x}px ${y}px 0`;
}
