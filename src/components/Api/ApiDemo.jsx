import React from 'react'
import axios from 'axios'
import { useState } from 'react'

export const ApiDemo = () => {
    
    const [message, setmessage] = useState("")
    const [users, setusers] = useState([])

    const getUsers = async() =>{

        const response = await axios.get("https://node5.onrender.com/user/user/")
        console.log(response)
        console.log(response.data)
        console.log(response.data.message)
        setmessage(response.data.message)
        console.log(response.data.data) 
        setusers(response.data.data)

    }
    
  return (
    <div>
        <h1>ApiDemo</h1>
        <button onClick={()=>{getUsers()}}>GET</button>
        <h1>message = {message}</h1>
        {
            users.map((user)=>{
                return <li>{user.name}</li>
            })
        }
        <table border="1" align="center">
        <thead>
          <tr>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>PASSWORD</th>
          </tr>
        </thead>
        <tbody>

        {
            users.map((table)=>{
                return <tr>
                            <td>{table.name}</td>
                            <td>{table.email}</td>
                            <td>{table.password}</td>
                        </tr>
            })
        }
        </tbody>
        </table>
    </div>
  )
}
