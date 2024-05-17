import React from 'react'
import './SuccessRequest.css'
import SuccessImg from '../../../../assets/SuccessImg.png'

const SuccessRequest = () => {
  return (
    <div className='overlay'>
        <div className="successMessage">
          <div className="successImg">
            <img src={SuccessImg} alt="successImg" />
          </div>
               <h4>Leave request sent Successfully</h4> 
               <div className="OkBtn btn btn-primary">OK</div>
        </div>    
    </div>
  )
}

export default SuccessRequest