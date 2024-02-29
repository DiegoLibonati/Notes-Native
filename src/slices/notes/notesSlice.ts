import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {
  NoteFilter,
  NotesPayload,
  NotesState,
} from "../../types/types";

// Define the initial state using that type
const initialState: NotesState = {
  notes: [],
  notesFiltered: [],
  isFiltering: false,
  filters: [
    {
      id: "filter0",
      name: "Date",
      isActive: true,
    },
    { id: "filter1", name: "Title", isActive: false },
    { id: "filter2", name: "Description", isActive: false },
  ],
};

export const notesSlice = createSlice({
  name: "notes",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    handleFilter: (
      state,
      action: PayloadAction<NotesPayload["isFiltering"]>
    ) => {
      const filterBy = state.filters.find((filter) => filter.isActive)?.name;
      let newNotes = null;

      if (filterBy === "Date") {
        newNotes = state.notes.filter((note) =>
          note.date
            .toLowerCase()
            .includes(action.payload.valueFilter.toLowerCase())
        );
      } else if (filterBy === "Title") {
        newNotes = state.notes.filter((note) =>
          note.title
            .toLowerCase()
            .includes(action.payload.valueFilter.toLowerCase())
        );
      } else {
        newNotes = state.notes.filter((note) =>
          note.content
            .toLowerCase()
            .includes(action.payload.valueFilter.toLowerCase())
        );
      }

      if (!newNotes?.length) {
        state.notesFiltered = [];
        return;
      }

      state.notesFiltered = newNotes;
      return;
    },
    handleIsFiltering: (
      state,
      action: PayloadAction<NotesPayload["isFiltering"]>
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
    handleChangeFilter: (
      state,
      action: PayloadAction<NotesPayload["changeActiveFilter"]>
    ) => {
      state.filters.reduce((filters: NoteFilter[], filter: NoteFilter) => {
        if (filter.name === action.payload.name) {
          filter.isActive = true;
          filters.push(filter);
        } else {
          filter.isActive = false;
          filters.push(filter);
        }

        return filters;
      }, []);
    },
    handleNewNote: (state, action: PayloadAction<NotesPayload["note"]>) => {
      state.notes.push(action.payload);
      return;
    },
    handleRemoveNote: (
      state,
      action: PayloadAction<NotesPayload["note"]>
    ) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload.id);
      return;
    },
  },
});

export const {
  handleFilter,
  handleIsFiltering,
  handleChangeFilter,
  handleNewNote,
  handleRemoveNote,
} = notesSlice.actions;

export default notesSlice.reducer;
