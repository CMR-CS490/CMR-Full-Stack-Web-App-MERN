import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login/styles.css";

const Register = () => {
   // Hooks
   const history = useNavigate();

   // State
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
   const [password2, setPassword2] = useState("");
   const [role, setRole] = useState("");


   // Send the username and password to the Backend Server after the user clicks Submit.
   async function registerUser(event) {
      event.preventDefault(); // Disable redirection after Submit button is pressed.
      console.log(role);
      if((username.length * password.length) === 0) {
         document.getElementsByClassName("error")[0].innerHTML = "Please enter a username and password.";
         document.getElementsByClassName("error")[0].style.display = "block";
         return;
      } else if (password !== password2) {
         document.getElementsByClassName("error")[0].innerHTML = "Passwords do not match";
         document.getElementsByClassName("error")[0].style.display = "block";
         return;
      } else if (role !== "teacher" && role !== "student") {
         document.getElementsByClassName("error")[0].innerHTML = "Please select a role";
         document.getElementsByClassName("error")[0].style.display = "block";
         return;
      }

      const response = await fetch("http://localhost:5002/api/register", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({
            username,
            password,
            role,
         }),
      });

      const data = await response.json();
      console.log({ data });

      if (data.status === "ok") {
         window.location.href = '/login'
      }
   }

   

   return (
      <div className="wrapper">
         <div id="formContent">
            <br />
            <br />
            <h1>Register</h1>
            <br />
            <h3 className="error">Error</h3>
            <br />
            <form onSubmit={registerUser}>
               <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Username" />
               <br />
               <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
               <br />
               <input value={password2} onChange={(e) => setPassword2(e.target.value)} type="password" placeholder="Confirm Password" />
               <br />
               <br />
               {/* <input value={first_name} onChange={(e) => setFirstname(e.target.value)} type="text" placeholder="First Name" />
               <br />
               <input value={last_name} onChange={(e) => setLastname(e.target.value)} type="text" placeholder="Last Name" />
               <br /> */}
               <select onChange={(e) => setRole(e.target.value)} defaultValue="">
               <option value="">---</option>
                  <option value="student">Student</option>
                  <option value="teacher">Teacher</option>
               </select>
               <input type="submit" value="Register" />
            </form>
         </div>

         <div>
            <button hidden onClick={() => console.log( {username, password, role} )}>debugging button</button>
         </div>
      </div>
   );
};

export default Register;
