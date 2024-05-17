import React from 'react'
import "./Attendence.css"
import "./Formtable.css"
import { IoMdClose } from "react-icons/io";

const Formtable = ({handleSubmit,handleOnChange,handleClose,rest}) => {
  return (
    <div className="addContainer">
              <form onSubmit={handleSubmit} className='bg-dark text-white'>
              <div class="close-btn" onClick={handleClose}><IoMdClose /></div>
                <lable htmlFor="name">Name: </lable>
                <input type="text" id="name" name="name" onChange={handleOnChange} value={rest.name}/>

                <lable htmlFor="email">Email: </lable>
                <input type="email" id="email" name="email" onChange={handleOnChange} value={rest.email}/>

                {/* <lable htmlFor="mobile">Mobile: </lable>
                <input type="tel" id="mobile" name="mobile" onChange={handleOnChange} value={rest.mobile}/> */}

                <lable htmlFor="log_In">LogIn_Time: </lable>
                <input type="time" id="log_In" name="log_In" onChange={handleOnChange} value={rest.log_In}/>

                <lable htmlFor="log_out">LogOut_Time: </lable>
                <input type="time" id="log_Out" name="log_Out" onChange={handleOnChange} value={rest.log_Out}/>

                <label htmlFor="status">Status: </label>
                <select name="status" className='p-2 my-2 rounded-2 p-3' onChange={handleOnChange} value={rest.status}>
                    <option className='p-2' value="present">Present</option>
                    <option className='p-2' value="absent">Absent</option>
                    <option className='p-2' value="halfDay">HalfDay</option>
                </select>


                {/* <input type="tel" id="status" name="status" onChange={handleOnChange} value={rest.status}/> */}

                <button class="btn-submit">Submit</button>
              </form>
    </div>
  )
}

export default Formtable