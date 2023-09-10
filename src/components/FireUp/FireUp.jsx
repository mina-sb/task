import React from 'react'
import rocket from "../../assets/rocket.png";
import Button from '../UIElements/Button';

const FireUp = () => {
  return (
    <section className="bg-sky-50	mt-32 mb-10 pt-12 md:h-[14rem] lg:h-[17rem] rounded-2xl text-center mx-8 md:mx-16 xl:mx-24">
      <div className="flex flex-col-reverse md:flex-row">
        <div>
          <img src={rocket} className="md:-mt-28 lg:-mt-40 hidden md:block md:w-72 lg:w-96 md:ml-10 lg:ml-20" />
        </div>
        <div className="ml-16 text-left pr-2">
          <h6
            className={`text-2xl lg:text-[2.6rem] font-extrabold md:mt-1 lg:mt-6 text-slate-800 leading-normal inline-block`}
          >
            Fire up Your
            <span className="text-[#356dff]"> Rocket </span>!
          </h6>
          <p className="text-justify text-xs mt-4">
            Startups typically begin by a founder (solo-founder) or co-founders
            who
          </p>
          <Button
            text="Let's discuss"
            style="bg-slate-900 border-slate-900 border-2 text-white mt-8 mb-4"
          />
        </div>
      </div>{" "}
    </section>
  );
}

export default FireUp