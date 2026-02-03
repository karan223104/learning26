import React from 'react'
export default function ContentComponent ()  {

  var biodata ={
    name : "karan",
    role : "right hand batsman", 
    dob  : "01-01-2000",
    city : "indore",
    team : "india",


  }
  return (
    <div style={{backgroundColor:'yellow',margin:'5px',height:'auto',border:'2px solid black',minHeight:'500px'}}>
          <img src='/KL.jpg' alt="player image" height='100px' width='150px'/>
          <h1 style={{backgroundColor:'black', color:'white'}}>Biodata</h1>
          <h3>Name : {biodata.name}</h3>
          <h3>DOB : {biodata.dob}</h3>
          <h3>City : {biodata.city}</h3>
          <h3>Role : {biodata.role}</h3>
          <h3>Team : {biodata.team}</h3>
        
    </div>
  )
}






