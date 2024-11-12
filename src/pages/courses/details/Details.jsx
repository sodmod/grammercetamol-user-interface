import {Fragment} from "react";


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

const Details = () => {

  return <Fragment>
    <section className="playlist-details">

      <h1 className="heading">playlist details</h1>

      <div className="row">

        <div className="column">
          <form action="" method="post" className="save-playlist">
            <button type="submit"><i className="far fa-bookmark"></i> <span>save playlist</span></button>
          </form>

          <div className="thumb">
            <img src="images/thumb-1.png" alt=""/>
            <span>10 videos</span>
          </div>
        </div>
        <div className="column">
          <div className="tutor">
            <img src="images/pic-2.jpg" alt=""/>
            <div>
              <h3>john deo</h3>
              <span>21-10-2022</span>
            </div>
          </div>

          <div className="details">
            <h3>complete HTML tutorial</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum minus reiciendis, error sunt veritatis
              exercitationem deserunt velit doloribus itaque voluptate.</p>
            <a href="teacher_profile.html" className="inline-btn">view profile</a>
          </div>
        </div>
      </div>

    </section>

    <section className="playlist-videos">

      <h1 className="heading">playlist videos</h1>

      <div className="box-container">

        <a className="box" href="watch-video.html">
          <i className="fas fa-play"></i>
          <img src="images/post-1-1.png" alt=""/>
          <h3>complete HTML tutorial (part 01)</h3>
        </a>

        <a className="box" href="watch-video.html">
          <i className="fas fa-play"></i>
          <img src="images/post-1-2.png" alt=""/>
          <h3>complete HTML tutorial (part 02)</h3>
        </a>

        <a className="box" href="watch-video.html">
          <i className="fas fa-play"></i>
          <img src="images/post-1-3.png" alt=""/>
          <h3>complete HTML tutorial (part 03)</h3>
        </a>

        <a className="box" href="watch-video.html">
          <i className="fas fa-play"></i>
          <img src="images/post-1-4.png" alt=""/>
          <h3>complete HTML tutorial (part 04)</h3>
        </a>

        <a className="box" href="watch-video.html">
          <i className="fas fa-play"></i>
          <img src="images/post-1-5.png" alt=""/>
          <h3>complete HTML tutorial (part 05)</h3>
        </a>

        <a className="box" href="watch-video.html">
          <i className="fas fa-play"></i>
          <img src="images/post-1-6.png" alt=""/>
          <h3>complete HTML tutorial (part 06)</h3>
        </a>

      </div>

    </section>
  </Fragment>
};

export default Details;
