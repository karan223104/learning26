import React from 'react'
import { useState } from 'react'

export const UseStateDemo1 = () => {

    const[count,setCount] = useState(0)

    const increaseCount = () =>{
        setCount(count+1)
        console.log("count after increase", count)
    }
  return (
    <div>
        <h1>UseStateDemo1</h1>
        <h1>count = {count}</h1>
        <button onClick={increaseCount}>+</button>
    </div>
  )
}
