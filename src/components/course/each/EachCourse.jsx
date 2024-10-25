import PropTypes from "prop-types";
import Card from 'react-bootstrap/Card';
import {Col, Row} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Icons from "../../custom-tags/Icons/Icons";

import style from "./eachcourse.module.css";


const EachCourse = ({course, to, buttonText}) => {
  const {thumbnail_url, courseId, lesson, courseName, authorDto} = course;

  // todo: handle free interface and price interface later

  return (
    <Card className={`bg-white shadow ${style.card_body}`}>
      <Card.Img variant="top" src={thumbnail_url} className={"bg-dark"} style={{height: "180px"}}/>
      <Card.Body>
        <Card.Title className={"text-black fs-4 fw-semibold"}>{courseName}</Card.Title>
        <Row className="pb-4">
          <Col className={"text-black"}>
            <span className="pe-1">
              <Icons icons="fa-solid fa-layer-group text-black"/>
            </span>
            {`${lesson} Lessons`}
          </Col>
          <Col className={"text-black"}>
            <span className="pe-1">
              <Icons icons="fa-solid fa-clock text-black"/>
            </span>
            Time interface
          </Col>
        </Row>
        <Row className="pb-5">
          <Col className={"text-black"}>
            <span className="pe-1">
              <Icons icons="fa-solid fa-user fs-6 text-black"/>:
            </span> {`${authorDto?.firstName} ${authorDto?.lastName}`}
          </Col>
        </Row>
        <NavLink to={`${to}${courseId}`} className="text-decoration-none">
          <Button variant="danger">{buttonText}</Button>
        </NavLink>
      </Card.Body>
    </Card>
  );
};

EachCourse.propTypes = {
  course: PropTypes.shape({
    thumbnail_url: PropTypes.string.isRequired,
    courseId: PropTypes.string.isRequired,
    lesson: PropTypes.number.isRequired,
    courseName: PropTypes.string.isRequired,
    authorDto: PropTypes.object.isRequired,
    priceDTO: PropTypes.object,
  }).isRequired,
  to: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default EachCourse;
