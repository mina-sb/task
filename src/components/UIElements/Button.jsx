import React from 'react'

const Button = (props) => {
  
    if(props.outline) {
      return (
        <button
          className={`rounded-r-3xl rounded-tl-3xl rounded-bl-md  text-sm py-3 px-6 transparent text-slate-900 border-slate-900 border-2 
                      hover:bg-slate-900  hover:text-white ease-in duration-300   
          ${props.style}`}
        >
          {props.text}
        </button>
      );
    } else {
         return (
           <button
             className={`rounded-r-3xl rounded-tl-3xl rounded-bl-md  text-sm py-3  border-2 text-white px-6 ease-in duration-300 hover:bg-[#356dff] hover:border-[#356dff] ${props.style}`}
           >
             {props.text}
           </button>
         );
    }
    
 
}

export default Button