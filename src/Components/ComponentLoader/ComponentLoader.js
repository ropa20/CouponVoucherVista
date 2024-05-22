import React from "react";
import { ColorRing } from "react-loader-spinner";

const ComponentLoader = () => {
  return (
    <div className="d-flex align-items-center justify-content-center">
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={["#E66100", "#E66100", "#E66100", "#E66100", "#E66100"]}
      />
    </div>
  );
};

export default ComponentLoader;
