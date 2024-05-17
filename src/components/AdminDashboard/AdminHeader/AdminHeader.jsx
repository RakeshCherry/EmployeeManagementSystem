import 'react-datepicker/dist/react-datepicker.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "./AdminHeader.css";
import logoImage from '../../../assets/logo.png';
import notification from '../../../assets/notification.png';
import adminImg from '../../../assets/adminImg.png';
import searchIcon from '../../../assets/searchIcon.png';
import calander from "../../../assets/calander.png";
import { Link } from 'react-router-dom';

function AdminHeader() {
  
  return (
    <header className="admin_header px-2">
      <div className='logoImg'>
        <img  src={logoImage} alt='logo'/>
      </div>
      <div className='container2 '>
        <div className="search-class">
          <img className="vector" src={searchIcon} alt="vector_img" />   
          <input 
            className="quick_search"
            type="search"
            placeholder='Quick Search'
          />
        </div>
        <span className='border border-end'></span>
        <div className="img-container">
          <Link to ="/Calanderdata">
          <img className="calender" src={calander}  alt='calander_img' />
          </Link>
          <img className="notification" src={notification} alt='notification'/>
        </div>
        <img className="adminImg" src={adminImg} alt='adminImg'/>
        <div className='admin_details'>
          <span>Admin</span>
          <span>admin@domin.com</span>
        </div>
      </div>
      
      </header>
      
        
     
    
    
  );
}

export default AdminHeader;