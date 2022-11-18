import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Config } from './Config'

function AddStudents() {
  const params = useParams()
    const[students,setStudents]=useState([])
    const[studentsList,setStudentsList]=useState([])
    useEffect(()=>{
        studentdata()
        
    },[])
    let studentdata =async()=>{
        let students =await axios.get(`${Config.api}/studentsAdd`);
        // let studentList =await axios.get(`${Config.api}/StudentsList`);
        setStudents(students.data);
        console.log(students.data);
        // setStudentsList(studentList.data);
    }

    let addStudent=async(items)=>{
      try {
        let student1 = await axios.get(`${Config.api}/ViewStudent/${items._id}`);
        let value = student1.data;
        console.log(value);

        let add = await axios.post(`${Config.api}/addingStudent/${params.id}`,value);
        studentdata();
        alert("added");
      } catch (error) {
        console.log(error)
      }  
      
    }
  return (

    <table class="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">dept</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
{students.map((items)=>{
 if(items._mID){
    
 }
 else{
  return(
    <tbody>
    <tr>
      {/* <th scope="row">1</th> */}
      <td>{`${items.name}`}</td>
      <td>{`${items.dept}`}</td>
      <td> <button onClick={()=>{
        addStudent(items)
        }
        }>Add</button></td>
    </tr>
    
    </tbody>
    )
 }
  


})
}
  
</table>
  )
}

export default AddStudents