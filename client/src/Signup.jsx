import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./Signup.css";

function Signup() {
  return (
<div className="signup-container">
  <h2>Sign up</h2>
  <form>
    <input type="text" name="fullname" placeholder="Full Name" required />
    <input type="email" name="email" placeholder="Email" required />
    <input type="password" name="password" placeholder="Password" required />
    <input type="password" name="confirm" placeholder="Confirm Password" required />
    <button type="submit">Sign Up</button>
  </form>
  <p>Already have an account? <Link to="/Login">Log in</Link></p>
</div>
  );
}

export default Signup;

