import React from "react";
import Styles from "../css/container.module.css";

function Container({ children }) {
  return <div className={Styles.parentContainer}>{children}</div>;
}

export default Container;
