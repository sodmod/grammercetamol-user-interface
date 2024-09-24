import PropTypes from "prop-types";

const UL = (props) => {
  return <ul className={props.className}>{props.children}</ul>;
};
export default UL;

UL.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}
