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

  const { dx, dy } = calculateShadowOffset(mouse);
  const shadowPosition = `${dx}px ${dy}px 0px`;

  return (
    <MouseContext.Provider value={{ shadowPosition }}>
      {props.children}
    </MouseContext.Provider>
  );
}

function calculateShadowOffset(mouse: Mouse) {
  return {
    dx:
      (10 * mouse.x - 5 * document.body.clientWidth) /
      document.body.clientWidth,
    dy:
      (10 * mouse.y - 5 * document.body.clientHeight) /
      document.body.clientHeight,
  };
}
