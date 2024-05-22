import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toaster = () => {
  return (
    <ToastContainer
      style={{ zIndex: "1000000000" }}
      autoClose={3000}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss={false}
      draggable
      pauseOnHover={true}
    />
  );
};

export default Toaster;
