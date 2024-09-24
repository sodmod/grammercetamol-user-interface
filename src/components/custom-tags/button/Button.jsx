import styles from "./Button.module.css";
import PropTypes from "prop-types";

const Button = (props) => {
  return (
    <button
      type={props.type || "button"}
      className={`${styles.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;

Button.propTypes = {
  type: PropTypes.string || undefined,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
}
