import React from 'react'
import { useState } from 'react'

export const UseStateDemo5 = () => {
    const [name, setName] = useState({ firstName:'', lastName:''})
  return (
    <div>
        <h1>UseStateDemo5</h1>
        <input type="text" value={name.firstName} onChange={e => setName({...name,firstName: e.target.value})}></input>
        <input type="text" value={name.lastName} onChange={e => setName({...name,lastName: e.target.value})}></input>
        <h4>Your firstName is - {name.firstName}</h4>
        <h4>Your lastName is - {name.lastName}</h4>
    </div>
  )
}
