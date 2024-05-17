import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logInLogo from '../../assets/logInLogo.png';
import passwordEye from '../../assets/PasswordEye.png';
import "./LoginPage.css"; 

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false); 
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/auth/login", {
        username,
        password,
      });

      if (response.data && response.data.success) {
        // Authentication successful, navigate to appropriate page
        if (response.data.role === "admin") {
          navigate("/admin");
        } else {
          navigate("/user");
        }
      } else {
        setError("Incorrect username or password");
      }
    } catch (error) {
      setError("Error logging in");
    }
  };

  return (
    <>
      <div className="main-container">
        <div className="logo">
          <img src={logInLogo} alt="Logo" />
        </div>
        <div className="container_1">
          <h1>Welcome to</h1>
          <span className="kitGlobal"> RC Global Tech</span>
          <p className="kitPara">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
            itaque accusantium odio, soluta, corrupti aliquam quibusdam tempora
            at cupiditate quis eum maiores libero veritatis? Dicta facilis sint
            aliquid ipsum atque?
          </p>
        </div>
        <form className="formClass" onSubmit={handleSubmit}>
          <div className="logInSelection">
            <div className="userCheckbox">
            <input
              type="radio"
              name="userType"
              id="admin"
              value="admin"
              onChange={(e) => setUsername("admin")}
            />
            <label className="emp_adm_Label" htmlFor="admin">
              Admin
            </label>
            </div>
            <div className="userCheckbox">
            <input
              type="radio"
              name="userType"
              id="employee"
              value="employee"
              onChange={(e) => setUsername("employee")}
            />
            <label className="emp_adm_Label" htmlFor="employee">
              Employee
            </label>
            </div>
          </div>
          <div className="inputFields">
            <input
              type="text"
              placeholder="Username"
              className="userInput"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <div className="password-input-container">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="userInput"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <img
                src={passwordEye}
                alt="Toggle Password Visibility"
                className="eye-icon"
                onClick={togglePasswordVisibility}
              />
            </div>
          </div>
          <div className="rememberme">
            <input type="checkbox" className="remembermeCheck"/>
            <label htmlFor="#" className="remembermeLabel">Remember me</label>
          </div>
          <button type="submit" className="submitBtn">
            Submit
          </button>
          {error && <div className="text-danger">{error}</div>}
        </form>
      </div>
    </>
  );
}

export default LoginPage;
