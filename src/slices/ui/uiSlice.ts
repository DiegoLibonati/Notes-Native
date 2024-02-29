import { createSlice } from "@reduxjs/toolkit";
import { UiState } from "../../types/types";

// Define the initial state using that type
const initialState: UiState = {
  modal: {
    isOpen: false,
  },
};

export const uiSlice = createSlice({
  name: "ui",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    handleOpenModal: (state) => {
      state.modal.isOpen = true;
      return;
    },
    handleCloseModal: (state) => {
      state.modal.isOpen = false;
      return;
    },
  },
});

export const { handleOpenModal, handleCloseModal } = uiSlice.actions;

export default uiSlice.reducer;
