import {Outlet} from "react-router-dom";
import "./course root container.css";
import {Fragment} from "react";

function CourseRoot(){
  return (
    <Fragment>
      <Outlet/>
    </Fragment>
  );
}

export default CourseRoot;
