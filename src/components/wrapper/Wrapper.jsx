// inbuilt libraries
import {Fragment} from "react";
import {Outlet} from "react-router-dom";

// custom components
import Header from "../header/Header.jsx";
import SideBar from "../sidebar/Sidebar.jsx";
import Footer from "../footer/Footer.jsx";


// app container
const Wrapper = () => {

  return <Fragment>
    <Header/>
    <SideBar/>
    <Outlet/>
    <Footer/>
  </Fragment>


}

export default Wrapper;
