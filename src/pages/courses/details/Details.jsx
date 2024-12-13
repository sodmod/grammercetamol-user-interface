import {Fragment} from "react";
import {NavLink, useParams} from "react-router-dom";

import {endpoints} from "../../../store/endpoints.js";
import useFetchData from "../../../hooks/useFetchData.js";
import {formatUploadedDate} from "../../../utils/customConverter.js";
import {Spinner2} from "../../../components/spinner/Spinner.jsx";
import ThumbnailWrapper from "../../../components/thumbnails/ThumbnailWrapper.jsx";


// const Details = () => {
//   const [whiteListed, setWhiteListed] = useState(false);
//
//   const {courseId} = useParams();
//   const apiGetCourseDetail = endpoints.courses.courses
//   const whitelist = `${endpoints.courses.whiteList}/${courseId}`;
//   const unWhiteList = `${endpoints.courses.unWhiteList}/${courseId}`;
//   const {data, loading} = useFetchData(`${apiGetCourseDetail}/${courseId}`);
//
//   const {onCall: whiteListAction} = useMutate({
//     postUrl: whiteListed ? unWhiteList : whitelist,
//     formMethod: "POST"
//   });
//
//   if(!data || loading) {
//     return <Spinner2/>
//   }
//
//   async function whiteListFunction(){
//
//     if(data?.whiteListed) {
//       setWhiteListed(true);
//     }
//     if(!data?.whiteListed) {
//       setWhiteListed(false)
//     }
//
//     await whiteListAction({request: undefined})
//     if(whiteListed) {
//       setWhiteListed(false);
//     }
//     if(!whiteListed) {
//       setWhiteListed(true)
//     }
//
//   }
//
//   return (
//     <>
//       <section className={styles["course-details-section"]}>
//         <div className={styles["course-details-wrap"]}>
//           <div className={styles["course-details"]}>
//             <Card
//               className={styles["course-details-1"]}
//               cover={
//                 <img src={data?.thumbnail_url} alt="Course Thumbnail"
//                      style=
//                        {{
//                          height: "400px",
//                          objectFit: "cover"
//                        }}/>
//               }>
//               <div className={data?.whiteListed ? styles["white-list"] : styles["nowhite-list"]}>
//                 <Button>{data?.whiteListed ? "Remove from whitelists" : "Add to my whitelists"}</Button>
//                 <Button onClick={whiteListFunction}>
//                   <HeartOutlined/>
//                 </Button>
//               </div>
//               {
//                 !data.bought && !data.free ? (
//                     <NavLink className={styles["buy-now"]} to={`/pay/${courseId}`}>
//                     <Button>Buy Now</Button>
//                     </NavLink>) :
//                 data?.bought && !data?.free ? (
//                     <div className={styles["buy-now"]}>
//                       <Button>
//                         <Link
//                           className={"text-decoration-none text-white"}
//                           to={`/${routePath.course.courses}/${routePath.course["stream"]}${courseId}`}>
//                           Continue Your Lesson
//                         </Link>
//                       </Button>
//                     </div>) :
//                   data.free && (
//                     <div className={styles["buy-now"]}>
//                       <Button>
//                         <Link
//                           className={"text-decoration-none text-white"}
//                           to={`/${routePath.course.courses}/${routePath.course["stream"]}${courseId}`}>
//                           Start Watching for Free
//                         </Link>
//                       </Button>
//                     </div>
//                   )
//               }
//               <Meta
//                 title={data.courseName}
//                 description={data.summary ? data.summary : "Summary empty"}
//               />
//             </Card>
//             <div className={styles["course-details-2"]}>
//               <div className={styles["contents"]}>
//                 <h3>Table of Content</h3>
//                 <div className={styles["content-lists"]}>
//                   <UL>
//                     {data.videoIds.map((course, key) => (
//                       <Accordion key={key}>
//                         <Accordion.Item eventKey={key}>
//                           <Accordion.Header>{course.subTopic}</Accordion.Header>
//                           <Accordion.Body className={"text-black"}>{course.description}</Accordion.Body>
//                         </Accordion.Item>
//                       </Accordion>
//                       // <Lists key={key}>{course.subTopic}</Lists>
//                     ))}
//                   </UL>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// details component
const Details = () => {

  // const [whiteListed, setWhiteListed] = useState(false);

  const {courseId} = useParams();
  const apiGetCourseDetail = endpoints.courses.courses
  // const whitelist = `${endpoints.courses.whiteList}/${courseId}`;
  // const unWhiteList = `${endpoints.courses.unWhiteList}/${courseId}`;
  const {data, loading} = useFetchData(`${apiGetCourseDetail}/${courseId}`);

  return <Fragment>
    {loading ? <Spinner2/> :
      <>
        <section className="playlist-details">
          <h1 className="heading">playlist details</h1>

          <div className="row">

            <div className="column">
              <div className="save-playlist">
                <button type="submit"><i className="far fa-bookmark"></i> <span>save playlist</span></button>
              </div>

              <div className="thumb">
                <img src={data.thumbnail_url} alt=""/>
                <span>{data.videoIds.length} videos</span>
              </div>
            </div>
            <div className="column">
              <div className="tutor">
                <img src="images/pic-2.jpg" alt=""/>
                <div>
                  <h3>{`${data.authorDto.firstName} ${data.authorDto.lastName}`}</h3>
                  <span>{formatUploadedDate(data.localDateTime)}</span>
                </div>
              </div>

              <div className="details">
                <h3>{data.courseName}</h3>
                <p>{data.summary}.</p>
                <NavLink to={""} className="inline-btn">view profile</NavLink>
              </div>
            </div>
          </div>
        </section>

        <section className="playlist-videos">
          <h1 className="heading">playlist videos</h1>
          <div className="box-container">
            {Array.isArray(data.videoIds) && data.videoIds.map((dat, index) => (
              <NavLink key={index} className="box">
                <i className="fas fa-play"></i>
                <ThumbnailWrapper url={dat.url}/>
                <h3>{dat.subTopic}</h3>
              </NavLink>
            ))}
          </div>
        </section>
      </>}
  </Fragment>
};

export default Details;
