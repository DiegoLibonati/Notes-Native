export type NoteType = {
  id: number | string;
  date: string | Date;
  title: string;
  content: string;
};

export type NavBarType = {
  goBack?: boolean;
  filter?: boolean;
};

export type CheckboxType = {
  name: string;
  active: boolean;
  onPress: (name: string) => void;
};

export type NotesStateType = {
  notes: NoteType[];
  notesFiltered: NoteType[];
  isFiltering: boolean;
  filters: {
    id: string;
    name: string;
    isActive: boolean;
  }[];
};

export type NoteFilter = {
  id: string;
  name: string;
  isActive: boolean;
};

export type UiStateType = {
  modal: {
    isOpen: boolean;
  };
};

export type NotesPayloadType = {
  isFiltering: {
    valueFilter: string;
  };
  changeActiveFilter: {
    name: string;
  };
  note: NoteType;
};

export type InputWithLabelType = {
  label: string;
  placeholder: string;
  inputHeight?: number | string;
  value: string;
  onChangeText: (text: string) => void;
};

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
