import PropTypes from "prop-types";
import {NavLink} from "react-router-dom";

function OverviewCard({number, message, to}){

  return (
    <div className={"shadow rounded-3 p-2 p-md-2 bg-black"}>
      <div className={"rounded-4 bg-white"}>
        <div className={" mx-md-auto text-center overview-size align-content-center"}
        >
          <div
            className={"shadow rounded-2 mx-auto h-100 d-flex align-items-center justify-content-center number" +
              " pt-2"}>
            <p className={"text-black paragraph w-100"}>
              10
              {/*{number}*/}
            </p>
          </div>
        </div>
        <p className="px-2 w-100 align-items-center text-black text-center pt-2 pt-md-3 fs-5 ">
          {message}
        </p>
      </div>
      <NavLink to={to} className={"text-decoration-none w-50 rounded-3 mx-auto d-block bg-white p-2" +
        " text-center mt-2 text-danger fs-4 fw-semibold"}>
        Click here
      </NavLink>
    </div>
  )
}

export default OverviewCard;


OverviewCard.propTypes = {
  to: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
}
