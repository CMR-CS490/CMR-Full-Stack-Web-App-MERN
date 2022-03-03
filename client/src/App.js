import React from "react";

// Components
import { BrowserRouter, Routes, Route/*, Link*/ } from "react-router-dom";
import { useDispatch } from 'react-redux';
import Login from "./pages/Login/Login";
import Register from "./pages/Register";
//import Dashboard from "./pages/Dashboard";
import Homepage from "./pages/Homepage/Homepage";
import StudentDashboard from "./pages/Dashboards/student";
import TeacherDashboard from "./pages/Dashboards/teacher";

// Material UI Styles
// import useStyles from './pages/Homepage/styles'
document.title = "AutoGrader"
const App = () => {
   // const classes = useStyles();
   return (
        
         <BrowserRouter>
            <Routes>
               <Route path="/login" exact element={<Login />} />
               <Route path="/register" exact element={<Register />} />
               <Route path="/student" element={<StudentDashboard/>} />
               <Route path="/teacher" element={<TeacherDashboard/>} />
               <Route path="/teacher/:page" element={<TeacherDashboard/>} />
               <Route path="/" exact element={<TeacherDashboard />} />
               <Route path="/student/:page" element={<StudentDashboard/>} />
               {/* <Route path="/" exact element={<Homepage />} /> */}
            </Routes>
         </BrowserRouter>
     

      
   );
};

export default App;
