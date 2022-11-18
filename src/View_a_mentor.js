import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Config } from './Config';
import StaffCard from './StaffCard';
import Students from './Students';

function View_a_mentor() {
    const [mentor,setMentor]=useState([]);
    useEffect(()=>{
        mentorData();
    },[])
    let params  = useParams()
    
       let mentorData = async()=>{
            try{
                let mentor1 = await axios.get(`${Config.api}/ViewMentor/${params.id}`);
                console.log(mentor1.data);
                // let data = mentor1.data
                setMentor(mentor1.data);
                // console.log(mentor);
            }
            catch(error){
                alert('error')
            }
        }
    
  return (
    <div className='container'>
        <div className='row'>
        {    
        mentor.map((items)=>{
        return <StaffCard item={items}/>
        
    })
    }
        </div>

    </div>
  )
}

export default View_a_mentor