import {forwardRef, useImperativeHandle, useRef} from "react";

import styles from "./Input.module.css";
import PropTypes from "prop-types";

const handle = (activate) => {
  return {
    focus: activate,
  };
};

// export const Input = forwardRef((props, ref) => {
//   const inputRef = useRef();

//   const activate = () => {
//     inputRef.current.focus();
//   };

//   useImperativeHandle(ref, () => handle(activate));

//   return (
//     <>
//       <div className={`${props.className} ${styles.control}`}>
//         <label htmlFor={props.id}>{props.label}</label>
//         <input
//           ref={inputRef}
//           name={props.name}
//           id={props.id}
//           type={props.type}
//           value={props.value}
//           onChange={props.onChange}
//           onBlur={props.onBlur}
//         />
//         {props.hasError && <p>{props.message}</p>}
//       </div>
//     </>
//   );
// });

export const Input = forwardRef((props, ref) => {
  const inputRef = useRef();

  const activate = () => {
    inputRef.current.focus();
  };

  useImperativeHandle(ref, () => handle(activate));

  return (
    <>
      <div>
        <div className={styles.ok}>
          <input
            name={props.name}
            id={props.id}
            type={props.type}
            value={props.value}
            onChange={props.onChange}
            onBlur={props.onBlur}
            placeholder={props.placeholder}
            required={props.required}
          />
          <i className={props.icon}></i>
        </div>
        {props.hasError && (
          <p style={{color: "red", textAlign: "center"}}>{props.message}</p>
        )}
      </div>
    </>
  );
});

Input.prototype = {
  name: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  icon: PropTypes.string,
  message: PropTypes.string,
  forwardedRef: PropTypes.func,
}
