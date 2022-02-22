import React from "react";

// Components
import { BrowserRouter, Routes, Route/*, Link*/ } from "react-router-dom";
import { useDispatch } from 'react-redux';
import Login from "./pages/Login/Login";
import Register from "./pages/Register";
//import Dashboard from "./pages/Dashboard";
import Homepage from "./pages/Homepage/Homepage";

// Material UI Styles
// import useStyles from './pages/Homepage/styles'

const App = () => {
   // const classes = useStyles();

   return (

         <BrowserRouter>
            <Routes>
               <Route path="/login" exact element={<Login />} />
               <Route path="/register" exact element={<Register />} />
               <Route path="/" exact element={<Homepage />} />
            </Routes>
         </BrowserRouter>
     

      
   );
};

export default App;
