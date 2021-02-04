import React from "react";
import { MODAL_CLOSE, MODAL_OPEN } from "./actionTypes";

const initialState = {
  isModalOpen: false,
  modalContent: "",
};
export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case MODAL_OPEN:
      return {
        ...state,
        isModalOpen: true,
        modalContent: "Submitted Successfully...",
      };
    case MODAL_CLOSE:
      return {
        ...state,
        isModalOpen: false,
      };

    default:
      return;
  }
};
