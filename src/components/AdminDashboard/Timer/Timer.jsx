import { useState, useEffect } from "react";
import './Timer.css'
import { NavLink } from "react-router-dom";
import TimerImg from '../../../assets/TimerImg.png'

function Timer() {
  const [presentTime, setPresentTime] = useState(
    new Date().toLocaleTimeString()
  );
  const [presentDate, setPresentDate] = useState(
    new Date().toLocaleDateString()
  );

  useEffect(() => {
    const intervalTimeId = setInterval(() => {
      setPresentTime(new Date().toLocaleTimeString());
    }, 1000);

    const intervalDateId = setInterval(() => {
      let date = new Date().getDate();
      let month = new Date().toLocaleString("en-US", { month: "long" });
      let year = new Date().getFullYear();
      setPresentDate(`${date} ${month} ${year}`);
    }, 1000);

    return () => {
      clearInterval(intervalTimeId);
      clearInterval(intervalDateId);
    };
  }, []);

  return (
    <>
      <div className="card" id="card">
        {/* <div className="card-body"> */}
          <div className="card_time my-5">
            <img
            className="timeImg"
              src={TimerImg}
              alt="sunriseicon"
            />
            <div className="timing">
            <span id="presenttime">{presentTime}</span>
            <span className="insight">RealTime Insight</span>
            </div>
          </div>
          <div className="card_date my-3">
            <span>Today :</span>
            <span id="presentdate">{presentDate}</span> 
          </div>
        {/* </div> */}
        <NavLink
          to="/takeAttendance"
          // className="mx-5"
        >
          <button className="btn attendenceBtn btn-primary">
            Take Attendance
          </button>
        </NavLink>
      </div>
    </>
  );
}

export default Timer;
