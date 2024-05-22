import React from "react";
import "./ErrorLabel.css";

const ErrorLabel = ({ ErrorDisplay, color }) => {
  const Color = color === true ? "success" : "star-required";
  return (
    <>
      <span className={`${Color} Errlabel-font_size`}>{ErrorDisplay}</span>
    </>
  );
};

export default ErrorLabel;
