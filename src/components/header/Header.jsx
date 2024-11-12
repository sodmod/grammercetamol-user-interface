import {useState} from "react";
import {getCookie} from "../../store/storage";



// const Header = () => {
//   const [clicked, setClicked] = useState(false);
//
//   const handleClick = () => {
//     setClicked((previous) => !previous);
//   };
//
//   const isClicked = clicked
//     ? `${styles.navmenu} ${styles.active}`
//     : `${styles.navmenu}`;
//
//
//   let isLoggedIn = false;
//   if(getCookie("*") && getCookie("*").length > 0) {
//     isLoggedIn = true;
//   }
//
//   const icons = clicked ? "fa-solid fa-xmark" : "fa-solid fa-bars";
//
//   return (
//     <nav className={styles.navitems}>
//       <div className={styles.logo}>
//         <NavLink to={routePath.landpage}>
//           <img src={Logo} alt=""/>
//         </NavLink>
//       </div>
//       <div className={styles.hambuger} onClick={handleClick}>
//         <Icons icons={icons}/>
//       </div>
//       <UL className={isClicked}>
//         {navbarContent.map((navbar, key) => (
//           <Lists key={key}>
//             <NavLink
//               onClick={handleClick}
//               to={navbar.to}
//               className={({isActive}) => (isActive ? styles.active : undefined)}
//               end
//             >
//               {navbar.dir}
//             </NavLink>
//           </Lists>
//         ))}
//         <Button className={styles.btn} onClick={handleClick}>What do you want to learn?</Button>
//         <Lists>
//           {!isLoggedIn ? (
//             <NavLink
//               to={routePath.auth.login}
//               className={({isActive}) =>
//                 isActive ? styles.active : undefined
//               }
//               end
//             >
//               Sign In
//             </NavLink>
//           ) : (
//             <NavLink to={`${routePath.profile.index}`}>
//               {/* <Button className={styles.btn}>My ProfileSettings</Button>
//                */}
//               <div
//                 onClick={handleClick}
//                 className=""
//                 style={{
//                   width: "40px",
//                   height: "40px",
//                   display: "flex",
//                   justifyContent: "center",
//                   alignItems: "center",
//                 }}
//               >
//                 <Icons icons={"fa-solid fa-user"}/>
//               </div>
//             </NavLink>
//           )}
//         </Lists>
//       </UL>
//     </nav>
//   );
// };

const Header = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked((previous) => !previous);
  };



  let isLoggedIn = false;
  if(getCookie("*") && getCookie("*").length > 0) {
    isLoggedIn = true;
  }

  const icons = clicked ? "fa-solid fa-xmark" : "fa-solid fa-bars";

  return (
    <header className="header">
      <section className="flex">
        <a href="#" className="logo">Educa.</a>

        <form action="search.html" method="post" className="search-form">
          <input type="text" name="search_box" required placeholder="search courses..." maxLength="100"/>
          <button type="submit" className="fas fa-search"></button>
        </form>

        <div className="icons">
          <div id="menu-btn" className="fas fa-bars"></div>
          <div id="search-btn" className="fas fa-search"></div>
          <div id="user-btn" className="fas fa-user"></div>
          <div id="toggle-btn" className="fas fa-sun"></div>
        </div>

        <div className="profile">
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
