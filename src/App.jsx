import React, {useEffect, useState} from "react";
import { Routes, Route, Navigate, BrowserRouter, Router } from "react-router-dom";
import { isMobile } from 'react-device-detect';
import LoginPage from "./components/loginPage/LoginPage";
import Admin from "./components/AdminDashboard/Admin";
import User from "./components/UserDashboard/User";
import Attendence from "./components/AdminDashboard/Attendence/Attendence";
import Calanderdata from "./components/Calendar/Calanderdata"
import TakeAttendance from "./components/UserDashboard/TakeAttendance/TakeAttendance";
import AddEmployee from "./components/AdminDashboard/AddEmployee/AddEmployee";
import ErrorComponent from "./components/MobileErrorComponent/ErrorComponent";
import ProtectedRoute from "./ProtectedRoute";
import UserTakeAttendance from "./components/UserDashboard/TakeAttendance/UserTakeAttendance";
import AttendanceDetails from "./components/UserDashboard/AttendaceDetails/AttendanceDetails";


function App(){

  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const updateStatus = () => {
    setIsLoggedIn((prev) => !prev);
  }

  useEffect(() => {
    if (isMobile) {

      window.location.href = '/mobile-not-supported';

    }
  }, []);
  return (
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/mobile-not-supported" element={<Navigate to="/error" replace />} />
        <Route path="/error" element={<ErrorComponent />} />
        <Route element={<ProtectedRoute isLoggedIn={isLoggedIn}/>}>
            <Route path="/admin" element={<Admin/>} />
            <Route path="/user" element={<User/>} />
            <Route path="/Calanderdata" element={<Calanderdata/>} />
            <Route path="/attendance" element={<Attendence/>} />
            <Route path="/takeAttendance" element={<TakeAttendance/>}/>
            <Route path="/UsertakeAttendance" element={<UserTakeAttendance/>}/>
            <Route path="/addEmployee" element={<AddEmployee/>}/>
            <Route path="/UserAttendanceData" element={<AttendanceDetails/>}/>
        </Route>   
      </Routes>
    
  )
}
export default App;