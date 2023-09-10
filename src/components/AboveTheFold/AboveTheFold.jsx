import React from 'react'
import img from "../../assets/saly-3.png";
import {h1} from './AboveTheFold.module.css'
import Button from '../UIElements/Button';


const AboveTheFold = () => {
  return (
    <section className="flex flex-col items-start lg:flex-row justify-between mx-8 md:mx-16 xl:mx-40">
      <div className="basis-5/12 mt-20">
        <h1
          className={`${h1} font-extrabold mt-6 text-slate-800 leading-normal`}
        >
          The <span className="text-[#356dff]">template</span> your
          <br />
          startup needed
        </h1>
        <p className="text-sm mt-8 text-zinc-500 w-10/12 leading-6">
          A startup or start-up is a company or project undertaken by an
          entrepreneur to seek, develop, and validate a scalable business model.
        </p>
        <div className=" mt-8">
          <Button
            text="Let's disccus"
            style="bg-[#356dff] border-[#356dff] hover:bg-slate-900 hover:border-slate-900"
          />
          <Button text="Learn more" outline={true} style="ml-4" />
        </div>
      </div>
      <div className="basis-7/12 	">
        <div className="relative">
          <div className="absolute w-8/12	 aspect-square rounded-full bg-blue-300	top-20 inset-x-1/3"></div>
          <div className="z-50 w-aut top-0 relative ">
            <img src={img} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboveTheFold