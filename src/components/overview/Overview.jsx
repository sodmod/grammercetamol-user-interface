import {Container} from "react-bootstrap";
import "./overview.css";
import OverviewCard from "./card/OverviewCard.jsx";
import useFetchData from "../../hooks/useFetchData.js";
import {endpoints} from "../../store/endpoints.js";
import {Spinner} from "../spinner/Spinner.jsx";
import {routePath} from "../../utils/constants.js";

function Overview(){

  const {data, loading} = useFetchData(endpoints.dashboard);

  return (
    <Container fluid className={"h-100 rounded-3 d-flex flex-wrap p-1 p-sm-1 align-items-center" +
      " justify-content-around "} style={{backgroundColor: "#470E0E"}}>
      {
        loading ? <Spinner/>
          : <>
            <OverviewCard message={`Total numbers of  registered courses`} number={data?.registered}
                          to={`${routePath.course.courses}/${routePath.course["your-course"]}`}/>
            <OverviewCard message={`Total numbers of whitelisted courses`} number={data?.whitelisted}
                          to={`${routePath.course.courses}/${routePath.course["whitelisted-course"]}`}/>
          </>
      }
    </Container>
  )
}

export default Overview;
