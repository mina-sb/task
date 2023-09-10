import React from 'react'
import img from "../../assets/saly-1.png";
import Button from '../UIElements/Button';


const DesignToCode = () => {
  return (
    <section className="flex flex-col items-start lg:flex-row justify-between mx-8 md:mx-16 xl:mx-40">
      <div className="basis-5/12 mt-20">
        <h1
          className={`text-4xl font-extrabold mt-6 text-slate-800 leading-normal`}
        >
          From
          <span className="text-[#356dff]"> design </span> your to
          <br />
          code and back.
        </h1>
        <p className="text-sm mt-8 text-zinc-500 w-11/12 text-justify leading-6">
          Startups typically begin by a founder (solo-founder) or co-founders
          who have a way to solve a problem. The founder of a startup will begin
          market validation by problem interview, solution interview, and
          building a minimum viable product (MVP), i.e. a prototype, to develop
        </p>
        <Button
          text="Let's discuss"
          style="bg-slate-900 border-slate-900 border-2 text-white mt-6"
        />
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

export default DesignToCode;