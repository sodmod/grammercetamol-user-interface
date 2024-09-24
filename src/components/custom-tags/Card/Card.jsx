import styles from "./Card.module.css";
import PropTypes from "prop-types";

const Card = (props) => {
  return (
    <div className={`${styles.card} ${props.className}`} id={props.id}>
      {props.children}
    </div>
  );
};

export default Card;

Card.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  children: PropTypes.element.isRequired,
}
