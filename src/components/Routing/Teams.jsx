import React from 'react'
import { Link } from 'react-router-dom'

export const Teams = () => {

  return (
    <div>
        <h1>Ipl Teams</h1>
        <ul>
          <li><Link to="/teamdetails/csk">CSK</Link></li>
          <li><Link to="/teamdetails/rr">RR</Link></li>
          <li><Link to="/teamdetails/mi">MI</Link></li>
          <li><Link to="/teamdetails/rcb">RCB</Link></li>
          <li><Link to="/teamdetails/dc">DC</Link></li>
          <li><Link to="/teamdetails/lsg">LSG</Link></li>
          <li><Link to="/teamdetails/srh">SRH</Link></li>
          <li><Link to="/teamdetails/kkr">KKR</Link></li>
          <li><Link to="/teamdetails/pk">PK</Link></li>
          <li><Link to="/teamdetails/gt">GT</Link></li>
        </ul>
    </div>
  )
}
