import React, { useEffect } from "react";
import jwt from "jwt-decode";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
   return (
      <div>
         <h1>Dashboard</h1>
         <h1>this is a dashboard</h1>
      </div>
   );
};

export default Dashboard;

// const token = localStorage.getItem("token");
// const user = jwt.decode(token);
// console.log(user);

//    const history = useNavigate();

//    useEffect(() => {
//        console.log("Use Effect Ran (Something Rerendered)")

//       const token = localStorage.getItem("token");
//       if (token) {
//          const user = jwt.decode(token);
//          if (!user) {
//             localStorage.removeItem("token");
//             history.replace("/login"); // Reroute the user back to the login screen if the user does not exist.
//          } else {
//             // User does exist: Display their username.
//             <h1>{user}</h1>
//          }
//       }
//    }, []);
