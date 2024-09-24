import useFetchData from "../../../hooks/useFetchData.js";
import {endpoints} from "../../../store/endpoints.js";
import ViewCourses from "../../../components/course/view/ViewCourses.jsx";

function Registered(){

  const {data, loading} = useFetchData(endpoints.courses.registered);

  return <>
    <ViewCourses data={data} loading={loading} buttonText={"Continue Watching"} to={"continue watching"}/>
  </>
}

export default Registered;
