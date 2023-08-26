"use client";
import React, { useEffect } from "react";
import { useTernaryDarkMode } from "usehooks-ts";

const ToggleTheme = () => {
  const { isDarkMode, ternaryDarkMode, setTernaryDarkMode } =
    useTernaryDarkMode();

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
    }
  }, [isDarkMode]);

  return (
    <form>
      <label htmlFor={"dark"}>dark</label>
      <input type={"radio"} name={"theme"} id={"dark"} />
      <label htmlFor={"light"}>theme</label>
      <input type={"radio"} name={"theme"} id={"light"} />
      <div>
        <p suppressHydrationWarning>
          Current theme: {isDarkMode ? "dark" : "light"}
        </p>
        <p suppressHydrationWarning>ternaryMode: {ternaryDarkMode}</p>
        <p>
          Select a mode
          <br />
          <select
            name="select-ternaryDarkMode"
            onChange={(ev) =>
              setTernaryDarkMode(ev.target.value as unknown as any)
            }
            value={ternaryDarkMode}
            suppressHydrationWarning
          >
            <option value="light">light</option>
            <option value="system">system</option>
            <option value="dark">dark</option>
          </select>
        </p>
      </div>
    </form>
  );
};

export default ToggleTheme;
