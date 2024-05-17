import { NavLink, useLocation } from "react-router-dom";
import { FaBars, FaHome, FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BiAnalyse } from "react-icons/bi";
// import { AiTwotoneFileExclamation } from "react-icons/ai";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
import './SideBar.css'
import logo from '../../../assets/logo.png'
// import Admin from "../Admin";
// import TakeAttendance from "../../UserDashboard/TakeAttendance/TakeAttendance";
// import AddEmployee from "../AddEmployee/AddEmployee";
// import Attendence from "../Attendence/Attendence";
import { PiUsersThreeBold } from "react-icons/pi";

const routes = [
  {
    path: "/admin",
    name: "Admin Dashboard",
    icon: <FaHome />,
  },
  {
    path: "/addEmployee",
    name: "Add Employee",
    icon: <FaUser />,
  },
  {
    path: "/attendance",
    name: "Attendace",
    icon: <MdMessage />,
  },
  {
    path: "/takeAttendance",
    name: "Take Attendance",
    icon: <BiAnalyse />,
  },
  {
    path: "/allEmployees",
    name: "All Employees",
    icon: <PiUsersThreeBold />,
  },

];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="sidebar-container1">
        <motion.div
          animate={{
            width: isOpen ? "200px" : "45px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sideBar`}
        >
          <div className="top_section1">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo1"
                >
                  RC Globel Tech
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars1">
              <FaBars onClick={toggle} />
            </div>
          </div>
          <section className="routes1">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link1"
                  activeClassName="active1"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text1"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>

        <main>{children}</main>
      </div>
    </>
  );
};

export default SideBar;
