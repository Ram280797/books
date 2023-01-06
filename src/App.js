import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar';
import "./sb-admin-2.css";
import Topbar from './Topbar';
import Dashboard from './Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import User from './User';
import Usercreate from './Usercreate';
import Viewuser from './Viewuser';
import Edituser from './Edituser';
import Student from './Student';
import Teacher from './Teacher';
function App() {
  return (
    <BrowserRouter>
    <div id='wrapper'>
    <Sidebar/>
    <div id="content-wrapper" class="d-flex flex-column">
    <div id="content">
      <Topbar/>
      <Routes>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/user' element={<User/>}></Route>
        <Route path='/user_create/Update' element={<Usercreate/>}></Route>
        <Route path='/book_list' element={<Student/>}></Route>
        <Route path='/user_teacher' element={<Teacher/>}></Route>
        <Route path='/user/:id' element={<Viewuser/>}></Route>
        <Route path='/edit' element={<Edituser/>}></Route>
      </Routes>
   
    </div>
  </div>
  </div></BrowserRouter>
  );
}

export default App;
