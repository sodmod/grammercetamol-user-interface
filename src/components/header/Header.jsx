import PropTypes from "prop-types";
import {useEffect, useState} from "react";

// jsx header
const Header = ({handleSideButtonHandler, prevState}) => {
  let darkMode = localStorage.getItem('dark-mode');

  const [activate, setIsActivate] = useState({
    isProfileActive: false,
    activateDarkMode: false,
    enableDarkMode: false,
  })

  useEffect(() => {
    if(darkMode === 'enable') {
      document.body.classList.add('dark')
      localStorage.setItem('dark-mode', 'enable')
    }
  }, [darkMode]);

  // Single function to handle updates
  function toggleActivate(key){
    setIsActivate((prev) => ({
      ...prev,
      [key]: !prev[key],
      // Toggle the specified key dynamically
      // ...Object.keys(prev).reduce(
      //   (acc, k) => (k !== key ? { ...acc, [k]: false } : acc), // Set other keys to false
      //   {}
      // ),
    }));
  }

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

  return (
    <header className="header">
      <section className="flex">
        <a href="#" className="logo">Grammercetamol</a>

        <form action="search.html" method="post" className="search-form">
          <input type="text" name="search_box" required placeholder="search courses..." maxLength="100"/>
          <button type="submit" className="fas fa-search"></button>
        </form>

        <div className="icons">
          <div id="menu-btn" className="fas fa-bars" onClick={() => {
            handleSideButtonHandler(!prevState)
          }}></div>
          <div id="search-btn" className="fas fa-search"></div>
          <div id="user-btn" className="fas fa-user" onClick={() => (
            toggleActivate("isProfileActive")

          )}></div>
          <div id="toggle-btn" className={`fas ${activate.activateDarkMode ? "fa-moon" : "fa-sun"}`}
               onClick={() => {
                 darkModeEnabler()
                 toggleActivate("activateDarkMode")
               }}
          ></div>
        </div>

        <div className={`profile ${activate.isProfileActive ? "active" : ""}`}>
          <img src="" className="image" alt=""/>
          <h3 className="name">shaikh anas</h3>
          <p className="role">studen</p>
          <a href="" className="btn">view profile</a>
          <div className="flex-btn">
            <a href="" className="option-btn">login</a>
            <a href="" className="option-btn">register</a>
          </div>
        </div>

      </section>

    </header>
  );
};
export default Header;

Header.propTypes = {
  handleSideButtonHandler: PropTypes.func,
  prevState: PropTypes.bool,
}
