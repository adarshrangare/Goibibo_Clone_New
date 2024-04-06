import { toast, Bounce,Flip } from "react-toastify";

const errorToast = (message = "There is an Error") => {
    toast.dismiss();
  toast.error(message, {
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  });
};

const successToast = (message = "Successfull") => {
    toast.dismiss();
  toast.success(message, {
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Flip,
  });
};




export { errorToast,successToast };
