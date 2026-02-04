import React from 'react'
import { useParams } from 'react-router-dom'
export const TeamDetails = () => {

    let teamName = useParams().detail
  return (
    <div>
        <h1>TeamDetails</h1>
        <h1>teamname...{teamName}</h1>
    </div>
  )
}
