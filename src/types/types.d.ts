import { store } from "../slices/store";

// Types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type UiState = {
  modal: {
    isOpen: boolean;
  };
};

export type NotesState = {
  notes: Note[];
  notesFiltered: Note[];
  isFiltering: boolean;
  filters: NoteFilter[];
};

export type Note = {
  id: number | string;
  date: string;
  title: string;
  content: string;
};

export type NotesPayload = {
  isFiltering: {
    valueFilter: string;
  };
  changeActiveFilter: {
    name: string;
  };
  note: Note;
};

export type NoteFilter = {
  id: string;
  name: string;
  isActive: boolean;
};

// Interfaces

export interface NavBarProps {
  goBack?: boolean;
  filter?: boolean;
}

export interface NoteProps {
  id: number | string;
  date: string;
  title: string;
  content: string;
}

export interface CheckboxProps {
  name: string;
  active: boolean;
  onPress: (name: string) => void;
}

export interface NoteCompleteProps {
  date: string;
  title: string;
  content: string;
}

export type InputWithLabelProps = {
  label: string;
  placeholder: string;
  inputHeight?: DimensionValue;
  value: string;
  placeholderTextColor?: string;
  onChangeText: (text: string) => void;
};
