import React from 'react'

const Button = (props) => {
  return (
    <button className={`rounded-r-3xl rounded-tl-3xl rounded-bl-md text-white text-sm py-3 px-6 ${props.style}`}>
      {props.text}
    </button>
  );
}

export default Button