import React from "react";
import "../AdminDashboard/Admin.css"
import "bootstrap/dist/css/bootstrap.min.css";
import AdminHeader from "./AdminHeader/AdminHeader";
import EmployeeDetails from "./EmployeeDetails/EmployeeDetails";
import Graphs from "./Charts/Graphs";
import SideBar from "./Sidebar/SideBar";


function Admin(){
    return(
        <div className="flexwithsidebar">
            <SideBar/>
        <div className="admin"> 
            <AdminHeader/>
            <div className="sidebarEmp">
            <EmployeeDetails/>
            </div>
            <Graphs/>
        </div>
        </div>
    )
}

export default Admin;