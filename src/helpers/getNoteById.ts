import { Note } from "../types/types";

export const getNoteById = (notes: Note[], id: string): Note => {
  return notes.filter((note) => note.id === Number(id))[0];
};
