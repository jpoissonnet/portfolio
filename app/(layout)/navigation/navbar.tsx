import Link from "next/link";
import NavLink from "./navbarLink";
import { NavMobile } from "./mobilenav";

const NavbarTop = () => {
  return (
    <nav className={"flex justify-between items-center h-16 bg-slate-800"}>
      <div
        className={
          "flex justify-between items-center w-full max-w-[1060px] mx-auto px-4"
        }
      >
        <Link href={"/"}>
          <h1 className={"text-2xl font-bold accent-slate-50"}>Jules P.</h1>
        </Link>
        <NavMobile />
        <ul className={"hidden list-none md:flex"}>
          <NavLink href={"/"}>Home</NavLink>
          <NavLink href={"/projects"}>Projects</NavLink>
          <NavLink href={"/playground"}>Playground</NavLink>
          <NavLink href={"/resume"}>Resume</NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarTop;
