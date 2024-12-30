// inbuilt libraries
import {Fragment, useState} from "react";
import {Outlet} from "react-router-dom";

// custom components
import Header from "../header/Header.jsx";
import SideBar from "../sidebar/Sidebar.jsx";
import Footer from "../footer/Footer.jsx";
import {ProtectedRoute} from "../../route/protected-routes.config.jsx";
import Search from "../search/Search.jsx";

// app container
const Wrapper = () => {

  const [showSideBar, setShowSideBar] = useState(true);
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [string, setString] = useState({
    searchField: ""
  })

  function setStringHandler(key, value){
    setString((prev) => ({
      ...prev,
      [key]: value,
    }));
  }

  return (<Fragment>

    <ProtectedRoute>
      <Header handleSideButtonHandler={setShowSideBar} prevState={showSideBar} setShowSearchModal={setShowSearchModal}
              setInputFieldChangeHandler={setStringHandler} searchInputValue={string.searchField}/>

      {showSideBar && <SideBar/>}
      {!showSearchModal ? <Outlet/> : <Search searchTerm={string.searchField}/>}
      <Footer/>
    </ProtectedRoute>
  </Fragment>)

}

export default Wrapper;
