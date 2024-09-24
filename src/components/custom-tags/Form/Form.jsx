import PropTypes from "prop-types";

const Form = (props) => {
  return <form onSubmit={props.submit}>{props.children}</form>;
};
export default Form;

Form.prototype = {
  submit: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
}
