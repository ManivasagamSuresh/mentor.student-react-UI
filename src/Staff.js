import React, { useEffect, useState } from 'react'
import axios from 'axios';
import StaffCard from './StaffCard';
import { Link } from 'react-router-dom';
import { Config } from './Config';

function Staff() {
    const [staffs,setStaffs]=useState([])
    useEffect(()=>{
        staffdata();
    },[])
    
       let staffdata = async()=>{
            try{
                let staffs = await axios.get(`${Config.api}/mentor`);
                // console.log(staffs);
                setStaffs(staffs.data);
            }
            catch(error){
                alert('error')
            }
        }
    
  return (
    <div className='container'>
        <div className='row'>
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 class="h3 mb-0 text-gray-800">Staff Lists</h1>
                        <Link to={'/Staffcreate'} class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                class="fas fa-download fa-sm text-white-50"></i> Create Staff</Link>
                    </div> 
     {    
        staffs.map((items)=>{
        return <StaffCard item={items}/>
        
    })
    }
    </div>
    </div>

  )
}

export default Staff