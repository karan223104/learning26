import React from 'react'
import { useState } from 'react'

export const UseStateDemo2 = () => {

    const[loading,setLoading] = useState(true)

    const stopLoader = () =>{
        setLoading(false)
    }
  return (
    <div>
        <h1>UseStateDemo2</h1>
        {
            loading == true && <h1>Loading...</h1>
        }
        <button onClick={stopLoader}>STOP</button>
    </div>
  )
}
