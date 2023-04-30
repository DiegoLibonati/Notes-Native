import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { NotesPayloadType, UiStateType } from "../../types/types";

// Define the initial state using that type
const initialState: UiStateType = {
  modal: {
    isOpen: true,
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
