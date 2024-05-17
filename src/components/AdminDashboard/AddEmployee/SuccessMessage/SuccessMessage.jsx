import React from 'react';
import './SuccessMessage.css';
import SuccessImg from '../../../../assets/SuccessImg.png';

const SuccessMessage = ({ onClose }) => {
  const handleOkClick = () => {
    onClose();
  };

  return (
    <div className='overlay'>
        <div className="successMessage">
          <div className="successImg">
            <img src={SuccessImg} alt="successImg" />
          </div>
          <h4>Employee added Successfully</h4>
          <div className="OkBtn btn btn-primary" onClick={handleOkClick}>OK</div>
        </div>
    </div>
  );
};

export default SuccessMessage;
