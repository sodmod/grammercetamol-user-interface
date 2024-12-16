// inbuilt libraries
import {Fragment, useState} from "react";
import {Outlet} from "react-router-dom";

// custom components
import Header from "../header/Header.jsx";
import SideBar from "../sidebar/Sidebar.jsx";
import Footer from "../footer/Footer.jsx";
import {ProtectedRoute} from "../../route/protected-routes.config.jsx";

// app container
const Wrapper = () => {

  const [showSideBar, setShowSideBar] = useState(true);

  return (<Fragment>

    <ProtectedRoute>
      <Header handleSideButtonHandler={setShowSideBar} prevState={showSideBar}/>

      {showSideBar && <SideBar/>}
      <Outlet/>
      <Footer/>
    </ProtectedRoute>
  </Fragment>)

}

export default Wrapper;
