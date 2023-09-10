import React from 'react'
import user1 from "../../assets/user-1.png";
import user2 from "../../assets/user-2.png";


const Card = (props) => {
  return (
    <div className="bg-white rounded-r-3xl w-96	 rounded-tl-3xl rounded-bl-md py-6 px-10 shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]">
      {props.children}
    </div>
  );
}

export default Card