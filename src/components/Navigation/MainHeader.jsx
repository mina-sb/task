import React from 'react'
import NavLinks from './NavLinks';

const MainHeader = () => {
  return (
    <header className="rounded-full mx-8 md:mx-16 xl:mx-32 p-6 mt-8 shadow-[0_12px_30px_rgb(0,0,0,0.08)] flex flex-row justify-between items-center">
      <div className="flex flex-row items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 46 46"
        >
          <g id="Group_3" data-name="Group 3" transform="translate(-264 -63)">
            <circle
              id="Ellipse_6"
              data-name="Ellipse 6"
              cx="23"
              cy="23"
              r="23"
              transform="translate(264 63)"
              fill="#356dff"
            />
            <path
              id="Icon_awesome-rocket"
              data-name="Icon awesome-rocket"
              d="M21.819.825A.686.686,0,0,0,21.292.3,15.677,15.677,0,0,0,17.728,0C13.27,0,10.6,2.385,8.6,5.529H4.1A2.073,2.073,0,0,0,2.248,6.674L.113,10.942a1.037,1.037,0,0,0,.928,1.5H5.524l-.971.971a1.382,1.382,0,0,0,0,1.955l2.2,2.2a1.382,1.382,0,0,0,1.955,0l.971-.971v4.486a1.037,1.037,0,0,0,1.5.928l4.264-2.134a2.07,2.07,0,0,0,1.145-1.853v-4.51c3.136-2,5.529-4.683,5.529-9.119a15.323,15.323,0,0,0-.3-3.568ZM16.59,7.257a1.728,1.728,0,1,1,1.728-1.728A1.728,1.728,0,0,1,16.59,7.257Z"
              transform="translate(274.218 76.664)"
              fill="#fff"
            />
          </g>
        </svg>
        <span className="ml-2 font-base text-lg">Start</span>
        <span className="font-base text-lg text-[#356dff]">up</span>
      </div>
      <NavLinks />
      <div>
        <a className="border-gray-50 rounded-full border-2 text-xs px-4 py-2 hidden md:inline-block">
          Download App
        </a>
        <a className="bg-slate-900	border-slate-900 ml-2 text-white rounded-full border-2 text-xs px-4 py-2">
          Let's Discuss
        </a>
        <a className="bg-slate-900	border-slate-900 ml-2 pt-2	 text-white rounded-full border-2 text-xs px-4 py-2 lg:hidden">
          <i class="bx bx-menu text-md"></i>
        </a>
      </div>
    </header>
  );
}

export default MainHeader