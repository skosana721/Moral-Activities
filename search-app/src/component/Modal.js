import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { modalClose } from "../redux/Modal/actions";

const Modal = () => {
  const modalContent = useSelector((state) => state.modal.modalContent);
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(modalClose());
    }, 3000);
  });
  return (
    <div className="modal">
      <p>{modalContent}</p>
    </div>
  );
};

export default Modal;
