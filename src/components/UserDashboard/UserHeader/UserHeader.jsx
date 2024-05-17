import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "./UserHeader.css"
import logoImage from '../../../assets/logo.png'
import calander from '../../../assets/calander.png';
import notification from '../../../assets/notification.png'
import adminImg from '../../../assets/adminImg.png';
import searchIcon from '../../../assets/searchIcon.png';

function UserHeader() {


  return (
    <div className="headerSection">
   
        <header className="user_header px-2">
          
          <div className='logoImg'>
          <img src={logoImage} alt='logo'/>
          </div>

          <div className='container2 '>
            <div className="search-class">
            <img className="vector" src={searchIcon} alt="vector_img"/>
          <input 
              className="quick_search"
              type="search"
              placeholder='Quick Search'
          /></div>
          <span className='border border-end  ' ></span>
          <div className="img-container">
		          <img className="calender" src={calander}  alt='calander_img'/>
          
          <img className="notification" src={notification} alt='notification'/>
          
          </div>
          <img className="adminImg" src={adminImg} alt='adminImg'/>
          <div className='admin_details'>
          <span>User</span>
          <span>User@domin.com</span>
          </div>
          </div>
        </header>
      </div>
  )
}

export default UserHeader
