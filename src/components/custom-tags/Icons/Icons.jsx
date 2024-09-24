import PropTypes from "prop-types";

const Icons = (props) => {
  return <i className={props.icons} onClick={props.onClick}/>;
};
export default Icons;

Icons.propTypes = {
  icons: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}
