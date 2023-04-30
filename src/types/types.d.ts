export type NoteType = {
  id: number;
  date: string;
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
};

export type InputWithLabelType = {
  label: string;
  placeholder: string;
  inputHeight?: number | string;
};

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
