import React from 'react'
import './TakeAttendance.css'
import TakePicIpLocation from './takePhoto/TakePicIpLocation'
import UserHeader from '../UserHeader/UserHeader'
import AttendanceTimer from './AttendanceTimer/AttendanceTime'
import employee from "../../../assets/employee.png";
import increase from '../../../assets/increase.png';
import fluent from "../../../assets/fluent.png"
import arrow from "../../../assets/arrow.png"
import UserSideBar from '../Sidebar/UserSideBar'

const UserTakeAttendance = () => {
  return (
    <div className="flexwithsidebar">
      <UserSideBar/>
    <div className='takeattendacecontainer'>
      <UserHeader/>     
      <div className="attendanceContanier">    
        <div className="attendance_details">

            <div className="middleContainer">
              <TakePicIpLocation/>
             <div className="logInLogOut">

              <div className="login">
                <button className='login-btn'>Login</button>
                <div className='login-time-btn'>
                <span className='login-time'>Time</span>
                <span className='login-time'>8:02:09 AM</span>
                </div>
                </div>


              <div className="logOut">
                <button className='logout-btn'>LogOut</button>
                <div className='logout-time-btn'>
                <span className='logout-time'>Time</span>
                <span className='logout-time'>6:02:10 PM</span>
                </div>

                </div>
              <div className="breaktime">
                <p className='break-btn'>Break</p>
                <div className='break-cont'>
                  <div className='bk-btn'>
                    <span className='bk-time'>Time</span>
                    <span className='pm-time'>01:15:00 PM</span>
                  </div>
                  <span><img className='arrow' src={arrow} alt="arrow"/> </span>
                  <div className='bk-btn'>
                  <span className='bk-time'>Time</span>
                  <span className='mx-1'>01:45:00 AM</span>
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
          <p className='work-para mx-3'>Working Hours</p>
            <div className='work-inc'>
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

export default UserTakeAttendance
