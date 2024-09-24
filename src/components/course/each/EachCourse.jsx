import PropTypes from "prop-types";
import Card from 'react-bootstrap/Card';

import Img from "../../../assets/images/coursesImg/Course1.png"
import {Col, Row} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Icons from "../../custom-tags/Icons/Icons";

import style from "./eachcourse.module.css";


const EachCourse = ({course, to, buttonText}) => {
  const {thumbnail_url, courseId, lesson, courseName, authorDto, priceDTO} = course;

  // todo: handle free interface and price interface later

  return (
    <Card className={`bg-dark shadow ${style.card_body}`}>
      <Card.Img variant="top" src={thumbnail_url}/>
      <Card.Body className="">
        <Card.Title className={"text-white"}>{courseName}</Card.Title>
        <Row className="pb-5">
          <Col>
            <span className="pe-1">
              <Icons icons="fa-solid fa-layer-group"/>
            </span>
            {`${lesson} Lessons`}
          </Col>
          <Col>
            <span className="pe-1">
              <Icons icons="fa-solid fa-clock"/>
            </span>
            Time interface
          </Col>
        </Row>
        <Row className="pb-5">
          <Col>
            <span className="pe-1">
              Author <Icons icons="fa-solid fa-user fs-6"/>:
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
