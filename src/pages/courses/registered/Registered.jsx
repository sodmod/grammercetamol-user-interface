import {Fragment} from "react";
import EachCourse from "../../../components/course/each/EachCourse.jsx";

// const Registered = () => {
//
//   const {data, loading} = useFetchData(endpoints.courses.registered);
//
//   return <>
//     <ViewCourses data={data} loading={loading} buttonText={"Continue Watching"} to={"continue watching"}/>
//   </>
// }

// registered courses
const Registered = () => {
//   const {data, loading} = useFetchData(endpoints.courses.registered);

  // jsx
  return <Fragment>
    <section className="courses">

      <h1 className="heading">Your Courses</h1>

      <div className="box-container">
        <EachCourse/>
      </div>

    </section>
  </Fragment>
}


export default Registered;
