import React from 'react'
import img1 from "../../assets/saly-27.png";
import img2 from "../../assets/saly-10.png";
import img3 from "../../assets/saly-13.png";
import img4 from "../../assets/saly-43.png";


function Features() {
  return (
    <section className="bg-sky-50	 py-12 rounded-2xl text-center mx-8 md:mx-16 xl:mx-24">
      <h2 className=" text-orange-500 bg-orange-100  mt-6 rounded-full text-md px-6 py-2 font-semibold inline-block">
        FEATURES
      </h2>
      <h3
        className={`text-4xl font-extrabold mt-6 text-slate-800 leading-normal`}
      >
        Your Dream <span className="text-[#356dff]">Template</span>
      </h3>
      <div className="flex flex-wrap px-8">
        <div className="basis-full md:basis-1/2 lg:basis-1/4  justify-center px-4 relative">
          <div className="absolute rounded-full w-36 h-36 bg-white left-1/2 transform -translate-x-1/2  top-12 z-0"></div>
          <div className="z-20  justify-center flex relative mt-14">
            <img src={img1} className="w-36 h-36 " />
          </div>
          <h4 className="text-base font-extrabold mt-10">Product Design</h4>
          <p className="text-[0.6rem]	text-zinc-500 mt-4 mx-6">
            Startups typically begin by a founder (solo-founder) or co-founders
            who have
          </p>
        </div>
        <div className="basis-full md:basis-1/2 lg:basis-1/4 justify-center px-4 relative">
          <div className="absolute rounded-full w-36 h-36 bg-white left-1/2 transform -translate-x-1/2  top-12 z-0"></div>
          <div className="z-20  justify-center flex relative mt-14">
            <img src={img2} className="w-36 h-36 " />
          </div>
          <h4 className="text-base font-extrabold mt-10">Branding</h4>
          <p className="text-[0.6rem]	text-zinc-500 mt-4 mx-6">
            Startups typically begin by a founder (solo-founder) or co-founders
            who have
          </p>
        </div>
        <div className="basis-full md:basis-1/2 lg:basis-1/4 justify-center px-4 relative">
          <div className="absolute rounded-full w-36 h-36 bg-white left-1/2 transform -translate-x-1/2  top-12 z-0"></div>
          <div className="z-20  justify-center flex relative mt-14">
            <img src={img3} className="w-36 h-36 " />
          </div>
          <h4 className="text-base font-extrabold mt-10">
            Coding & Programming
          </h4>
          <p className="text-[0.6rem]	text-zinc-500 mt-4 mx-6">
            Startups typically begin by a founder (solo-founder) or co-founders
            who have
          </p>
        </div>
        <div className="basis-full md:basis-1/2 lg:basis-1/4 justify-center px-4 relative">
          <div className="absolute rounded-full w-36 h-36 bg-white left-1/2 transform -translate-x-1/2  top-12 z-0"></div>
          <div className="z-20  justify-center flex relative mt-14">
            <img src={img4} className="w-36 h-36 " />
          </div>
          <h4 className="text-base font-extrabold mt-10">Online Marketing</h4>
          <p className="text-[0.6rem]	text-zinc-500 mt-4 mx-6">
            Startups typically begin by a founder (solo-founder) or co-founders
            who have
          </p>
        </div>
      </div>
    </section>
  );
}

export default Features