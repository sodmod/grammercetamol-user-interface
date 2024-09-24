import {useState} from "react"
import {Outlet} from "react-router-dom";
import {Col, Container, Image, Navbar, Row} from "react-bootstrap";
import SideBar from "../nav/sidebar/Sidebar.jsx";
import "./dashboard.css";
import {getSpecificKey} from "../../store/storage.js";

const Dashboard = () => {

  const [showFullSideBar, setShowFullSideBar] = useState(true);

  function onClickHandler(){
    setShowFullSideBar((prevState) => !prevState);
  }

  const name = getSpecificKey("lastname", "**");

  return (
    <Container fluid={true} className="min-vh-100 vh-100 dashboard">
      <Row className="h-100 p-0">
        <SideBar showFullSideBar={showFullSideBar} setShowFullSideBar={onClickHandler}/>
        {/* Main content area */}
        <Col xs={12} sm={showFullSideBar ? 9 : 10} className="px-sm-1 vh-100 h-100 m-0 px-sm-1 px-0">
          <Navbar className="dashboard-top-nav d-none d-sm-block">
            <Container className="p-0 px-sm-1">
              <Navbar.Brand href="#home" className="nav-brand">
                <Navbar.Text className="text-danger d-none d-sm-inline-block">
                  Welcome {name?.data}
                </Navbar.Text>
              </Navbar.Brand>
              <Navbar.Toggle/>
              <Navbar.Collapse className="justify-content-end nav-image">
                <Image src={"/src/assets/images/smile.png"} roundedCircle/>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <Outlet/>
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
