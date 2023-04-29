import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { NotesPayloadType, NotesStateType } from "../../types/types";

// Define the initial state using that type
const initialState: NotesStateType = {
  notes: [
    {
      id: 0,
      date: "05 Jul",
      title: "Esta es una nota 24/7",
      content:
        "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
    },
    {
      id: 1,
      date: "06 Jul",
      title: "Esta es una notaaaaaaaaaaaaaaaaaaa 24/7",
      content:
        "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
    },
  ],
  notesFiltered: [],
  isFiltering: false,
};

export const notesSlice = createSlice({
  name: "notes",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    handleFilter: (
      state,
      action: PayloadAction<NotesPayloadType["isFiltering"]>
    ) => {
      const newNotes = state.notes.filter((note) =>
        note.title.includes(action.payload.valueFilter)
      );

      if (!newNotes.length) {
        state.notesFiltered = [];
        return;
      }

      state.notesFiltered = newNotes;
      return;
    },
    handleIsFiltering: (
      state,
      action: PayloadAction<NotesPayloadType["isFiltering"]>
    ) => {
      if (action.payload.valueFilter && !state.isFiltering) {
        state.isFiltering = true;
        return;
      }

      if (!action.payload.valueFilter && state.isFiltering) {
        state.isFiltering = false;
        return;
      }
    },
  },
});

export const { handleFilter, handleIsFiltering } = notesSlice.actions;

export default notesSlice.reducer;
