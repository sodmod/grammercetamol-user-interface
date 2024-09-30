import {useState} from "react";

import {Link, useParams} from "react-router-dom";


import {Card} from "antd";
import {HeartOutlined} from "@ant-design/icons";


import {createPortal} from "react-dom";

import styles from "./details.module.css";
import {Spinner2} from "../../../components/spinner/Spinner.jsx";
import {endpoints} from "../../../store/endpoints.js";
import useFetchData from "../../../hooks/useFetchData.js";
import useMutate from "../../../hooks/useMutate.js";
import {overLay, routePath} from "../../../utils/constants.js";
import Button from "../../../components/custom-tags/button/Button.jsx";
import Modal from "../../../components/modals/Modal.jsx";
import Purchase from "../../../components/modals/buy-course/Purchase.jsx";
import UL from "../../../components/custom-tags/Lists/Ulist.jsx";
import Lists from "../../../components/custom-tags/Lists/Lists.jsx";

const {Meta} = Card;


const Details = () => {

  const [showModal, setShowModal] = useState(false);
  const [whiteListed, setWhiteListed] = useState(false);

  const {courseId} = useParams();
  const apiGetCourseDetail = endpoints.courses.courses
  const whitelist = `${endpoints.courses.whiteList}/${courseId}`;
  const unWhiteList = `${endpoints.courses.unWhiteList}/${courseId}`

  const {data, loading} = useFetchData(`${apiGetCourseDetail}/${courseId}`)


  const {onCall: whiteListAction} = useMutate({
    postUrl: whiteListed ? unWhiteList : whitelist,
    formMethod: "POST"
  });


  if(!data || loading) {
    return <Spinner2/>
  }
  const displayModal = () => {
    setShowModal((show) => !show);
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
      {
        showModal && createPortal(
          <Modal>
            <Purchase courseId={courseId} amount={data?.priceDTO} onClose={displayModal}
                      courseName={data?.courseName}/>
          </Modal>, overLay)
      }
      <section className={styles["course-details-section"]}>
        <div className={styles["course-details-wrap"]}>
          <div className={styles["course-details"]}>
            <Card
              className={styles["course-details-1"]}
              cover={<img src={data?.thumbnail_url} alt="Course Thumbnail"/>}
            >
              <div className={data?.whiteListed ? styles["white-list"] : styles["nowhite-list"]}>
                <Button>{data?.whiteListed ? "Remove from whitelists" : "Add to my whitelists"}</Button>
                <Button onClick={whiteListFunction}>
                  <HeartOutlined/>
                </Button>
              </div>
              {!data.bought && !data.free ? (
                  <div className={styles["buy-now"]} onClick={displayModal}>
                    <Button>Buy Now</Button>
                  </div>) :
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
                  )}
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
                      <Lists key={key}>{course.fileIds}</Lists>
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
