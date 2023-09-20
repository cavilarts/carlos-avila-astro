import { useState } from "react";
import Navigation from "./Navigation";
import SideNav from "./SideNav";

export default function Drawer() {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    setIsOpen((open) => !open);
  }

  return (
    <section className="relative grid auto-cols-[auto max-content] w-full">
      <section className="col-start-1 row-start-1 flex flex-col">
        <Navigation handleOpen={handleOpen} />
      </section>
      <SideNav isOpen={isOpen} handleOpen={handleOpen} />
    </section>
  );
}
