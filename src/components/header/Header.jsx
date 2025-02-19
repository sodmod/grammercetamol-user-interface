import PropTypes from "prop-types";
import {useEffect, useState} from "react";
import {getCookie} from "../../store/storage.js";
import {NavLink} from "react-router-dom";
import {routePath} from "../../utils/constants.js";

// jsx header
const Header = ({handleSideButtonHandler, prevState, setShowSearchModal, setInputFieldChangeHandler, searchInputValue}) => {
  let darkMode = localStorage.getItem('dark-mode');

  const [activate, setIsActivate] = useState({
    isProfileActive: false, activateDarkMode: false, enableDarkMode: false,
  })

  // const [string, setString] = useState({
  //   searchField: ""
  // })

  useEffect(() => {
    if(darkMode === 'enable') {
      document.body.classList.add('dark')
      localStorage.setItem('dark-mode', 'enable')
    }
  }, [darkMode]);


  useEffect(() => {
    // Set the courses to the data from useFetchData initially
    if(searchInputValue !== "") {
      // navigate me to search page,
      // pass data to search page
      setShowSearchModal(true)
      // you are done
    }else{
      setShowSearchModal(false)
    }
  }, [setShowSearchModal, searchInputValue]);


  // Single function to handle updates
  function toggleActivate(key){
    setIsActivate((prev) => ({
      ...prev, [key]: !prev[key], // Toggle the specified key dynamically
      // ...Object.keys(prev).reduce(
      //   (acc, k) => (k !== key ? { ...acc, [k]: false } : acc), // Set other keys to false
      //   {}
      // ),
    }));
  }

  // Single function to handle updates
  // function setStringHandler(key, value){
  //   setString((prev) => ({
  //     ...prev,
  //     [key]: value,
  //   }));
  // }

  function darkModeEnabler(){
    toggleActivate("enableDarkMode")

    if(!activate.enableDarkMode && darkMode === "disabled") {
      document.body.classList.add('dark')
      localStorage.setItem('dark-mode', 'enable')
    }else {
      document.body.classList.remove('dark')
      localStorage.setItem('dark-mode', 'disabled')
    }

  }

  // get profile pics
  const profilePics = getCookie("profile_pics");

  return (<header className="header">
      <section className="flex">
        <a href="#" className="logo">Grammercetamol</a>

        <div className="search-form">
          <input type="text"
                 name="searchField"
                 required
                 placeholder="search courses..."
                 value={searchInputValue}
                 onChange={(e) => (setInputFieldChangeHandler(e.target.name, e.target.value)
                 )}
          />
          <button className="fas fa-search"></button>
        </div>

        <div className="icons">
          <div id="menu-btn" className="fas fa-bars" onClick={() => {
            handleSideButtonHandler(!prevState)
          }}></div>
          <div id="search-btn" className="fas fa-search"></div>
          <div id="user-btn" className="fas fa-user" onClick={() => (toggleActivate("isProfileActive")

          )}></div>
          <div id="toggle-btn" className={`fas ${activate.activateDarkMode ? "fa-moon" : "fa-sun"}`}
               onClick={() => {
                 darkModeEnabler()
                 toggleActivate("activateDarkMode")
               }}
          ></div>
        </div>

        <div className={`profile ${activate.isProfileActive ? "active" : ""}`}>
          <img src={profilePics ? profilePics : ""} className="image" alt=""/>
          <h3 className="name">shaikh anas</h3>
          <p className="role">student</p>
          <NavLink to={routePath.profile.index} className="btn">view profile</NavLink>
          {/*<div className="flex-btn">*/}
          {/*  <a href="" className="option-btn">login</a>*/}
          {/*  <a href="" className="option-btn">register</a>*/}
          {/*</div>*/}
        </div>

      </section>

  </header>);
};
export default Header;

Header.propTypes = {
  handleSideButtonHandler: PropTypes.func,
  prevState: PropTypes.bool,
  setShowSearchModal: PropTypes.func,
  setInputFieldChangeHandler: PropTypes.func,
}
