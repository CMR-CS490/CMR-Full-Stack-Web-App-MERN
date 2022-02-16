import { useState } from "react";
import { useNavigate } from "react-router-dom"

const Register = () => {
   // Hooks
   const history = useNavigate()

   // State
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");

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
            password,
         }),
      });

      const data = await response.json();
      console.log({ data });

      if (data.status == "ok") {
         history.push("/login");
      }
   }

   return (
      <div>
         <h1>Register</h1>
         <form onSubmit={registerUser}>
            <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Username" />
            <br />
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="text" placeholder="Password" />
            <br />
            <input type="submit" value="Register" />
         </form>
      </div>
   );
};

export default Register;
