import React from 'react'
import { useState } from 'react'

export const UseStateDemo4 = () => {
    const initialCount = 0
    const [count, setCount] = useState(initialCount) 
  return (
    <div>
        <h1>UseStateDemo4</h1>
        COUNT: {count}
        <button onClick={() => setCount(initialCount)}>RESET</button>
        <button onClick={() => setCount(count + 1)}>INCREASE</button> 
        <button onClick={() => setCount(count - 1)}>DECREASE</button>
    </div>
  )
}


// also make function instead of () => setCount()
// use prevCount = prevCount + 1
// it safe 
