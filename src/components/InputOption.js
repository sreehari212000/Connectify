import React from 'react'
import "../css/inputoption.css"

function InputOption({Icon, title, color}) {
  return (
    <div className='inputoption' style={{color}}>
        <Icon />
         <h4>{title}</h4>
    </div>
  )
}

export default InputOption