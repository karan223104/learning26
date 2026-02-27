import React, { useEffect } from 'react'
import { useState } from 'react'

export const UseEffectDemo1 = () => {
    const [count, setCount] = useState(0)
    
    useEffect(()=>{
         console.log("use effect called...")
    },[count])
  return (
    <div>
        <h1>UseEffectDemo1</h1>
        <button onClick={()=>{setCount(count+1)}}>count {count}</button>
    </div>
  )
}
