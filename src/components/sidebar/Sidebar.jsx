import {NavLink} from "react-router-dom";
import {routePath} from "../../utils/constants.js";
import {useState} from "react";


// sidebar component
const SideBar = () => {

  const[accordion, setAccordion] = useState(false);


  // return jsx
  return <div className="side-bar">

    <div id="close-btn">
      <i className="fas fa-times"></i>
    </div>

    <div className="profile">
      <img src="images/pic-1.jpg" className="image" alt=""/>
      <h3 className="name">shaikh anas</h3>
      <p className="role">studen</p>
      <NavLink to={routePath.profile.index} className="btn">view profile</NavLink>
    </div>

    <nav className="navbar1">
      <NavLink to={routePath.dashboard}>
        <i className="fas fa-home"></i><span>Home</span>
      </NavLink>
      <NavLink className="accordion" onClick={()=> {setAccordion(!accordion)}}>
        <i className="fas fa-graduation-cap" style={{paddingBottom: "15px"}}></i><span>courses</span>
        {accordion && <div className="panel">
          <NavLink to={routePath.course.courses}>
            Available Courses
          </NavLink>
          <NavLink to={`${routePath.course.courses}/${routePath.course["your-course"]}`}>
            Your Courses
          </NavLink>
          <NavLink to={`${routePath.course.courses}/${routePath.course["whitelisted-course"]}`}>
            Saved Courses
          </NavLink>
        </div>
        }
      </NavLink>
      <NavLink to={routePath["about-us"]}>
        <i className="fas fa-question"></i><span>about</span>
      </NavLink>
      <NavLink to={routePath["contact-us"]}>
        <i className="fas fa-headset"></i><span>contact us</span>
      </NavLink>
    </nav>

  </div>
}

export default SideBar;
