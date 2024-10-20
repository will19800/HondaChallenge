"use client"
import "./login.css"
import {useState} from "react";
import Link from "next/link"
export default function LoginPage() {

    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
      setIsChecked((prev) => !prev);
    };
    
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      alert("Logged in!");
    };

    const handleForgotPass = (e: React.FormEvent) => {
      e.preventDefault();
      alert("Oh no!");
    };
  
    return (
      <div className="login-container">
        <h1 className="login-title">LOGIN</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required className="form-input" />
          </div>
  
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required className="form-input" />
          </div>
      
          <div className = "checkbox">
            <label>
              <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange}/>
              Remember me?
            </label>
          </div>

          <button type="submit" className="login-button">Sign In</button>
          
          <div className="forgot-password">
            <Link href="{/forgotPass}" onClick={handleForgotPass}>
              Forgot password?
            </Link>
          </div>

          <div className="new-account">
            <Link href="{/new-account}">
              Create an account
            </Link>
          </div>
        </form>
      </div>
    );
  }