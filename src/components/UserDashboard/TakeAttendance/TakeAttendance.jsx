import React, { useState, useEffect } from 'react';
import './TakeAttendance.css'
import TakePicIpLocation from './takePhoto/TakePicIpLocation'
import AttendanceTimer from './AttendanceTimer/AttendanceTime'
import employee from "../../../assets/employee.png"
import increase from '../../../assets/increase.png'
import fluent from "../../../assets/fluent.png"
import arrow from "../../../assets/arrow.png"
import SideBar from '../../AdminDashboard/Sidebar/SideBar'
import AdminHeader from '../../AdminDashboard/AdminHeader/AdminHeader'

const TakeAttendance = () => {

  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);


  return (
    <div className="flexwithsidebar">
      <SideBar/>
    <div className='takeattendacecontainer'>
      <AdminHeader/>     
      <div className="attendanceContanier">    
        <div className="attendance_details">

            <div className="middleContainer">
              <TakePicIpLocation className='webCamForm'/>
             <div className="logInLogOut">

              <div className="login">
                <button className='login-btn'>Login</button>
                <div className='login-time-btn'>
                <span className='login-time'>Time</span>
                <span className='login-time'>{currentTime}</span>
                </div>
                </div>


              <div className="logOut">
                <button className='logout-btn'>LogOut</button>
                <div className='logout-time-btn'>
                <span className='logout-time'>Time</span>
                <span className='logout-time'>{currentTime}</span>
                </div>

                </div>
              <div className="breaktime">
                <p className='break-btn'>Break</p>
                <div className='break-cont'>
                  <div className='bk-btn'>
                    <span className='bk-time'>Time</span>
                    <span className='pm-time'>{currentTime}</span>
                  </div>
                  <span><img className='arrow' src={arrow} alt="arrow"/> </span>
                  <div className='bk-btn'>
                  <span className='bk-time'>Time</span>
                  <span className='mx-1'>{currentTime}</span>
                  </div>
                </div>
                </div>
             </div>
            </div>

        </div>
        <div className="employeeRightSidebar">
          <div className="employeeDetails">
               <img src={employee} alt='emplyee-img' />
               <h4>User Name</h4>
               <spna>Employee ID</spna>
               <spna>Designation</spna>
               <span>Mail ID</span>
          </div>
          <div className="livetime">
              <AttendanceTimer/>
          </div>
          <div className="WorkingHours">
            <div className='hours'>
            <span className="hour-time">08:30 Hrs</span>
          <img className='fluent-img' src={fluent} alt='fluent-md'/>
          </div>
          <p className='work-para mt-2'>Working Hours</p>
            <div className='work-inc mt-2'>
            <img className='increase' src={increase} alt="increase" />
          <span className='para'>+2% Increase than yesterday</span>
          </div>
         
          </div>
        </div>
      </div>
    </div>
    </div>            
  )
}

export default TakeAttendance



















// import React from 'react'
// import './TakeAttendance.css'
// import TakePicIpLocation from './takePhoto/TakePicIpLocation'
// import UserHeader from '../UserHeader/UserHeader'
// import Sidebar from '../UserSidebar/Sidebar'
// import Timer from '../Timer/Timer'

// const TakeAttendance = () => {
//   return (
//     <div>
//       <UserHeader/>     
//       <div className="attendanceContanier mx-5">
//         <div><Sidebar/></div>       
//         <div className="attendance_details">
//             <div className="middleContainer">
//               <TakePicIpLocation/>
//           <div className="logInLogOut">
//               <div className="login">Login</div>
//               <div className="logOut">logOut</div>
//               <div className="breaktime">breaktime</div>
//           </div>
//             </div>
//         </div>
//         <div className="employeeRightSidebar">
//           <div className="employeeDetails">
//                 employeeDetails
//           </div>
//           <div className="livetime">
//               <Timer/>
//           </div>
//           <div className="WorkingHours">
//               Working Hours
//           </div>
//         </div>
//       </div>
//     </div>            
//   )
// }

// export default TakeAttendance