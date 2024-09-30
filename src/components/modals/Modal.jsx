import styles from "./modal.module.css";

const Modal = (props) => {
  return (<>
    <div className={styles["modal-backdrop"]}>
      {props.children}
    </div>
  </>)
}
export default Modal;