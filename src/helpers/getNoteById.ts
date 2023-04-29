import { NoteType } from "../types/types";

export const getNoteById = (notes: NoteType[], id: string) => {
  return notes.filter((note) => note.id === Number(id))[0];
};
