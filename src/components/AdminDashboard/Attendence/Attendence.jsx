import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Attendence.css';
import "bootstrap/dist/css/bootstrap.min.css";
import searchIcon from '../../../assets/searchIcon.png';
import AdminHeader from '../AdminHeader/AdminHeader';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import { CiCalendar } from "react-icons/ci";
import { listEmployees, filterEmployeesByDepartment, filterEmployeesByStatus, filterEmployeesByDate } from '../../../services/EmployeeService';
import SideBar from '../Sidebar/SideBar';

const Attendence = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [selectedRole, setSelectedRole] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [searchQuery, setSearchQuery] = useState('');


  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleDepartmentChange = (e) => {
    setSelectedDepartment(e.target.value);
  };

  const handleRoleChange = (e) => {
    setSelectedRole(e.target.value);
  };

  const handleStatusChange = (e) => {
    setSelectedStatus(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const currentDate = new Date();
  const formattedCurrentDate = currentDate.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    listEmployees().then((response) => {
      setEmployees(response.data);
    }).catch(error => {
      console.error("Error fetching data:", error);
    });
  }, []);

  useEffect(() => {
    if (selectedDepartment !== 'All') {
      filterEmployeesByDepartment(selectedDepartment).then((response) => {
        setEmployees(response.data);
      }).catch(error => {
        console.error("Error filtering data by department:", error);
      });
    } else if (selectedStatus) {
      filterEmployeesByStatus(selectedStatus).then((response) => {
        setEmployees(response.data);
      }).catch(error => {
        console.error("Error filtering data by status:", error);
      });
    } else if (selectedDate) {
      const formattedDate = `${selectedDate.getFullYear()}-${(selectedDate.getMonth() + 1).toString().padStart(2, "0")}-${selectedDate.getDate().toString().padStart(2, "0")}`;
      filterEmployeesByDate(formattedDate).then((response) => {
        setEmployees(response.data);
      }).catch(error => {
        console.error("Error filtering data by date:", error);
      });
    }
  }, [selectedDepartment, selectedStatus, selectedDate]);

  const filteredEmployees = employees.filter(employee =>
    employee.Emp_Name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flexwithsidebar">
      <SideBar/>
    <div className="addemployeecontainer">
      <AdminHeader />
      <div className='employeeContainer mx-5'>
      
        <div className="employeeHeader my-3">
          <div className='attendenceName'>Attendence Overview</div>
          <div className='container_2'>
            <div className="search-class2">
              <img className="vector" src={searchIcon} alt="vector_img" />
              <input
                className="quick_search2"
                type="search"
                placeholder='Quick Search'
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>
          </div>
          <div className='datePicker'>
            <CiCalendar className='calendarIcon' />
            <DatePicker
              className='picker'
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="dd MMM yyyy"
              placeholderText={formattedCurrentDate}
            />
          </div>
          <NavLink to='/addEmployee' className='btn btn-primary addEmployeeBtn'>
            Add Employee
          </NavLink>
        </div>
        <table className='table table-striped table-bordered'>
          <thead className='tableHeader'>
            <tr>
              <th>ID</th>
              <th>Employee</th>
              <th>
                <div >
                  <select value={selectedRole} onChange={handleRoleChange} className='optionSelecter'>
                    <option value="All">Role</option>
                    <option value="Jr Analyst">Jr Analyst</option>
                    <option value="Sr Seveloper">Sr Seveloper</option>
                    <option value="Jr Developer">Jr Developer</option>
                    <option value="Jr tester">Jr Tester</option>
                    <option value="HR Executive">HR Executive</option>
                    <option value="jr Python developer">Jr Python Developer</option>
                    <option value="Desktop Engineer">Desktop Engineer</option>
                    <option value="Jr Devops">Jr Devops</option>
                  </select>
                </div>
              </th>
              <th>
                <div>
                  <select value={selectedDepartment} onChange={handleDepartmentChange} className='optionSelecter'>
                    <option value="All">Department</option>
                    <option value="Development">Development</option>
                    <option value="Tester">Tester</option>
                    <option value="Data Analyst">Data Analyst</option>
                    <option value="Devops">Devops</option>
                    <option value="HR">HR</option>
                    <option value="Accounts">Accounts</option>
                    <option value="Manager">Manager</option>
                    <option value="Sales">Sales</option>
                    <option value="Design">Design</option>
                    <option value="System Admin">System Admin</option>
                  </select>
                </div>
              </th>
              <th>Date</th>
              <th>
                <select value={selectedStatus} onChange={handleStatusChange} className='optionSelecter'>
                  <option value="">Status</option>
                  <option value="Present">Present</option>
                  <option value="Absent">Absent</option>
                  <option value="Half Day">Half Day</option>
                  <option value="Late Arrival">Late Arrival</option>
                </select>
              </th>
              <th>Check-in</th>
              <th>Check-out</th>
              <th>Work hours</th>
            </tr>
          </thead>
          <tbody>
            {filteredEmployees.map(employee =>
              <tr key={employee.Emp_id}>
                <td>{employee.Emp_ID}</td>
                <td>{employee.Emp_Name}</td>
                <td>{employee.Role}</td>
                <td>{employee.Department}</td>
                <td>{employee.DOJ}</td>
                <td>{employee.Status}</td>
                <td>{employee.Log_In}</td>
                <td>{employee.Log_Out}</td>
                <td>{employee.Work_Hours}</td>
              </tr>
            )}
          </tbody>
        </table>
        {/* <div className='attendecePages'>Page {currentPage} of {Math.ceil(employees.length / itemsPerPage)}</div> */}
      </div>
      </div>
      </div>
  );
}

export default Attendence;