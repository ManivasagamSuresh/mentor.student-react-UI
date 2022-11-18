import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { Config } from './Config';
import StudentCard from './StudentCard';
import Students from './Students';

function ViewStudents() {
    const [students,setStudents]=useState([])
    useEffect(()=>{
        studentdata();
    },[students])
    let params  = useParams()
    
       let studentdata = async()=>{
            try{
                let student = await axios.get(`${Config.api}/ViewMentorStudents/${params.id}`);
                // console.log(student.data);
            
                setStudents(student.data);
            }
            catch(error){
                alert('error')
            }
        }
    
  return (
    <div className='container'>
        <div className='row'>
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
                        {/* <h1 class="h3 mb-0 text-gray-800">Staff Lists</h1> */}
                        <Link to={`/addStudents/${params.id}`} class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                class="fas fa-download fa-sm text-white-50"></i> Add Students</Link>
                    </div> 
     {    
        students.map((items)=>{
        return <StudentCard item={items}/>
        
    })
    }
    </div>
    </div>

  )
  
}

export default ViewStudents