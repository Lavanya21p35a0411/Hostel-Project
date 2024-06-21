import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
 import Dashboard from './Project/Dashboard';
 import About_Hostel from './Project/About_Hostel';
 import Day_Out_Pass from './Project/Day_Out_Pass';
 import Sunday_Out_Pass from './Project/Day_Out_Pass_List';
 import Students from './Project/Students';
 import Staff from './Project/Staff';
 import Attendance_reports from './Project/Attendance_reports';
 import Pass_reports from './Project/Pass_reports';
 import Food_reports from './Project/Food_reports';
 import Home_Out_Pass from './Project/Home_Out_Pass';
 import Day_Out_Pass_List from './Project/Day_Out_Pass_List';
 import Home_Out_Pass_List from './Project/Home_Out_Pass_List';
 import Registration_form from './Project/Registration form';
import Complaint from './Project/Complaint';

// import Login_Page from './Project/Login_page';
function App() {
  return(
    <>
    <BrowserRouter> 
      <Dashboard/>

    <br/>
    <Routes>
      <Route path='/Day_Out_Pass' element={<Day_Out_Pass/>}/>
      <Route path='/Sunday_Out_Pass' element={<Sunday_Out_Pass/>}/>
      <Route path='/Students' element={<Students/>}/>
      <Route path='/About_Hostel' element={<About_Hostel/>}/>
      <Route path='/Staff' element={<Staff/>}/>
      <Route path='/Attendance_reports' element={<Attendance_reports/>}/>
      <Route path='/Pass_reports' element={<Pass_reports/>}/>
      <Route path='/Food_reports' element={<Food_reports/>}/>
      <Route path='/Home_Out_Pass' element={<Home_Out_Pass/>}/>
      <Route path='/Day_Out_Pass_List' element={<Day_Out_Pass_List/>}/>
      <Route path='/Home_Out_Pass_List' element={<Home_Out_Pass_List/>}/>
      <Route path='/Registration_form' element={<Registration_form/>}/>
      <Route path='/Complaint' element={<Complaint/>}/>

      

      {/* <Route path='/Login_Page' element={<Login_Page/>}/> */}


    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;














// ------------------------------------------------------------------------------------------------------------
// import Button from './Edits/Button';
// import Contact from './Edits/Contact';
// import Head from './Edits/Head';
// import Home from './Edits/Home';
// import About from './Edits/About';
// import Counter from './Edits/Counter'
// import Counter1 from './Edits/Counter1';
// import StudentsInfo from './Edits/StudentsInfo';
// import Trainees from './Edits/Trainees';
// import Addnames from './Edits/Addnames';


{/* <Route path='/Home' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/Counter' element={Counter}>Counter </Route>
      <Route path='/Counter1' element={Counter1}>Counter1 </Route> 
      <Route path='/Studentsinfo' element={<StudentsInfo/>}/>
      <Route path='/trainees' element={<Trainees/>}/>
      <Route path='/addname' element={<Addnames/>}/> */}