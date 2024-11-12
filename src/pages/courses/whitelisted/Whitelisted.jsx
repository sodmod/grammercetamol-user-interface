// inbuilt
import {Fragment} from "react";
import EachCourse from "../../../components/course/each/EachCourse.jsx";


// const Whitelisted = () => {
//   const {data, loading} = useFetchData(endpoints.courses.whitelisted);
//
//   return < ViewCourses data={data} loading={loading} to={`/${routePath.course.courses}/view/`} buttonText={"View" +
//     " Course"}/>
// };


// whitelisted component
const Whitelisted = () => {
//   const {data, loading} = useFetchData(endpoints.courses.whitelisted);

  // jsx
  return <Fragment>
    <section className="courses">

      <h1 className="heading">Your Saved Courses</h1>

      <div className="box-container">
        <EachCourse/>

      </div>

    </section>
  </Fragment>
};


export default Whitelisted;
