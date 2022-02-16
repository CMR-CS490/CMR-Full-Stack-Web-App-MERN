import { useState } from "react";

const Login = () => {
   // State
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");

   // Send the username and password to the Backend Server after the user clicks Submit.
   async function loginUser(event) {
      event.preventDefault(); // Disable redirection after Submit button is pressed.
      const response = await fetch("http://localhost:1337/api/login", {
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

      // Check if the user exists
      if(data.user) {
        localStorage.setItem('token', data.user)
        alert('Login successful')
        window.location.href = '/dashboard'
      } else {
        alert('Invalid Credentials: Please check your username and password.')
      }
      // console.log(data);
   }

   return (
      <div>
         <h1>Login</h1>
         <form onSubmit={loginUser}>
            <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Username" />
            <br />
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="text" placeholder="Password" />
            <br />
            <input type="submit" value="Login" />
         </form>
      </div>
   );
}

export default Login;
