import React from 'react'
import { Link } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function StaffCard({item}) {
  return (
    <div className='col-lg-4 mt-3'>
    <div class="card" style={{width: "18rem"}}>
              <div class="card-body">
          <h2 class="card-title">{item.name}</h2>
          <p class="card-text">{item.dept}</p>

          <Link to={`/ViewStudents/${item._id}`} class="btn btn-primary">View Students</Link>

        </div>
      </div>
      </div>
  )
}

export default StaffCard