import React from 'react'



const Card = (props) => {
  return (
    <div
      className={`bg-white rounded-r-3xl w-96 rounded-tl-3xl rounded-bl-md  shadow-[rgba(0,_0,_0,_0.2)_0px_20px_40px] ${props.style}`}
    >
      {props.children}
    </div>
  );
}

export default Card