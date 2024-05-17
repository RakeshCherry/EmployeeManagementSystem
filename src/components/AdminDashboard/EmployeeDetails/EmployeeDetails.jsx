import React from 'react'
import './EmployeeDetails.css'
import Timer from '../Timer/Timer'
import totalEmpImg from '../../../assets/totalEmpImg.png'
import positiveSign from '../../../assets/plus.png'
import increase from '../../../assets/increase.png'
import materialTime from '../../../assets/material-time.png'
import weather from '../../../assets/mdi_weather-time.png'
import decrease from '../../../assets/decrease.png'
import increaseBlue from '../../../assets/increaseBlue.png'
import halfmoon from '../../../assets/halfMoon.png'
import timeOut from '../../../assets/timeOut.png'
import empCalender from '../../../assets/empCalender.png'
// import increase from '../../../assets/increase.png'
// import increase from '../../../assets/increase.png'
function EmployeeDetails() {
  return (
    <div className='grid-container'>
      <div className="timer"><Timer/></div>
        <div className="totalEmployees sizeClass">
          <div className="empImgNum">
          <span className='totalNum'>452</span>
          <img className='empImg' src={totalEmpImg} alt="peopleImg" />
          </div>
          <h5>Total Employees</h5>
          <div className="plusEmpAdd">
          <span className='plus'><img className='plusImg' src={positiveSign} alt="plus" /></span>
          <span className='para'>2 new employees added!</span>
          </div>
        </div>
        <div className="onTime sizeClass">
        <div className="empImgNum">
          <span className='totalNum'>360</span>
          <img className='empImg' src={materialTime} alt="peopleImg" />
          </div>
          <h5>On Time</h5>
          <div className="plusEmpAdd">
          <span className='plus'><img className='increase' src={increase} alt="increase" /></span>
          <span className='para'>-10% Less than yesterday</span>
          </div>
        </div>
        <div className="absent sizeClass">
        <div className="empImgNum">
          <span className='totalNum'>30</span>
          <img className='empImg' src={weather} alt="peopleImg" />
          </div>
          <h5>Absent</h5>
          <div className="plusEmpAdd">
          <span className='plus decreasespan'><img className='decrease' src={decrease} alt="decrease" /></span>
          <span className='para'>+3% Increase than yesterday</span>
          </div>
        </div>
        <div className="lateArrival sizeClass">
        <div className="empImgNum">
          <span className='totalNum'>62</span>
          <img className='empImg' src={timeOut} alt="peopleImg" />
          </div>
          <h5>Late Arrival</h5>
          <div className="plusEmpAdd">
          <span className='plus decreasespan'><img className='decrease' src={decrease} alt="decrease" /></span>
          <span className='para'>2 new employees added!</span>
          </div>
        </div>
        <div className="earlyDepartures sizeClass">
        <div className="empImgNum">
          <span className='totalNum'>6</span>
          <img className='empImg' src={halfmoon} alt="peopleImg" />
          </div>
          <h5>Early Departures</h5>
          <div className="plusEmpAdd">
          <span className='plus'><img className='increaseImg' src={increase} alt="increase" /></span>
          <span className='para'>2 new employees added!</span>
          </div>
        </div>
        <div className="timeOff sizeClass">
        <div className="empImgNum">
          <span className='totalNum'>42</span>
          <img className='empImg' src={empCalender} alt="peopleImg" />
          </div>
          <h5>Present</h5>
        <div className="plusEmpAdd">
        <span className='plus increaseBlue'><img className='increaseImg' src={increaseBlue} alt="increase" /></span>
          <span className='para'>2 new employees added!</span>
        </div>
        </div>
    </div>
  )
}

export default EmployeeDetails