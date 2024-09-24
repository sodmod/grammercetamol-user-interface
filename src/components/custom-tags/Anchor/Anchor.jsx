import PropTypes from "prop-types";

const Anchor = (props) => {
  return <a href={props.href}>{props.children}</a>;
};
export default Anchor;

Anchor.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
}
