import React, { CSSProperties, ReactNode } from "react";
import style from "./Pill.module.css";

const Pill = ({
  color,
  rank,
  children,
}: {
  color: string;
  rank: number;
  children: ReactNode;
}) => {
  return (
    <li
      className={style.pill}
      style={{ "--pill-color": color, "--rank": rank } as CSSProperties}
    >
      {children}
    </li>
  );
};

export default Pill;
