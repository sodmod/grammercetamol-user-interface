import styles from "../courses.module.css"
import PropTypes from "prop-types";
import {Spinner2} from "../../spinner/Spinner.jsx";
import EachCourse from "../each/EachCourse.jsx";


const ViewCourses = ({data, loading, buttonText, to}) => {
  return <div className="text-center">
    {loading ? (
      <Spinner2/>
    ) : Array.isArray(data) && data.length > 0 ? (
      <div className={styles.grid_container}>
        {data.map((course, key) => (
          <EachCourse key={key} course={course} to={to} buttonText={buttonText}/>
        ))}
      </div>
    ) : (
      "No courses available"
    )}
  </div>
};

export default ViewCourses;

ViewCourses.propTypes = {
  to: PropTypes.string.isRequired,
  data: PropTypes.array || undefined,
  loading: PropTypes.bool || undefined,
  buttonText: PropTypes.string.isRequired
}
