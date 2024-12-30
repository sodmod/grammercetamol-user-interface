import PropTypes from "prop-types";
import {Fragment} from "react";
import {NavLink} from "react-router-dom";
import {formatUploadedDate} from "../../../utils/customConverter.js";


// const EachCourse = ({course, to, buttonText}) => {
//   const {thumbnail_url, courseId, lesson, courseName, authorDto} = course;
//
//   // todo: handle free interface and price interface later
//
//   return (
//     <Card className={`bg-white shadow ${style.card_body}`}>
//       <Card.Img variant="top" src={thumbnail_url} className={"bg-dark"} style={{height: "180px"}}/>
//       <Card.Body>
//         <Card.Title className={"text-black fs-4 fw-semibold"}>{courseName}</Card.Title>
//         <Row className="pb-4">
//           <Col className={"text-black"}>
//             <span className="pe-1">
//               <Icons icons="fa-solid fa-layer-group text-black"/>
//             </span>
//             {`${lesson} Lessons`}
//           </Col>
//           <Col className={"text-black"}>
//             <span className="pe-1">
//               <Icons icons="fa-solid fa-clock text-black"/>
//             </span>
//             Time interface
//           </Col>
//         </Row>
//         <Row className="pb-5">
//           <Col className={"text-black"}>
//             <span className="pe-1">
//               <Icons icons="fa-solid fa-user fs-6 text-black"/>:
//             </span> {`${authorDto?.firstName} ${authorDto?.lastName}`}
//           </Col>
//         </Row>
//         <NavLink to={`${to}${courseId}`} className="text-decoration-none">
//           <Button variant="danger">{buttonText}</Button>
//         </NavLink>
//       </Card.Body>
//     </Card>
//   );
// };


const EachCourse = ({data, to }) => {

  return <Fragment>
    <div className="box">
      <div className="tutor">
        {/*todo: implement tutor image here*/}
        <img src={data.authorDto.authorProfile} alt=""/>
        <div className="info">
          <h3>`{data.authorDto.firstName} {data.authorDto.lastName}`</h3>
          <span>{formatUploadedDate(data.uploadedDate)}</span>
        </div>
      </div>
      <div className="thumb">
        <img src={data.thumbnail_url} alt=""/>
        <span>{data.lesson} videos</span>
      </div>
      <h3 className="title">{data.courseTitle}</h3>
      <NavLink to={to} className="inline-btn">view playlist</NavLink>
    </div>
  </Fragment>
};


EachCourse.propTypes = {
  data: PropTypes.shape({
    thumbnail_url: PropTypes.string.isRequired,
    courseId: PropTypes.string.isRequired,
    uploadedDate: PropTypes.array,
    lesson: PropTypes.number.isRequired,
    courseTitle: PropTypes.string.isRequired,
    authorDto: PropTypes.shape({
      authorProfile: PropTypes.string,
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      otherName: Promise.string,
    }).isRequired,
    // authorDto: PropTypes.object.isRequired,
    priceDTO: PropTypes.shape({
      currency: PropTypes.string,
      price: PropTypes.number,
    }),
  }).isRequired,
  to: PropTypes.string.isRequired,
  // buttonText: PropTypes.string.isRequired,
};

export default EachCourse;
