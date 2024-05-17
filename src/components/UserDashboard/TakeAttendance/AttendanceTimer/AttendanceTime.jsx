import { useState, useEffect } from "react";
import './AttendanceTime.css'
// import TimerImg from '../../../assets/TimerImg.png'
import TimerImg from "../../../../assets/TimerImg.png"




function AttendanceTimer() {
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
      <div className="card-1" id="card-1">
        {/* <div className="card-body"> */}
          <div className="card_time_1 my-5">
            <img
            className="timeImg_1"
              src={TimerImg}
              alt="sunriseicon"
            />
            <div className="timing_1">
            <span id="presenttime_1">{presentTime}</span>
            <span className="insight_1">RealTime Insight</span>
            </div>
          </div>
          <div className="card_date_1">
            <span>Today :</span>
            <span id="presentdate_1">{presentDate}</span> 
          </div>
        
      </div>
    </>
  );
}

export default AttendanceTimer;