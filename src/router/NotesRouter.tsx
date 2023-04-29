import React from "react";
import { Routes, Route, Navigate } from "react-router-native";
import { NotesPage } from "../pages/NotesPage/NotesPage";
import { NotePage } from "../pages/NotePage/NotePage";

export const NotesRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<NotesPage></NotesPage>}></Route>
      <Route path="/:idNote" element={<NotePage></NotePage>}></Route>
      <Route path="/*" element={<Navigate to="/"></Navigate>}></Route>
    </Routes>
  );
};
