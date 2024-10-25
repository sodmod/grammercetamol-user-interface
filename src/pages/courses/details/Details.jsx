import {useState} from "react";
import {Link, NavLink, useParams} from "react-router-dom";
import {Card} from "antd";
import {HeartOutlined} from "@ant-design/icons";
import {Spinner2} from "../../../components/spinner/Spinner.jsx";
import {endpoints} from "../../../store/endpoints.js";
import useFetchData from "../../../hooks/useFetchData.js";
import useMutate from "../../../hooks/useMutate.js";
import {routePath} from "../../../utils/constants.js";
import Button from "../../../components/custom-tags/button/Button.jsx";
import UL from "../../../components/custom-tags/Lists/Ulist.jsx";
import Lists from "../../../components/custom-tags/Lists/Lists.jsx";

import styles from "./details.module.css";
import {Accordion} from "react-bootstrap";

const {Meta} = Card;

const Details = () => {
  const [whiteListed, setWhiteListed] = useState(false);

  const {courseId} = useParams();
  const apiGetCourseDetail = endpoints.courses.courses
  const whitelist = `${endpoints.courses.whiteList}/${courseId}`;
  const unWhiteList = `${endpoints.courses.unWhiteList}/${courseId}`;
  const {data, loading} = useFetchData(`${apiGetCourseDetail}/${courseId}`);

  const {onCall: whiteListAction} = useMutate({
    postUrl: whiteListed ? unWhiteList : whitelist,
    formMethod: "POST"
  });

  if(!data || loading) {
    return <Spinner2/>
  }

  async function whiteListFunction(){

    if(data?.whiteListed) {
      setWhiteListed(true);
    }
    if(!data?.whiteListed) {
      setWhiteListed(false)
    }

    await whiteListAction({request: undefined})
    if(whiteListed) {
      setWhiteListed(false);
    }
    if(!whiteListed) {
      setWhiteListed(true)
    }

  }

  return (
    <>
      <section className={styles["course-details-section"]}>
        <div className={styles["course-details-wrap"]}>
          <div className={styles["course-details"]}>
            <Card
              className={styles["course-details-1"]}
              cover={
                <img src={data?.thumbnail_url} alt="Course Thumbnail"
                     style=
                       {{
                         height: "400px",
                         objectFit: "cover"
                       }}/>
              }>
              <div className={data?.whiteListed ? styles["white-list"] : styles["nowhite-list"]}>
                <Button>{data?.whiteListed ? "Remove from whitelists" : "Add to my whitelists"}</Button>
                <Button onClick={whiteListFunction}>
                  <HeartOutlined/>
                </Button>
              </div>
              {
                !data.bought && !data.free ? (
                    <NavLink className={styles["buy-now"]} to={`/pay/${courseId}`}>
                    <Button>Buy Now</Button>
                    </NavLink>) :
                data?.bought && !data?.free ? (
                    <div className={styles["buy-now"]}>
                      <Button>
                        <Link
                          className={"text-decoration-none text-white"}
                          to={`/${routePath.course.courses}/${routePath.course["stream"]}${courseId}`}>
                          Continue Your Lesson
                        </Link>
                      </Button>
                    </div>) :
                  data.free && (
                    <div className={styles["buy-now"]}>
                      <Button>
                        <Link
                          className={"text-decoration-none text-white"}
                          to={`/${routePath.course.courses}/${routePath.course["stream"]}${courseId}`}>
                          Start Watching for Free
                        </Link>
                      </Button>
                    </div>
                  )
              }
              <Meta
                title={data.courseName}
                description={data.summary ? data.summary : "Summary empty"}
              />
            </Card>
            <div className={styles["course-details-2"]}>
              <div className={styles["contents"]}>
                <h3>Table of Content</h3>
                <div className={styles["content-lists"]}>
                  <UL>
                    {data.videoIds.map((course, key) => (
                      <Accordion key={key}>
                        <Accordion.Item eventKey={key}>
                          <Accordion.Header>{course.subTopic}</Accordion.Header>
                          <Accordion.Body className={"text-black"}>{course.description}</Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                      // <Lists key={key}>{course.subTopic}</Lists>
                    ))}
                  </UL>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Details;
