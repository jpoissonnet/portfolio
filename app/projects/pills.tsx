import React, { ReactNode } from "react";

const classes = [
  "delay-75",
  "delay-150",
  "delay-200",
  "delay-300",
  "delay-500",
];

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
      className={`inline-block py-1 px-3 text-slate-50 rounded-xl border border-solid font-light tracking-tighter saturate-50 ${classes[rank]} group-hover:saturate-100 duration-150 bg-${color}-800`}
    >
      {children}
    </li>
  );
};

export default Pill;
