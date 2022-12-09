import React, { ReactNode } from "react";

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
      className={
        "relative inline-block py-1 px-3 text-slate-50 rounded-xl border border-solid font-light tracking-tighter transition-all overflow-hidden " +
        `bg-${color}-800`
      }
    >
      {children}
    </li>
  );
};

export default Pill;