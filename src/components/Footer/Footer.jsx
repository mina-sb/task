import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className="flex  mx-8 md:mx-16 xl:mx-48">
        <div className="basis-1/2 text-left mb-16">
          <span className=" text-orange-500 bg-orange-100  mt-8 rounded-full text-md px-6 py-2 font-semibold inline-block">
            Contact Us
          </span>
          <br />
          <span className="text-4xl mt-8 inline-block">Hello@Startup.com</span>
          <i class="bx bx-right-arrow-alt text-xl rounded-full px-3 py-2 -rotate-45 text-white bg-[#356dff] ml-12"></i>
          <div className="flex mt-8 items-center">
            <p className="text-justify text-xs inline-block">Social Media</p>
            <ul className="flex ml-6">
              <li>
                <i class="bx bxl-instagram text-xl rounded-full px-3 py-2 text-slate-900 ml-4 border-gray-100	border-2 "></i>
              </li>
              <li>
                <i class="bx bxl-facebook text-xl rounded-full px-3 py-2 text-slate-900 ml-4 border-gray-100	border-2 "></i>{" "}
              </li>
              <li>
                <i class="bx bxl-instagram text-xl rounded-full px-3 py-2 text-slate-900 ml-4 border-gray-100	border-2 "></i>{" "}
              </li>
            </ul>
          </div>
        </div>
        <div className="basis-1/2 mb-16">
          <span className="block   mt-8 font-semibold text-gray-400 text-md ">
            Quick Links
          </span>
          <div className="mt-6">
            <div className="flex">
              <span className="text-sm  basis-1/3 mt-3  text-slate-600">
                Home
              </span>
              <span className="text-sm basis-1/3 mt-3 text-slate-600">
                Vision
              </span>
              <span className="text-sm  basis-1/3 mt-3 text-slate-600">
                Privacy & Terms
              </span>
            </div>
            <div className="flex">
              <span className="text-sm basis-1/3 mt-3 text-slate-600">
                Journey
              </span>
              <span className="text-sm basis-1/3 mt-3 text-slate-600">
                Thinking
              </span>
              <span className="text-sm basis-1/3 mt-3 text-slate-600">
                Google
              </span>
            </div>
            <div className="flex">
              <span className="text-sm basis-1/3 mt-3 text-slate-600">
                Technology
              </span>
              <span className="text-sm basis-1/3 mt-3 text-slate-600">
                Join us
              </span>
              <span className="text-sm  basis-1/3 mt-3 text-slate-600">
                Alphabet
              </span>
            </div>
            <div className="flex">
              <span className="text-sm basis-1/3 mt-3 text-slate-600">
                Team
              </span>
              <span className="text-sm basis-1/3 mt-3 text-slate-600">
                Connect
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="  mx-8 md:mx-16 xl:mx-64 border-t-2 border-gray-200  mb-4 text-center">
        <p className="text-xs mt-6">
          Copyright 2022 Xtratheme. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer