import {Fragment} from "react"
import useFetchData from "../../hooks/useFetchData.js";
import {Spinner2} from "../../components/spinner/Spinner.jsx";
import {formatUploadedDate} from "../../utils/customConverter.js";
import {NavLink} from "react-router-dom";
import {routePath} from "../../utils/constants.js";

const Dashboard = () => {

  const {data, loading} = useFetchData("dashboard");

  // return jsx
  return <Fragment>
    <section className="courses">

      <h1 className="heading">Registered courses</h1>

      <div className="box-container">
        {loading ? <Spinner2/> : <>
          {Array.isArray(data?.dashboardRegisteredCourse) && data?.dashboardRegisteredCourse?.map((dat, index) => (
            <div key={index} className="box">
              <div className="tutor">
                <img src="../../images/pic-2.jpg" alt=""/>
                <div className="info">
                  <h3>{dat.authorName}</h3>
                  <span>{formatUploadedDate(dat.uploadedDate)}</span>
                </div>
              </div>
              <div className="thumb">
                <img src={dat.courseThumbnail} alt=""/>
                <span>{dat.numberOfCourses} videos</span>
              </div>
              <h3 className="title">{dat.courseTitle}</h3>
              <NavLink to={`/${routePath.course.courses}/${routePath.course.view}${dat.courseId}`}
                       className="inline-btn">view playlist</NavLink>
            </div>
          ))}
        </>}
      </div>
      <div className="more-btn">
        <NavLink className="inline-option-btn" to={""}>view all courses</NavLink>
      </div>
    </section>

    <section className="courses">

      <h1 className="heading">our courses</h1>

      <div className="box-container">
        {loading ? <Spinner2/> : <>
          {Array.isArray(data.dashboardGeneralCourse) && data.dashboardGeneralCourse.map((dat, index) => (
            <div key={index} className="box">
              <div className="tutor">
                <img src="../../images/pic-2.jpg" alt=""/>
                <div className="info">
                  <h3>{dat.authorName}</h3>
                  <span>{formatUploadedDate(dat.uploadedDate)}</span>
                </div>
              </div>
              <div className="thumb">
                <img src={dat.courseThumbnail} alt=""/>
                <span>{dat.numberOfCourses} videos</span>
              </div>
              <h3 className="title">{dat.courseTitle}</h3>
              <NavLink to={`/${routePath.course.courses}/${routePath.course.view}${dat.courseId}`}
                       className="inline-btn">view playlist</NavLink>
            </div>
          ))}
        </>}
      </div>
      <div className="more-btn">
        <NavLink href="courses.html" className="inline-option-btn">view all courses</NavLink>
      </div>

    </section>
  </Fragment>
}

export default Dashboard;
