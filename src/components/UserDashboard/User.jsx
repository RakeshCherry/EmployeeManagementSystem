import React from "react";
import "../AdminDashboard/Admin.css"
import "bootstrap/dist/css/bootstrap.min.css";
import UserHeader from "./UserHeader/UserHeader";
import UserDetails from "./UserDetails/UserDetails";
import Graphs from "./Charts/Graphs";
import UserSideBar from "./Sidebar/UserSideBar";


function Admin(){
    return(
        <div className="flexwithsidebar">
        <UserSideBar/>
        <div className="admin">
            <UserHeader/>
            <div className="UsersidebarEmp">
                    <UserDetails/>
            </div>
            <Graphs/>
        </div>
        </div>
        
    )
}

export default Admin;