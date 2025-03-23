import React from 'react'
import './Register.css'

const Register = () => {
  return (
    <div className="home-container">
        <img src="img2.jpg" alt="Background" className="home-img" />
  <form className="form-text">
  <label htmlFor="username">username:</label>
  <input name="username" type="text" placeholder="enter username" required/><br/><br/><br/>
 <label htmlFor="password">password:</label>
  <input name="password" type="password" placeholder="enter password" required/><br/><br/><br/>
  <label htmlFor="email">email id:</label>
  <input name="email" type="email" placeholder="enter email" required/><br/><br/><br/>
  <button type="submit" className="but">submit</button>
  </form>
    </div>
  )
}

export default Register
