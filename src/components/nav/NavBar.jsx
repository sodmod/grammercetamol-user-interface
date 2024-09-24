import {useState} from "react";
import {NavLink} from "react-router-dom";

import {Logo} from "../index.js";

import {navbarContent, routePath} from "../../utils/constants";
import {getCookie} from "../../store/storage";

import UL from "../custom-tags/Lists/Ulist.jsx";
import Icons from "../custom-tags/Icons/Icons";
import Lists from "../custom-tags/Lists/Lists";
import Button from "../custom-tags/Button/Button";

import styles from "./NavBar.module.css";


const NavBar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked((previous) => !previous);
  };

  const isClicked = clicked
    ? `${styles.navmenu} ${styles.active}`
    : `${styles.navmenu}`;


  let isLoggedIn = false;
  if(getCookie("*") && getCookie("*").length > 0) {
    isLoggedIn = true;
  }

  const icons = clicked ? "fa-solid fa-xmark" : "fa-solid fa-bars";
  return (
    <nav className={styles.navitems}>
      <div className={styles.logo}>
        <NavLink to={routePath.landpage}>
          <img src={Logo} alt=""/>
        </NavLink>
      </div>
      <div className={styles.hambuger} onClick={handleClick}>
        <Icons icons={icons}/>
      </div>
      <UL className={isClicked}>
        {navbarContent.map((navbar, key) => (
          <Lists key={key}>
            <NavLink
              onClick={handleClick}
              to={navbar.to}
              className={({isActive}) => (isActive ? styles.active : undefined)}
              end
            >
              {navbar.dir}
            </NavLink>
          </Lists>
        ))}
        <Button className={styles.btn} onClick={handleClick}>What do you want to learn?</Button>
        <Lists>
          {!isLoggedIn ? (
            <NavLink
              to={routePath.auth.login}
              className={({isActive}) =>
                isActive ? styles.active : undefined
              }
              end
            >
              Sign In
            </NavLink>
          ) : (
            <NavLink to={`${routePath.profile.index}`}>
              {/* <Button className={styles.btn}>My ProfileSettings</Button>
               */}
              <div
                onClick={handleClick}
                className=""
                style={{
                  width: "40px",
                  height: "40px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Icons icons={"fa-solid fa-user"}/>
              </div>
            </NavLink>
          )}
        </Lists>
      </UL>
    </nav>
  );
};

export default NavBar;
