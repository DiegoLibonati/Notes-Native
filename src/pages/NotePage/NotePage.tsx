import { View, StyleSheet } from "react-native";
import { useNavigate, useParams } from "react-router-native";
import Constants from "expo-constants";
import { getNoteById } from "../../helpers/getNoteById";
import { NavBar } from "../../components/NavBar/NavBar";
import { NoteComplete } from "../../components/NoteComplete/NoteComplete";
import { useSelector } from "react-redux";
import { Note, RootState } from "../../types/types";
import { theme } from "../../theme/theme";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useDispatch } from "react-redux";
import { handleRemoveNote } from "../../slices/notes/notesSlice";
import { useState, useEffect } from "react";

export const NotePage = (): JSX.Element => {
  const [note, setNote] = useState<Note | null>(null);

  const { notes } = useSelector((state: RootState) => state.notes);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { idNote } = useParams();

  useEffect(() => {
    if (idNote) {
      setNote(getNoteById(notes, idNote!));
    }
  }, [idNote]);

  return (
    <View style={styles.container}>
      <NavBar goBack={true}></NavBar>

      <NoteComplete {...note!}></NoteComplete>

      <Ionicons
        name="close"
        size={30}
        style={styles.remove}
        color={theme.colors.white}
        onPress={() => {
          dispatch(handleRemoveNote(note!));
          navigate("/");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.primary,
  },
  remove: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 10,
    right: 10,
    borderRadius: 50,
    elevation: 1,
    backgroundColor: theme.colors.secondary,
    padding: 10,
    fontSize: 25,
  },
});
