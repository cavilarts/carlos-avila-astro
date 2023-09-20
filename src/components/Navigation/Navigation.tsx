import { RxHamburgerMenu } from "react-icons/rx";

import Menu from "./Menu";

export interface NavigationProps {
  handleOpen: () => void;
}

export default function Navigation({ handleOpen }: NavigationProps) {
  return (
    <nav className="bg-black p-4 text-white">
      <div className="max-w-7xl flex justify-between items-center w-full m-auto">
        <a href="/" aria-label="Carlos Avila" className="">
          <img
            src="/images/logo.svg"
            alt="Carlos Avila"
            className="w-[200px] h-[45px]] hidden lg:block"
          />
          <img
            src="/images/logoSmall.svg"
            alt="Carlos Avila"
            className="w-[100px] block lg:hidden"
          />
        </a>
        <section className="flex-none hidden lg:block">
          <ul className="flex gap-4">
            <Menu />
          </ul>
        </section>
        <section className="flex lg:hidden">
          <button className="text-xl" onClick={handleOpen}>
            <RxHamburgerMenu />
          </button>
        </section>
      </div>
    </nav>
  );
}
