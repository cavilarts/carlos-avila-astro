import { AiOutlineClose } from "react-icons/ai";

export interface MenuProps {
  handleOpen?: () => void;
}

export default function Menu({ handleOpen }: MenuProps = {}) {
  return (
    <>
      <li className="block lg:hidden">
        {handleOpen && (
          <button
            className="flex items-center gap-2 border border-white p-2 rounded-xl w-full mb-4 uppercase justify-center"
            onClick={handleOpen}
          >
            <span>
              <AiOutlineClose />
            </span>
            <span>Close</span>
          </button>
        )}
      </li>
      <li>
        <a href="/projects">Projects</a>
      </li>
      <li>
        <a href="/about">About</a>
      </li>
      {/* <li>
        <a href="/blog">Blog</a>
      </li> */}
    </>
  );
}
