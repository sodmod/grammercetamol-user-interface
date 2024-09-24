import PropTypes from "prop-types";

const Lists = (props) => {
  return <li className={props.className}>{props.children}</li>;
};
export default Lists;

Lists.propTypes = {
  className: PropTypes.string || undefined,
  children: PropTypes.node.isRequired,
};
