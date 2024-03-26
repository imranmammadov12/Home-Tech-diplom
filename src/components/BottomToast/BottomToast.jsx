import React from 'react';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const BottomToast = () => {
  return (
    <ToastContainer
    position="bottom-center"
    autoClose={2000}
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