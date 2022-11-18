import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Students from './Students';
import Dashboard from './Dashboard';

import CreateStaff from './CreateStaff';

import CreateStudent from './CreateStudent';
import Sidebar from './Sidebar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './External.css'
import Topbar from './Topbar';
import Staff from './Staff';
import ViewStudents from './ViewStudents';
import View_a_mentor from './View_a_mentor';
import AddStudents from './AddStudents';



function App() {
  return (
    <BrowserRouter>
      <div id="wrapper">
        
        <Sidebar/>
        <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <Topbar/>
          <Routes>
          <Route path='/' element={<Dashboard/>}></Route>
          <Route path='/Staff' element={<Staff/>}></Route>
          <Route path='/Staffcreate' element={<CreateStaff/>}></Route>
          <Route path='/Students' element={<Students/>}></Route>      
          <Route path='/StudentCreate' element={<CreateStudent/>}></Route>
          <Route path='/ViewStudents/:id' element={<ViewStudents/>}></Route>
          <Route path='/View_a_mentor/:id' element={<View_a_mentor/>}></Route>
          <Route path='/AddStudents/:id' element={<AddStudents/>}></Route>
          </Routes>
        </div>
        </div>
      </div>
      </BrowserRouter>
  );
}

export default App;
