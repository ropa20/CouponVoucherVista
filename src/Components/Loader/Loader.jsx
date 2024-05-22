import React from 'react'
import { FadeLoader } from "react-spinners";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader">
        <FadeLoader color="#fff" cssOverride={{ top: 0, left: 27 }} />
      </div>
    </div>
  )
}

export default Loader