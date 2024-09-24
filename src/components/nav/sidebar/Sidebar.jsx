import {Col, Dropdown, Nav, Navbar, Offcanvas} from "react-bootstrap";

import {NavLink, redirect} from "react-router-dom";
import styles from "../NavBar.module.css";
import {useState} from "react";
import "./sidebar.css"
import {Logo} from "../../index.js";
import Icons from "../../custom-tags/Icons/Icons";
import {homeDir, mobileNavContent, navbarContent} from "../../../utils/constants.js";


// desktop view
function DesktopSidebar(prop){

  function onClick(){
    prop.setShowFullSideBar();
  }

  const icons = prop.showFullSideBar ? "fa-angle-left" : "fa-angle-right"

  return <>
    <Col xs={12} sm={prop.showFullSideBar ? 3 : 2}
         className={`${prop.showFullSideBar ? "sidebar" : "p-0"} d-none d-sm-block`}>
      <Navbar className="mx-auto w-100 flex-column">
        <Navbar.Brand onClick={() => redirect("/")} className="fw-bold fs-2">
          {<img src={Logo} alt=""/>}
          <Icons icons={`p-4 fa-solid ${icons} fs-5`} onClick={onClick}/>
        </Navbar.Brand>

        <Nav className="flex-column h-100 align-items-center w-100">
          {navbarContent.map((navbar, key) => (
            <Nav.Link key={key} className="rounded mb-1 w-75 align-items-center">
              <Dropdown className="d-inline mx-2" autoClose="inside">
                <Dropdown.Toggle id="dropdown-autoclose-inside" className="w-100">
                  {
                    prop.showFullSideBar ?
                      navbar?.dirName :
                      <NavLink to="/">
                        <Icons icons={`fs-6 fa-solid fa-book`}/>
                      </NavLink>

                  }

                </Dropdown.Toggle>
                <Dropdown.Menu className="bg-white bg-opacity-50 backdrop">
                  {navbar?.dir?.map((value, key) => (
                    <Dropdown.Item key={key} className="p-2 nav-hover">
                      <NavLink
                        to={value?.to}
                        className="text-decoration-none bg-opacity-50 text-light"
                        end
                      >
                        {value?.menu}
                      </NavLink>
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </Nav.Link>
          ))}
        </Nav>
      </Navbar>
    </Col>
  </>
}

// mobile view
function MobileSidebar(){
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const icons = show ? "fa-solid fa-xmark" : "fa-solid fa-bars";
  return <>
    <Col xs={12} className="d-block d-sm-none m-10">
      <Navbar bg="dark" data-bs-theme="dark">
        <Icons icons={`${icons} fs-1`} onClick={handleShow}/>
        <Offcanvas show={show} onHide={handleClose} className="bg-dark">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              <NavLink to={homeDir.dir}
                       className={"text-decoration-none fs-1 text-white fw-bold"}>{homeDir.dirName}</NavLink>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav>
              {mobileNavContent.map((navbar, key) => (
                <NavLink key={key}
                         to={navbar.to}
                         className={({isActive}) => (isActive ? `p-3 ${styles.active}` : undefined)}
                         end
                >{navbar.dirName}</NavLink>))}
            </Nav>

          </Offcanvas.Body>
        </Offcanvas>

      </Navbar>
    </Col>
  </>
}

function SideBar(prop){
  return <>
    {/* Sidebar for desktop, hidden on mobile */}
    <DesktopSidebar showFullSideBar={prop.showFullSideBar} setShowFullSideBar={prop.setShowFullSideBar}/>
    {/* only displays when it is in mobile mode*/}
    <MobileSidebar/>
  </>
}

export default SideBar;
