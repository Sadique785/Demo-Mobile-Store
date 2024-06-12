import React, { useEffect, useState } from 'react'

function redux() {


    var [state, setState] = useState(0)
    console.log(state)

    const handleClick = () => {
        setState(state+1)
    }

    useEffect(()=>{
       
    }, [])

  return (
    <div>
        <button onClick={handleClick} >Click</button>
        <p> current state: {state}</p>
    </div>
  )
}

export default redux