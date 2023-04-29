export type NoteType = {
  id: number;
  date: string;
  title: string;
  content: string;
};

export type NavBarType = {
  goBack?: boolean;
};

export type NotesStateType = {
  notes: NoteType[];
  notesFiltered: NoteType[];
  isFiltering: boolean;
};

export type NotesPayloadType = {
  isFiltering: {
    valueFilter: string;
  };
};

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
