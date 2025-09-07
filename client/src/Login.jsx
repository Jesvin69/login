import{ BrowserRouter,Link, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import "./login.css";


function Login() {
  return (
    
<div className="login-container">
  <h2>Log in</h2>
  <form>
    <input type="text" name="username" placeholder="User Name" required />
    <input type="password" name="password" placeholder="Password" required />
    <button type="submit">Login</button>
  </form>
  <p>Create an account? <Link to="/Signup">Sign Up</Link></p>
</div>
  );
}

export default Login;