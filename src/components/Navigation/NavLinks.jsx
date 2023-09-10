import React, {useState} from 'react'
import style from "./NavLinks.module.css";

const NavLinks = () => {
  const[activeItem , setActiveItem] = useState(0)

  return (
    <ul className="flex-row justify-between hidden lg:flex">
      <li>
        <a
          onClick={() => {
            setActiveItem(0);
          }}
          className={`text-sm mx-6 hover:text-slate-900 hover:cursor-pointer  ${
            activeItem === 0
              ? `font-bold text-slate-900 ${style.active}`
              : "font-thin text-zinc-400 "
          }`}
        >
          Home
        </a>
      </li>
      <li>
        <a
          onClick={() => {
            setActiveItem(1);
          }}
          className={`text-sm mx-6 hover:text-slate-900 hover:cursor-pointer  ${
            activeItem === 1
              ? `font-bold text-slate-900 ${style.active}`
              : "font-thin text-zinc-400 "
          }`}
        >
          Solutions
        </a>
      </li>
      <li>
        <a
          onClick={() => {
            setActiveItem(2);
          }}
          className={`text-sm mx-6  hover:text-slate-900 hover:cursor-pointer ${
            activeItem === 2
              ? `font-bold text-slate-900 ${style.active}`
              : "font-thin text-zinc-400 "
          }`}
        >
          Services
        </a>
      </li>
      <li>
        <a
          onClick={() => {
            setActiveItem(3);
          }}
          className={`text-sm mx-6  hover:text-slate-900 hover:cursor-pointer ${
            activeItem === 3
              ? `font-bold text-slate-900 ${style.active}`
              : "font-thin text-zinc-400 "
          }`}
        >
          About
        </a>
      </li>
      <li>
        <a
          onClick={() => {
            setActiveItem(4);
          }}
          className={`text-sm mx-6  hover:text-slate-900 hover:cursor-pointer ${
            activeItem === 4
              ? `font-bold text-slate-900 ${style.active}`
              : "font-thin text-zinc-400 "
          }`}
        >
          Feedback
        </a>
      </li>
    </ul>
  );
}

export default NavLinks