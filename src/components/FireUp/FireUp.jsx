import React from 'react'
import rocket from "../../assets/rocket.png";
import Button from '../UIElements/Button';

const FireUp = () => {
  return (
    <section className="bg-sky-50	mt-32 mb-10 pt-12 h-[17rem] rounded-2xl text-center mx-8 md:mx-16 xl:mx-24">
      <div className="flex">
        <img src={rocket} className="-mt-40 w-96 ml-28" />
        <div className="ml-16 text-left">
          <h6
            className={`text-[2.6rem] font-extrabold mt-6 text-slate-800 leading-normal inline-block`}
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
            style="bg-slate-900 border-slate-900 border-2 text-white mt-8"
          />
        </div>
      </div>{" "}
    </section>
  );
}

export default FireUp