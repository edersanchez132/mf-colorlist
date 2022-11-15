import React from 'react'
import Swal from  "sweetalert2"

const ColorList = ({colorsList=[]}) => {

  const handleCopyColor = (colorToCopy)=>{
    navigator.clipboard.writeText(colorToCopy);
    Swal.fire({
      position:"top-end",
      icon:"success",
      title:`Color: ${colorToCopy} Copied!`,
      showConfirmButton:false,
      timer:1200,
      timerProgressBar:true

    })
  }

  return (
    <div className="list-group text-center">
      {
        colorsList.length>0 ? colorsList.map ((color,index)=>(
          <button
            key={index}
            type='button'
            className='list-group-item list-group-item-action text-white'
            aria-current='true'
            style={{
              background:color,
              fontWeight:"bolder"
            }}
            onClick={()=>handleCopyColor(color)}
          >
            {color}
          </button>
          ) 
        ): <div className='alert alert-danger' role='alert'> <b>Sin elementos....</b></div>
      }
    </div>
  )
}

export default ColorList