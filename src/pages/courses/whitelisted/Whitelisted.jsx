import useFetchData from "../../../hooks/useFetchData";
import {endpoints} from "../../../store/endpoints";
import {routePath} from "../../../utils/constants";
import ViewCourses from "../../../components/course/view/ViewCourses.jsx";


const Whitelisted = () => {
  const {data, loading} = useFetchData(endpoints.courses.whitelisted);

  return < ViewCourses data={data} loading={loading} to={`/${routePath.course.courses}/view/`} buttonText={"View" +
    " Course"}/>
};

export default Whitelisted;
