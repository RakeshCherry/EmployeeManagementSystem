import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AddEmployee.css';
import AdminHeader from "../AdminHeader/AdminHeader";
import EmpInfo from '../../../assets/EmpInfo.png';
import SuccessMessage from './SuccessMessage/SuccessMessage';
import { addEmployee } from '../../../services/EmployeeService';
import SideBar from '../Sidebar/SideBar';
import camera from '../../../assets/camera.png'
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

const AddEmployee = () => {
  const [formData, setFormData] = useState({
    name: '',
    employeeId: '',
    employeeType: '',
    email: '',
    department: '',
    designation: '',
    workingDays: '',
    joiningDate: '',
    officeLocation: '',
    image: null,
  });
  const [error, setError] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSuccessClose = () => {
    setShowSuccessMessage(false);
  };

  useEffect(() => {
    console.log('showSuccessMessage:', showSuccessMessage);
  }, [showSuccessMessage]);

  const stateCapitals = {
    AP: 'Hyderabad',
    AR: 'Itanagar',
    AS: 'Dispur',
    BR: 'Patna',
    CT: 'Raipur',
    GA: 'Panaji',
    GJ: 'Gandhinagar',
    HR: 'Chandigarh',
    HP: 'Shimla',
    JH: 'Ranchi',
    KA: 'Bengaluru',
    KL: 'Thiruvananthapuram',
    MP: 'Bhopal',
    MH: 'Mumbai',
    MN: 'Imphal',
    ML: 'Shillong',
    MZ: 'Aizawl',
    NL: 'Kohima',
    OR: 'Bhubaneswar',
    PB: 'Chandigarh',
    RJ: 'Jaipur',
    SK: 'Gangtok',
    TN: 'Chennai',
    TG: 'Hyderabad',
    TR: 'Agartala',
    UP: 'Lucknow',
    UK: 'Dehradun',
    WB: 'Kolkata',
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      image: e.target.files[0],
    }));
  };

  const saveImageToLocalStorage = (image) => {
    const imagePath = `image_${Date.now()}`;
    localStorage.setItem(imagePath, JSON.stringify(image));
    return imagePath;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, employeeId, employeeType, email, department, designation, workingDays, joiningDate, officeLocation } = formData;
    if (!name || !employeeId || !employeeType || !email || !department || !designation || !workingDays || !joiningDate || !officeLocation || !image) {
      toast.error('All fields including the image are required.');
      return;
    }

    const imagePath = saveImageToLocalStorage(image);


    try {
      const formDataToSend = new FormData();
      formDataToSend.append('file', image);
      await axios.post('http://localhost:8080/api/employees/upload', formDataToSend); // Upload image
      await addEmployee({ ...formData, image: imagePath }); 
      // console.log(response.data); 
      setFormData({
        name: '',
        employeeId: '',
        employeeType: '',
        email: '',
        department: '',
        designation: '',
        workingDays: '',
        joiningDate: '',
        officeLocation: '',
        image: null,
      });
      setError('');
      setShowSuccessMessage(true);
      console.log('showSuccessMessage:', showSuccessMessage);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleCancel = () => {
    setFormData({
      name: '',
      employeeId: '',
      employeeType: '',
      email: '',
      department: '',
      designation: '',
      workingDays: '',
      joiningDate: '',
      officeLocation: '',
    });
    setError('');
    setShowSuccessMessage(false);
  };

  

  return (
    <>
    <div className="flexwithsidebar">
      <SideBar/>
      <div className='addEmployeeContainer'>
        <AdminHeader/>
        <div className="addContainer">
          <div className="employeeInputs">
            <div className="EmpInfo">
              <img src={EmpInfo} alt="boxImage" />
              <p>Employee Information</p>
            </div>
            <hr />

            <div className="imageUpload" style={{ marginBottom: '20px' }}>
        <label htmlFor="imageInput">
          <img src={camera} alt="imageUpload" style={{ cursor: 'pointer' }} />
        </label>
        <input
          type="file"
          id="imageInput"
          onChange={handleFileChange}
          style={{ display: 'none' }}
        />
      </div>
            <form onSubmit={handleSubmit}>
              <div className="addEmpRow">
                <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Employee name" />
                <input type="text" name="employeeId" value={formData.employeeId} onChange={handleInputChange} placeholder="Employee ID" />
              </div>
              <div className="addEmpRow">
                <select name="employeeType" value={formData.employeeType} onChange={handleInputChange}>
                  <option value="">Select Employee Type</option>
                  <option value="fulltime">Full Time</option>
                  <option value="parttime">Part Time</option>
                  <option value="contract">Contract</option>
                </select>
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email Address" />
              </div>
              <div className="addEmpRow">
                <select name="department" value={formData.department} onChange={handleInputChange}>
                  <option value="">Select Department</option>
                  <option value="it">IT</option>
                  <option value="hr">HR</option>
                  <option value="finance">Finance</option>
                </select>
                <input type="text" name="designation" value={formData.designation} onChange={handleInputChange} placeholder="Enter Designation" />
              </div>
              <div className="addEmpRow">
                <select name="workingDays" value={formData.workingDays} onChange={handleInputChange}>
                  <option value="">Select Working Days</option>
                  <option value="mon-fri">Monday to Friday</option>
                  <option value="mon-sat">Monday to Saturday</option>
                </select>
                <input type="date" name="joiningDate" value={formData.joiningDate} onChange={handleInputChange} placeholder="Select Joining Date" />
              </div>
              <div className="addEmpRow">
                <select name="officeLocation" value={formData.officeLocation} onChange={handleInputChange}>
                  <option value="">Select Office Location</option>
                  {Object.keys(stateCapitals).map((stateCode) => (
                    <option key={stateCode} value={stateCapitals[stateCode]}>
                      {stateCapitals[stateCode]}
                    </option>
                  ))}
                </select>
              </div>
              <div className="addEmpbuttons">
                {error && <p className="error">{error}</p>}
                <button type="button" onClick={handleCancel}>Cancel</button>
                <button type="submit">Submit</button>
              </div>
            </form>
            {showSuccessMessage && (
                <div className='overlay'>
                  <SuccessMessage onClose={handleSuccessClose} />
                </div>
            )}
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default AddEmployee;
