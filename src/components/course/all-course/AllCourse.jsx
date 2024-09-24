import {Spinner2} from "../../spinner/Spinner";
import styles from "../courses.module.css";
import useFetchData from "../../../hooks/useFetchData.js";
import {endpoints} from "../../../store/endpoints.js";
import EachCourse from "../each/EachCourse.jsx";
import {routePath} from "../../../utils/constants.js";

// This component displays all available courses to users
const AllCourse = () => {

  const {data: allCourse, loading} = useFetchData(endpoints.courses.courses);

  return <div>
    <h2>Explore Courses</h2>
    {loading ? <Spinner2/> : <div className={styles.grid_container}>
      {Array.isArray(allCourse) && allCourse.map((course) => (
        <EachCourse key={course.courseId} course={course} to={routePath.course.view} buttonText={"View More"}/>
      ))}
    </div>}
  </div>
}

export default AllCourse;
