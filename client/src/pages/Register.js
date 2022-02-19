import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
   // Hooks
   const history = useNavigate();

   // State
   const [username, setUsername] = useState("");
   const [first_name, setFirstname] = useState("");
   const [last_name, setLastname] = useState("");
   const [password, setPassword] = useState("");
   const [role, setRole] = useState("");


   // Send the username and password to the Backend Server after the user clicks Submit.
   async function registerUser(event) {
      event.preventDefault(); // Disable redirection after Submit button is pressed.
      const response = await fetch("http://localhost:1337/api/register", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({
            username,
            first_name,
            last_name,
            password,
            role,
         }),
      });

      const data = await response.json();
      console.log({ data });

      if (data.status === "ok") {
         history.push("/login");
      }
   }

   

   return (
      <div>
         <div>
            <h1>Register</h1>
            <form onSubmit={registerUser}>
               <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Username" />
               <br />
               <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
               <br />
               <input value={first_name} onChange={(e) => setFirstname(e.target.value)} type="text" placeholder="First Name" />
               <br />
               <input value={last_name} onChange={(e) => setLastname(e.target.value)} type="text" placeholder="Last Name" />
               <br />
               <select onChange={(e) => setRole(e.target.value)} defaultValue="">
               <option value="">---</option>
                  <option value="student">Student</option>
                  <option value="teacher">Teacher</option>
               </select>
               <input type="submit" value="Register" />
            </form>
         </div>

         <div>
            <button onClick={() => console.log( {username, first_name, last_name, password, role} )}>debugging button</button>
         </div>
      </div>
   );
};

export default Register;
