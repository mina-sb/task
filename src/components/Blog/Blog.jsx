import React from 'react'
import Card from '../UIElements/Card';
import blog1 from "../../assets/blog-1.png";
import blog2 from "../../assets/blog-2.png";
import blog3 from "../../assets/blog-3.png";
import Button from '../UIElements/Button';


const Blog = () => {
  return (
    <div className="mt-24 text-center">
      <h4 className=" text-orange-500 bg-orange-100  mt-8 rounded-full text-md px-6 py-2 font-semibold inline-block">
        Blog
      </h4>
      <h3
        className={`text-[2.6rem] font-extrabold mt-6 text-slate-800 leading-normal`}
      >
        <span className="text-[#356dff]">Knowledge </span>
        Hub
      </h3>
      <div className="flex flex-col justify-center items-center md:flex-row mx-8 lg:mx-36 mt-10">
        <Card style="mx-6 px-3 py-3 mt-4">
          <img src={blog1} />
          <h4 className="text-base font-bold my-6 ml-1 text-left">
            How A Website Growths your Business
          </h4>
          <div className="flex justify-between items-center">
            <p className="text-justify text-xs">7 min read · September 12</p>
            <i class="bx bx-right-arrow-alt text-xl rounded-full px-3 py-2 text-slate-800 ml-2 border-gray-100	border-2 "></i>{" "}
          </div>
        </Card>
        <Card style="mx-6 px-2.5 py-3 mt-4">
          <img src={blog2} />
          <h4 className="text-base font-bold my-6 ml-1 text-left">
            How A Website Growths your Business
          </h4>
          <div className="flex justify-between items-center">
            <p className="text-justify text-xs">7 min read · September 12</p>
            <i class="bx bx-right-arrow-alt text-xl rounded-full px-3 py-2 text-white ml-2  bg-[#356dff] "></i>{" "}
          </div>
        </Card>
        <Card style="mx-6 px-2.5 py-3 mt-4">
          <img src={blog3} />
          <h4 className="text-base font-bold my-6 ml-1 text-left">
            How A Website Growths your Business
          </h4>
          <div className="flex justify-between items-center">
            <p className="text-justify text-xs">7 min read · September 12</p>
            <i class="bx bx-right-arrow-alt text-xl rounded-full px-3 py-2 text-slate-800 ml-2 border-gray-100	border-2 "></i>{" "}
          </div>
        </Card>
      </div>
      <Button text="Learn more" outline={true} style="ml-4 mt-16 " />
    </div>
  );
}

export default Blog