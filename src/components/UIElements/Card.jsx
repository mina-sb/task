import React from 'react'



const Card = (props) => {
  return (
    <div className={`bg-white rounded-r-3xl w-96	 rounded-tl-3xl rounded-bl-md  shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] ${props.style}`}>
      {props.children}
    </div>
  );
}

export default Card