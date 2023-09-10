import React from 'react'
import img from "../../assets/saly-1.png";


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
          <div className="relative z-20">
            <img src={img} />
          </div>
          <h4 className="text-base font-bold my-4">Product Design</h4>
          <p className="text-xs	text-zinc-500">
            Startups typically begin by a founder (solo-founder) or co-founders
          </p>
        </div>
        <div className="basis-full md:basis-1/2 lg:basis-1/4 justify-center px-4 relative">
          <div className="absolute rounded-full w-36 h-36 bg-white left-1/2 transform -translate-x-1/2  top-12 z-0"></div>
          <div className="relative z-20">
            <img src={img} />
          </div>
          <h4 className="text-base font-bold my-4">Product Design</h4>
          <p className="text-xs	text-zinc-500">
            Startups typically begin by a founder (solo-founder) or co-founders
          </p>
        </div>
        <div className="basis-full md:basis-1/2 lg:basis-1/4 justify-center px-4 relative">
          <div className="absolute rounded-full w-36 h-36 bg-white left-1/2 transform -translate-x-1/2  top-12 z-0"></div>
          <div className="relative z-20">
            <img src={img} />
          </div>
          <h4 className="text-base font-bold my-4">Product Design</h4>
          <p className="text-xs	text-zinc-500">
            Startups typically begin by a founder (solo-founder) or co-founders
          </p>
        </div>
        <div className="basis-full md:basis-1/2 lg:basis-1/4 justify-center px-4 relative">
          <div className="absolute rounded-full w-36 h-36 bg-white left-1/2 transform -translate-x-1/2  top-12 z-0"></div>
          <div className="relative z-20">
            <img src={img} />
          </div>
          <h4 className="text-base font-bold my-4">Product Design</h4>
          <p className="text-xs	text-zinc-500">
            Startups typically begin by a founder (solo-founder) or co-founders
          </p>
        </div>
      </div>
    </section>
  );
}

export default Features