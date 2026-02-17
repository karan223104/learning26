import React from 'react'

export const MapDemo7 = () => {
    var students =[
        {id:1, name:"ratan", marks:34, age:12, city:"ahemdabad", gender:"female"},
        {id:2, name:"karan", marks:32, age:13, city:"bhavnagar", gender:"male"},
        {id:3, name:"satish", marks:44, age:34, city:"surat", gender:"male"},
        {id:4, name:"rahul", marks:98, age:23, city:"surendranagar", gender:"male"},
        {id:5, name:"choksi", marks:74, age:52, city:"botad", gender:"female"},
        {id:6, name:"pratika", marks:67, age:78, city:"dwarka", gender:"female"},
        {id:7, name:"tevatiya", marks:24, age:45, city:"somnath", gender:"male"}

    ]
  return (
    <div>
        <h1>MapDemo7</h1>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>MARKS</th>
                    <th>AGE</th>
                    <th>CITY</th>
                    <th>GENDER</th>
                </tr>
            </thead>
            <tbody>
                {students.map((student) =>{
                    return(
                        <tr>
                            <td style={{backgroundColor: student.id % 2 !== 0 && "orange"}}>{student.id}</td>
                            <td style={{backgroundColor: student.name.startsWith("r") && "brown"}}>{student.name}</td>
                            <td>{student.marks}</td>
                            <td>{student.age}</td>
                            <td>{student.city}</td>
                            <td>{student.gender}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
  )
}
