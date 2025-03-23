import React from 'react'
import './login.css';
import {Link} from 'react-router-dom'
const Login = () => {
  return (
    <div className="home-container">
       <img src="img3.jpeg" alt="Background" className="home-img" />
  <form className="form-text"> 
  <label htmlFor="username">username:</label>
  <input name="username" type="text" placeholder="enter username" required/><br/><br/><br/>
 <label htmlFor="password">password:</label>
  <input name="password" type="password" placeholder="enter password" required/><br/><br/><br/>
  <button type="text" className="butt">submit</button>
  <Link to="/Register">Register here</Link>
  </form>
  </div>
  
  )
}

export default Login
