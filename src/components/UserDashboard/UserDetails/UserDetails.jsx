import React, {useState, useRef} from 'react'
import './UserDetails.css'
import Timer from '../Timer/Timer'
import { MdCancel } from "react-icons/md";

function UserDetails() {


const [formData, setFormData] = useState({
    type: "",
    startDate: "",
    endDate: "",
    reason: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  function submitfun(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const obj = {
      type: data.get("type"),
      startDate: data.get("startdate"),
      endDate: data.get("enddate"),
      reason: data.get("reason"),
    };
    console.log(obj);
    setFormData({
      type: "",
      startDate: "",
      endDate: "",
      reason: "",
    });
  }

  const NewData = useRef(null);
  const openNewPage = () => {
    if (NewData.current) {
      NewData.current.showModal();
      document.body.classList.add("modal-opened");
    }
  };







  return (
    <>
    <div className='grid-container-1'>
      <div className="timer-1"><Timer/></div>
        <div className="onTime-1  sizeClass-1">
          <div className="empImgNum-1">
          <span className='totalNum-1'>Casual leaves</span>
          <span className='blank-img' ></span>
          </div>
          <div className="plusEmpAdd-1">
          <div className='color-data'>
          <span className="color" style={{ backgroundColor: 'rgba(52, 231, 70, 1)' }}></span>
          <span  className="totalUsedRem">Total : 10</span>
          </div>
          <div className='color-data'>
          <span className="color" style={{ backgroundColor: 'rgba(137, 151, 220)'}}> </span> 
          <span  className="totalUsedRem">Used : 5</span>
          </div>
          <div className='color-data'>
          <span className="color" style={{ backgroundColor: 'rgba(212, 128, 128)'}}> </span> 
          <span  className="totalUsedRem">Remaining : 5</span>
        </div>
          </div>
        </div>

        <div className="onTime-1 sizeClass-1">
        <div className="empImgNum-1">
          <span className='totalNum-1'>Sick leaves</span>
          <span className='blank-img' ></span>
          </div>
          
          <div className="plusEmpAdd-1">
          <div className='color-data'>
          <span className="color" style={{ backgroundColor: 'rgba(52, 231, 70, 1)'}}></span>
          <span className="totalUsedRem">Total : 10</span>
          </div> 
          <div className='color-data'>
          <span className="color" style={{ backgroundColor: 'rgba(137, 151, 220)'}}> </span> 
          <span className="totalUsedRem">Used : 5</span>
          </div>
          <div className='color-data'>
          <span className="color" style={{ backgroundColor: 'rgba(212, 128, 128)'}}> </span> 
          <span className="totalUsedRem">Remaining : 5</span>
          </div>
          </div>
        </div>

        <div className="absent-1 sizeClass-1">
        <div className="empImgNum-1">
          <span className='totalNum-1'>Earned leaves</span>
          <span className='blank-img' ></span>
          </div>
          <div className="plusEmpAdd-1">
          <div className='color-data'>
          <span className="color" style={{ backgroundColor: 'rgba(52, 231, 70, 1)'}}></span>
          <span className="totalUsedRem">Totla : 10</span>
          </div>
          <div className='color-data'>
          <span className="color" style={{ backgroundColor: 'rgba(137, 151, 220)'}}> </span> 
          <span className="totalUsedRem">Used : 5</span>
          </div>
          <div className='color-data'>
          <span className="color" style={{ backgroundColor: 'rgba(212, 128, 128)'}}> </span> 
          <span className="totalUsedRem">Remaining : 5</span>
          </div>
          </div>
        </div>

        <div className="lateArrival-1 sizeClass-1">
        <div className="empImgNum-1">
          <span className='totalNum-1'>Unpaid leaves</span>
          <span className='blank-img' ></span>
          </div>
          <div className="plusEmpAdd-1">
          <div className='color-data'>
          <span className="color" style={{ backgroundColor: 'rgba(52, 231, 70, 1)'}}></span>
          <span className="totalUsedRem">Total : 10</span>
          </div>
          <div className='color-data'>
          <span className="color" style={{ backgroundColor: 'rgba(137, 151, 220)'}}> </span> 
          <span className="totalUsedRem">Used : 5</span>
          </div>
          <div className='color-data'>
          <span className="color" style={{ backgroundColor: 'rgba(212, 128, 128)'}}> </span> 
          <span className="totalUsedRem">Remaining : 5</span>
          </div>
          </div>
        </div>

        <div className="earlyDepartures-1 sizeClass-1">
        <div className="empImgNum-1">
          <span className='totalNum-1'>Half day leaves</span>
          <span className='blank-img' ></span>
          </div>
          <div className="plusEmpAdd-1">
          <div className='color-data'>
          <span className="color" style={{ backgroundColor: 'rgba(52, 231, 70, 1)'}}> </span> 
          <span className="totalUsedRem">Total : 10</span>
          </div>
          <div className='color-data'>
          <span className="color" style={{ backgroundColor: 'rgba(137, 151, 220)'}}> </span> 
          <span className="totalUsedRem">Used : 5</span>
          </div>
          <div className='color-data'>
          <span className="color" style={{ backgroundColor: 'rgba(212, 128, 128)'}}> </span> 
          <span className="totalUsedRem">Remaining : 5</span>
          </div>
          </div>
        </div>
        <div className="leaveRequest">
          <button className='btn btn-primary' onClick={openNewPage}>Request for Leave</button>
        </div>

        <dialog ref={NewData} id="form">
      <div className="container-Data">
          <p className='Req-para'>Request for leave</p>
          <button id="closebtn"
            onClick={() => {
              let form = document.getElementById("form");
              form.close();
              document.body.classList.remove("modal-opened");
            }}>
            <MdCancel />
          </button>
        </div>
          
        <form onSubmit={(e) => submitfun(e)}  id="formdata">
          <div className="form-cont">
            <label className="type">Type :</label>
            <select
              className="form-select"
              name="type"
              value={formData.type}
              onChange={handleChange}
              required
            >
              <option value="">Select type</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>

          <div className="start-row form-cont">
            <label htmlFor="startdate" className="start-Date">
              Start Date:
            </label>
            <div className="inp-row">
              <input
                type="date"
                className="form-select"
                id="startdate"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="end-cont form-cont">
            <label htmlFor="enddate" className="End-Date">
              End Date:
            </label>
            <div className="inp-row">
              <input
                type="date"
                className=" form-select"
                id="enddate"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="Reason-cont form-cont">
            <label className="reason">Reason : </label>
            <div className="text-cont">
              <textarea
                rows="3"
                // style={{ width: "" }}
                required
                placeholder="Reason for leave"
                className=" res-form"
                name="reason"
                value={formData.reason}
                onChange={handleChange}
              />
            </div>
          </div>

          <button type="submit" className="done-btn mx-5" id="subbtn">
            Done
          </button>
          </form>
      
    
      </dialog>
      
    </div>
    </>
  )
}

export default UserDetails