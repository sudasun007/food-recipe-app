import React from "react";
import Styles from "../css/innerContainer.module.css";

function InnerContainer({ children }) {
  return <div className={Styles.innerContainer}>{children}</div>;
}

export default InnerContainer;
