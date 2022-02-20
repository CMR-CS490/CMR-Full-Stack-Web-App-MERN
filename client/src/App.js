import React from "react";

// Components
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Homepage from "./pages/Homepage/Homepage";

// Material UI Styles
// import useStyles from './pages/Homepage/styles'

const App = () => {
   // const classes = useStyles();

   return (
      <div>
         <div>
            <BrowserRouter>
               <Routes>
                  <Route path="/login" exact element={<Login />} />
                  <Route path="/register" exact element={<Register />} />
                  <Route path="/" exact element={<Homepage />} />
               </Routes>
               <Link to="/login">Login</Link>
               <br />
               <Link to="/register">Register</Link>
               <br />
               <Link to="/">Home</Link>
            </BrowserRouter>
         </div>
         <div>
            {/* <Dashboard></Dashboard> */}
         </div>
      </div>
   );
};

export default App;
