import React , {useState , useEffect} from 'react'
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import {Swiper, SwiperSlide} from "swiper/react";
import Card from '../UIElements/Card';
import styles from './Testimonial.module.css'
import user1 from "../../assets/user-1.png";
import user2 from "../../assets/user-2.png";


const Testimonial = () => {
    const [swiper, setSwiper] = React.useState(null);

    const nexto = () => {
      swiper.slideNext();
    };
    const prevto = () => {
      swiper.slidePrev();
  };
  


      const [slidesPerView, setSlidesPerView] = useState(2); 

      useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth >= 860) {
            setSlidesPerView(4);
          } else if (window.innerWidth >= 760) {
            setSlidesPerView(3);
          } else if (window.innerWidth >= 500) {
            setSlidesPerView(2);
          } else if (window.innerWidth >= 470) {
            setSlidesPerView(1);
          }
        };

        window.addEventListener("resize", handleResize);

        handleResize();

        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);

  return (
    <section className=" py-12  text-center ">
      <div className="bg-sky-50 rounded-2xl	absolute w-10/12 h-[660px]  ml-10 mr-8 lg:ml-28 lg:mr-24 box-border">
        <h2 className=" text-orange-500 bg-orange-100  mt-8 rounded-full text-md px-6 py-2 font-semibold inline-block">
          Testimonials
        </h2>
        <br />
        <h3
          className={`text-[2.6rem] font-extrabold mt-6 text-slate-800 leading-normal inline-block`}
        >
          <span className="text-[#356dff]">Trusted </span>
          by 100's
        </h3>
        <br />
        <h3
          className={`text-[2.6rem] -ml-16 font-extrabold text-slate-800 leading-normal inline-block`}
        >
          of clients
        </h3>
        <div className="inline-block ml-2 mt-4">
          <ul className="flex relative ">
            <li>
              <img
                src={user1}
                className="w-10 h-10 rounded-full border-4	border-white hover:scale-125 hover:cursor-pointer duration-100"
              />
            </li>
            <li>
              <img
                src={user2}
                className="w-10 h-10 rounded-full absolute left-8 border-4	border-white hover:scale-125 hover:cursor-pointer duration-100"
              />
            </li>
            <li>
              <img
                src={user1}
                className="w-10 h-10 rounded-full  absolute left-16  border-4	border-white hover:scale-125 hover:cursor-pointer duration-100"
              />
            </li>
          </ul>
        </div>
        <div className={`${styles.swiperNavBtns} mt-[22rem] z-20`}>
          <button onClick={prevto}>
            <i class="bx bx-left-arrow-alt text-3xl rounded-full px-3 py-2 mr-2 bg-white hover:bg-slate-800 hover:text-white"></i>{" "}
          </button>
          <button onClick={nexto}>
            <i class="bx bx-right-arrow-alt text-3xl rounded-full px-3 py-2 text-white ml-2 bg-slate-800 "></i>{" "}
          </button>
        </div>
      </div>

      <div className="mt-72 pb-8 ">
        <Swiper
          className={styles.swiper}
          slidesPerView={slidesPerView}
          spaceBetween={40}
          navigation
          onSwiper={(e) => {
            setSwiper(e);
          }}
        >
          <SwiperSlide>
            <div className={`${styles.resslide} mx-[6rem] md:mx-0`}>
              <Card style="py-6 px-10">
                <h4 className="text-base font-bold my-4 text-left">
                  Product Design
                </h4>
                <p className="text-justify text-xs">
                  There’s no other program that walks you through exactly what
                  you need to know to start an online store fast, written by
                  someone who has built several 7-figure ecommerce businesses
                  from scratch.
                </p>
                <div className="flex mt-6 items-center">
                  <img src={user1} className="w-12 " />
                  <div className="ml-3">
                    <h4 className="text-sm font-bold text-left">
                      Product Design
                    </h4>
                    <p className="text-justify text-xs">There’s</p>
                  </div>
                </div>
              </Card>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={`${styles.resslide} mx-[6rem] md:mx-10`}>
              <Card style="py-6 px-10">
                <h4 className="text-base font-bold my-4 text-left">
                  Product Design
                </h4>
                <p className="text-justify text-xs">
                  There’s no other program that walks you through exactly what
                  you need to know to start an online store fast, written by
                  someone who has built several 7-figure ecommerce businesses
                  from scratch.
                </p>
                <div className="flex mt-6 items-center">
                  <img src={user1} className="w-12 " />
                  <div className="ml-3">
                    <h4 className="text-sm font-bold text-left">
                      Product Design
                    </h4>
                    <p className="text-justify text-xs">There’s</p>
                  </div>
                </div>
              </Card>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={`${styles.resslide} mx-[6rem]  md:mx-[5rem]`}>
              <Card style="py-6 px-10">
                <h4 className="text-base font-bold my-4 text-left">
                  Product Design
                </h4>
                <p className="text-justify text-xs">
                  There’s no other program that walks you through exactly what
                  you need to know to start an online store fast, written by
                  someone who has built several 7-figure ecommerce businesses
                  from scratch.
                </p>
                <div className="flex mt-6 items-center">
                  <img src={user1} className="w-12 " />
                  <div className="ml-3">
                    <h4 className="text-sm font-bold text-left">
                      Product Design
                    </h4>
                    <p className="text-justify text-xs">There’s</p>
                  </div>
                </div>
              </Card>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={`${styles.resslide} mx-[6rem] md:mx-[7.5rem]`}>
              <Card style="py-6 px-10">
                <h4 className="text-base font-bold my-4 text-left">
                  Product Design
                </h4>
                <p className="text-justify text-xs">
                  There’s no other program that walks you through exactly what
                  you need to know to start an online store fast, written by
                  someone who has built several 7-figure ecommerce businesses
                  from scratch.
                </p>
                <div className="flex mt-6 items-center">
                  <img src={user1} className="w-12 " />
                  <div className="ml-3">
                    <h4 className="text-sm font-bold text-left">
                      Product Design
                    </h4>
                    <p className="text-justify text-xs">There’s</p>
                  </div>
                </div>
              </Card>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={`${styles.resslide} mx-[6rem] md:mx-[10rem]`}>
              <Card style="py-6 px-10">
                <h4 className="text-base font-bold my-4 text-left">
                  Product Design
                </h4>
                <p className="text-justify text-xs">
                  There’s no other program that walks you through exactly what
                  you need to know to start an online store fast, written by
                  someone who has built several 7-figure ecommerce businesses
                  from scratch.
                </p>
                <div className="flex mt-6 items-center">
                  <img src={user1} className="w-12 " />
                  <div className="ml-3">
                    <h4 className="text-sm font-bold text-left">
                      Product Design
                    </h4>
                    <p className="text-justify text-xs">There’s</p>
                  </div>
                </div>
              </Card>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonial