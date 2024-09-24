import {Container} from "react-bootstrap";
import "./overview.css";
import OverviewCard from "./card/OverviewCard.jsx";
import useFetchData from "../../hooks/useFetchData.js";
import {endpoints} from "../../store/endpoints.js";
import {Spinner} from "../spinner/Spinner.jsx";
import {routePath} from "../../utils/constants.js";
import {NavLink} from "react-router-dom";

function Overview(){

  const {data, loading} = useFetchData(endpoints.dashboard);

  return (
    <Container fluid className={"overview rounded-3 d-flex flex-wrap p-1 p-sm-1 justify-content-around bg-white"}>
      {
        loading ? <Spinner/>
          : <>
            <OverviewCard message={`Total numbers of  registered courses`} number={data?.registered}
                          to={`${routePath.course.courses}/${routePath.course["your-course"]}`}/>
            <OverviewCard message={`Total numbers of whitelisted courses`} number={data?.whitelisted}
                          to={`${routePath.course.courses}/${routePath.course["whitelisted-course"]}`}/>
          </>
      },
      <NavLink to={`${routePath.course.courses}/${routePath.course.view}`}
               className={"d-block text-decoration-none fs-5" +
                 " text-center" +
                 " bg-danger"}>
        Find out about our other courses
      </NavLink>
    </Container>
  )
}

export default Overview;
