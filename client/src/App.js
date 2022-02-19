import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Homepage from "./pages/Homepage";

const App = () => {
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
