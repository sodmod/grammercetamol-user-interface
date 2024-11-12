import PropTypes from "prop-types";
import {Fragment} from "react";


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


const EachCourse = () => {

  return <Fragment>

    <div className="box">
      <div className="tutor">
        <img src="images/pic-2.jpg" alt=""/>
        <div className="info">
          <h3>john deo</h3>
          <span>21-10-2022</span>
        </div>
      </div>
      <div className="thumb">
        <img src="images/thumb-1.png" alt=""/>
        <span>10 videos</span>
      </div>
      <h3 className="title">complete HTML tutorial</h3>
      <a href="playlist.html" className="inline-btn">view playlist</a>
    </div>

    <div className="box">
      <div className="tutor">
        <img src="images/pic-3.jpg" alt=""/>
        <div className="info">
          <h3>john deo</h3>
          <span>21-10-2022</span>
        </div>
      </div>
      <div className="thumb">
        <img src="images/thumb-2.png" alt=""/>
        <span>10 videos</span>
      </div>
      <h3 className="title">complete CSS tutorial</h3>
      <a href="playlist.html" className="inline-btn">view playlist</a>
    </div>

    <div className="box">
      <div className="tutor">
        <img src="images/pic-4.jpg" alt=""/>
        <div className="info">
          <h3>john deo</h3>
          <span>21-10-2022</span>
        </div>
      </div>
      <div className="thumb">
        <img src="images/thumb-3.png" alt=""/>
        <span>10 videos</span>
      </div>
      <h3 className="title">complete JS tutorial</h3>
      <a href="playlist.html" className="inline-btn">view playlist</a>
    </div>

    <div className="box">
      <div className="tutor">
        <img src="images/pic-5.jpg" alt=""/>
        <div className="info">
          <h3>john deo</h3>
          <span>21-10-2022</span>
        </div>
      </div>
      <div className="thumb">
        <img src="images/thumb-4.png" alt=""/>
        <span>10 videos</span>
      </div>
      <h3 className="title">complete Boostrap tutorial</h3>
      <a href="playlist.html" className="inline-btn">view playlist</a>
    </div>

    <div className="box">
      <div className="tutor">
        <img src="images/pic-6.jpg" alt=""/>
        <div className="info">
          <h3>john deo</h3>
          <span>21-10-2022</span>
        </div>
      </div>
      <div className="thumb">
        <img src="images/thumb-5.png" alt=""/>
        <span>10 videos</span>
      </div>
      <h3 className="title">complete JQuery tutorial</h3>
      <a href="playlist.html" className="inline-btn">view playlist</a>
    </div>

    <div className="box">
      <div className="tutor">
        <img src="images/pic-7.jpg" alt=""/>
        <div className="info">
          <h3>john deo</h3>
          <span>21-10-2022</span>
        </div>
      </div>
      <div className="thumb">
        <img src="images/thumb-6.png" alt=""/>
        <span>10 videos</span>
      </div>
      <h3 className="title">complete SASS tutorial</h3>
      <a href="playlist.html" className="inline-btn">view playlist</a>
    </div>

    <div className="box">
      <div className="tutor">
        <img src="images/pic-8.jpg" alt=""/>
        <div className="info">
          <h3>john deo</h3>
          <span>21-10-2022</span>
        </div>
      </div>
      <div className="thumb">
        <img src="images/thumb-7.png" alt=""/>
        <span>10 videos</span>
      </div>
      <h3 className="title">complete PHP tutorial</h3>
      <a href="playlist.html" className="inline-btn">view playlist</a>
    </div>

    <div className="box">
      <div className="tutor">
        <img src="images/pic-9.jpg" alt=""/>
        <div className="info">
          <h3>john deo</h3>
          <span>21-10-2022</span>
        </div>
      </div>
      <div className="thumb">
        <img src="images/thumb-8.png" alt=""/>
        <span>10 videos</span>
      </div>
      <h3 className="title">complete MySQL tutorial</h3>
      <a href="playlist.html" className="inline-btn">view playlist</a>
    </div>

    <div className="box">
      <div className="tutor">
        <img src="images/pic-1.jpg" alt=""/>
        <div className="info">
          <h3>john deo</h3>
          <span>21-10-2022</span>
        </div>
      </div>
      <div className="thumb">
        <img src="images/thumb-9.png" alt=""/>
        <span>10 videos</span>
      </div>
      <h3 className="title">complete react tutorial</h3>
      <a href="playlist.html" className="inline-btn">view playlist</a>
    </div>
  </Fragment>
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
