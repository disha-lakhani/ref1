import React, { useEffect, useRef } from 'react'

const Autofocus = () => {

    let id=useRef()


    useEffect(()=>{
        id.current.focus()
    },[])


  return (
    <div>
        <input type="text" ref={id} />
       
    </div>
  )
}

export default Autofocus