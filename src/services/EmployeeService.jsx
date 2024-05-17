import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8085';

export const listEmployees = () => axios.get(`${REST_API_BASE_URL}/Edata`);

export const filterEmployeesByDepartment = (department) => axios.get(`${REST_API_BASE_URL}/Edata/department?department=${department}`);

export const filterEmployeesByStatus = (status) => axios.get(`${REST_API_BASE_URL}/Edata/status?status=${status}`);

export const filterEmployeesByDate = (date) => axios.get(`${REST_API_BASE_URL}/Edata/date?dOJ=${date}`);

export const addEmployee = (employeeData) => axios.post(`${REST_API_BASE_URL}/employe/add`, employeeData);


// Global error handler for Axios
axios.interceptors.response.use(
    response => response,
    error => {
      console.error("Error in Axios request:", error);
      throw error;
    }
  );