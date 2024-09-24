import React from "react";

import styles from "./spinner.module.css";

export const Spinner = ({classname}) => {
  return (
    <div style={{
      width: "100%",
      height: "60vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}>
      <div className={styles.loader}></div>
    </div>
  )
}

export const Spinner2 = () => {
  return <div className={styles.loader}></div>
}