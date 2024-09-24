import {useState} from "react";
import {useParams} from "react-router-dom";
import Card from "react-bootstrap/Card";
import {Button, Col, Collapse, Container, Row} from "react-bootstrap";
import useFetchData from "../../../hooks/useFetchData";
import {endpoints} from "../../../store/endpoints.js";
import {Spinner} from "../../../components/spinner/Spinner";
import Img from "../../../assets/images/coursesImg/Course1.png"
import "./course details.css";

const Details = () => {
  const [open, setOpen] = useState(null);

  const handleToggle = (index) => {
    setOpen(open === index ? null : index);
  };

  const {courseId} = useParams();
  const apiGetCourseDetail = endpoints.courses.courses

  const {data, loading} = useFetchData(`${apiGetCourseDetail}/${courseId}`)
  console.log("details", data)

  if(!data || loading) {
    return <Spinner/>
  }

  return (
    <Container fluid className="course-detail-container m-0">
      <Row className="px-1 pt-2 mt-1 h-100 w-100">
        <Col lg={5} md={12} sm={12} xs={12} className="course-detail-image d-sm-block h-50 h-sm-100">
          <Card.Img src={Img} className="w-100 rounded-4 h-100 course-detail-image-img"/>
        </Col>

        <Col lg={7} md={12} sm={12} xs={12} className="course-detail-image">
          <Card className="shadow py-sm-2 bg-black text-white-50">
            <Card.Body className="">
              <Card.Title className="text-center">{data?.courseName}</Card.Title>
              <Card.Text>
                {data?.summary}
              </Card.Text>
            </Card.Body>
            <Card.Body className="shadow rounded mx-3">
              <Card.Title className="text-center">Contents</Card.Title>
              <Card.Body className="p-0 contents">
                {data?.videoIds.map((item, index) => (
                  <Col md={8} key={index} className="mb-3 w-100">
                    <Card className="shadow-sm">
                      <Card.Header className="course-details-buttons">
                        <Button
                          variant="link"
                          className="text-decoration-none text-white w-100 text-left"
                          onClick={() => handleToggle(index)}
                          aria-controls={`collapse-content-${index}`}
                          aria-expanded={open === index}
                        >
                          {item.description}
                        </Button>
                      </Card.Header>
                      <Collapse in={open === index}>
                        <Card.Body id={`collapse-content-${index}`}>
                          {item.subTopic}
                        </Card.Body>
                      </Collapse>
                    </Card>
                  </Col>
                ))}
              </Card.Body>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Details;


// import {useParams} from "react-router-dom";
// import useFetchData from "../../hooks/useFetchData";
//
// import {Card} from "antd";
// import {endpoints} from "../../store/endpoints";
//
// import UL from "../../components/ui/Lists/Ulist";
// import Lists from "../../components/ui/Lists/Lists";
// import {Spinner} from "../../components/templates/spinner/Spinner";
// import Img from "../../components/ui/Images/coursesImg/Course1.png";
//
// import styles from "./course-details.module.css";
//
// const {Meta} = Card;
//
//
// const Details = () => {
//
//   const {courseId} = useParams();
//   const apiGetCourseDetail = endpoints.courses.courses
//
//   const {data, loading} = useFetchData(`${apiGetCourseDetail}/${courseId}`)
//
//   if(!data || loading) {
//     return <Spinner/>
//   }
//
//   return (
//     <section className={styles["course-details-section"]}>
//       <div className={styles["course-details-wrap"]}>
//         <div className={styles["course-details"]}>
//           <Card
//             className={styles["course-details-1"]}
//             cover={<img src={Img ? Img : ""} alt=""/>}
//           >
//             <Meta
//               title={data.courseName}
//               description="Contrary to popular belief, Lorem Ipsum is not simply random
//                 text. It has roots in a piece of classical Latin literature from
//                 45 BC, making it over 2000 years old. Richard McClintock, a
//                 Latin professor at Hampden-Sydney College in Virginia, looked up
//                 one of the more obscure Latin words, consectetur, from a Lorem
//                 Ipsum passage, and going through the cites of the word in
//                 classical literature, discovered the undoubtable source. Lorem
//                 Ipsum comes from sections 1.10.32 and 1.10.33 of "
//             />
//           </Card>
//           <div className={styles["course-details-2"]}>
//             <div className={styles["contents"]}>
//               <h3>Table of Content</h3>
//               <div className={styles["content-lists"]}>
//                 <UL>
//                   {data.videoIds.map((course, key) => (
//                     <Lists key={key}>{course.fileIds}</Lists>
//                   ))}
//                 </UL>
//               </div>
//             </div>
//             <div></div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
//
// export default Details;
