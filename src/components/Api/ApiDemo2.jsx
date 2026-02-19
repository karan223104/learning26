import React from 'react'
import axios from 'axios'
import { useState } from 'react'

export const ApiDemo2 = () => {
    const [users, setUsers] = useState([])

    const getUsers = async() =>{
        const response = await axios.get("https://dummyjson.com/products")
        console.log(response)
        console.log(response.data)
        setUsers(response.data.products)
    }
  return (
    <div>
        <h1>ApiDemo2</h1>
        rafc
    </div>
  )
}
