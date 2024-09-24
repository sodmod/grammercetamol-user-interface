import PropTypes from "prop-types";
import {NavLink} from "react-router-dom";

function OverviewCard({number, message, to}){

  return (
    <div className={"rounded-2 custom-responsive-width pb-2"}>
      <div className={"shadow rounded-3 p-md-4 w-100 h-50 mx-auto bg-white"}>
        <div className={"rounded-4 h-75"}>
          <div className={"mx-md-auto  text-center overview-size h-50" + " align-content-center"}
          >
            <div
              className={"shadow rounded-2 mx-auto h-100 d-flex align-items-center" + " justify-content-center number mt-2"}>
              <p className={"text-black paragraph w-100"}>{number}</p>
            </div>
          </div>
          <p className="px-2 w-100 align-items-center text-black h-50 text-center pt-2 pt-md-3 fs-5 ">
            {message}
          </p>
        </div>
        <NavLink to={to} className={"text-decoration-none w-50 rounded-3 mx-auto d-block bg-danger text-black p-2" +
          " text-center" +
          " mt-2"}>
          Click here
        </NavLink>
      </div>
    </div>
  )
}

export default OverviewCard;


OverviewCard.propTypes = {
  to: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
}
