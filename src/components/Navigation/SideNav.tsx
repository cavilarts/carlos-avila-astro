import Menu from "./Menu";

export interface SideNavProps {
  isOpen: boolean;
  handleOpen: () => void;
}

export default function SideNav({ isOpen, handleOpen }: SideNavProps) {
  return (
    <section>
      <div
        className={`fixed top-0 right-0 w-screen h-screen bg-slate-50 opacity-75 z-0 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={handleOpen}
      ></div>
      <div
        className={`fixed top-0 right-0 w-2/3 h-screen bg-black z-10 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col gap-4 p-4 text-white">
          <Menu handleOpen={handleOpen} />
        </ul>
      </div>
    </section>
  );
}
