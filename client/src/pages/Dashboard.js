import React, { useEffect, useState } from "react";
import jwt from "jwt-decode";
// import { useNavigate } from "react-router-dom";

const Dashboard = () => {
   // const history = useNavigate();

   const [quote, setQuote] = useState("");
   const [tempQuote, setTempQuote] = useState("");

   async function populateQuote() {
      const req = await fetch("http://localhost:1337/api/quote", {
         method: "GET",
         headers: {
            "x-access-token": localStorage.getItem("token"),
         },
      });

      const data = req.json();
      if (data.status === "ok") {
         setQuote(data.quote);
      } else {
         alert(data.error);
      }
   }

   // Runs once: Find the token and populate the quote.
   useEffect(() => {
      // Get the token from localStorage.
      const token = localStorage.getItem("token");
      if (token) {
         const user = jwt.decode(token);
         if (!user) {
            // User does not exist | there is no token in localStorage: redirect the user back to the login page.
            localStorage.removeItem("token");
            // history.replace("/login");
         } else {
            // User does exist. Perform a request to the backend.
            populateQuote();
         }
      }
   }, []);

   async function updateQuote(event) {
      event.preventDefault()
      const req = await fetch("http://localhost:1337/api/quote", {
         method: "POST",
         headers: {
            'Content-Type': 'application/json',
            "x-access-token": localStorage.getItem("token"),
         },
         body: JSON.stringify({
            quote: tempQuote,
         }),
      });

      const data = req.json();
      if (data.status === "ok") {
         setQuote(data.quote);
         setTempQuote('')
      } else {
         alert(data.error);
      }
   }

   return (
      <div>
         <h1>Username</h1>
         <h1>Your quote : {quote || "No quote found"} </h1>
         <form onSubmit={updateQuote()}>
            <input type="text" placeholder="Quote" value={tempQuote} onChange={(e) => setTempQuote(e.target.value)}></input>
            <input type="submit" value="Update quote" />
         </form>
      </div>
   );
};

export default Dashboard;