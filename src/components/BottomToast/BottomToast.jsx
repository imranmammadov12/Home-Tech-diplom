import React from 'react';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const BottomToast = () => {
  return (
    <ToastContainer
    position="top-left"
    autoClose={500}
    hideProgressBar={true}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    draggable
    theme="dark"
/>
  )
}

export default BottomToast;