import React from 'react'
import { Link } from 'react-router-dom'

function StudentCard({item}) {
  return (
    <div className='col-lg-4 mt-3'>
    <div class="card" style={{width: "18rem"}}>
        <div class="card-body">
          <h2 class="card-title">{item.name}</h2>
          <p class="card-text">{item.dept}</p>
          {/* <Link to={`/StudentProfile/${item.id}`} class="btn btn-primary">View Profile</Link> */}
          {item._mID?
          <Link to={`/View_a_mentor/${item._mID}`}>View Mentor</Link>
          :null}
        </div>
      </div>
      </div>
  )
}

export default StudentCard