import { useState } from "react";
import './styles.css';
const Login = () => {
   // State
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");

   // Send the username and password to the Backend Server after the user clicks Submit.
   async function loginUser(event) {
      event.preventDefault(); // Disable redirection after Submit button is pressed.
      const response = await fetch("http://localhost:5002/api/login", {
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
      console.log(data);
      // Check if the user exists
      if(data.user) {
        localStorage.setItem('token', data.user);
        localStorage.setItem('role', data.role);
        alert('Login successful')
        //window.location.href = '/dashboard'
      } else {
         document.getElementsByClassName("error")[0].innerHTML = "Invalid Credentials";
         document.getElementsByClassName("error")[0].style.display = "block";
      }
      // console.log(data);
   }

   return (
         <div className="wrapper">
            <div id="formContent">
               <br />
               <br />
               <h1>Login</h1>
               <br />
               <h3 className="error">Error</h3>
               <br />
               <form onSubmit={loginUser}>
                  <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Username" />
                  <br />
                  <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                  <br />
                  <br />
                  <input id="login" type="submit" value="Login" />
               </form>
            </div>
            
         </div>
   );
}

export default Login;
