import React from 'react'
import React, { useEffect, useState } from 'react';
import './AddEmployee.css';
import Sidebar from "../AdminSidebar/Sidebar";
import AdminHeader from "../AdminHeader/AdminHeader";
import EmpInfo from '../../../assets/EmpInfo.png';
import SuccessMessage from './SuccessMessage/SuccessMessage';
import { addEmployee } from '../../../services/EmployeeService';
import SideBar from '../Sidebar/SideBar';

const PersonalInfo = () => {

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
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, employeeId, employeeType, email, department, designation, workingDays, joiningDate, officeLocation } = formData;
        if (!name || !employeeId || !employeeType || !email || !department || !designation || !workingDays || !joiningDate || !officeLocation) {
          setError('All fields are required.');
          return;
        }
    
        try {
          await addEmployee(formData);
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
    <div>
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
    </div>
  )
}

export default PersonalInfo