import React from 'react'

const NavLinks = () => {
  return (
    <ul className="flex flex-row justify-between hidden lg:flex">
      <li>
        <a className="text-sm mx-6 font-bold">Home</a>
      </li>
      <li>
        <a className="text-sm mx-6 text-zinc-400 font-thin">Solutions</a>
      </li>
      <li>
        <a className="text-sm mx-6 text-zinc-400 font-thin">Services</a>
      </li>
      <li>
        <a className="text-sm mx-6 text-zinc-400 font-thin">About</a>
      </li>
      <li>
        <a className="text-sm mx-6 text-zinc-400 font-thin">Feedback</a>
      </li>
    </ul>
  );
}

export default NavLinks