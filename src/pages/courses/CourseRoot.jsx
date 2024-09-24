import {Container} from "react-bootstrap";
import {Outlet} from "react-router-dom";
import "./course root container.css";

function CourseRoot(){
  return (
    <Container fluid className="course-root-container p-0 m-0">
      <Outlet/>
    </Container>
  );
}

export default CourseRoot;
