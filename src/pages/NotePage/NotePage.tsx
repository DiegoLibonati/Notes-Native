import { View, StyleSheet } from "react-native";
import { useParams } from "react-router-native";
import Constants from "expo-constants";
import { getNoteById } from "../../helpers/getNoteById";
import { NavBar } from "../../components/NavBar/NavBar";
import { NoteComplete } from "../../components/NoteComplete/NoteComplete";
import { useSelector } from "react-redux";
import { RootState } from "../../types/types";

export const NotePage = () => {
  const { notes } = useSelector((state: RootState) => state.notes);
  const { idNote } = useParams();

  const note = getNoteById(notes, idNote!);

  console.log(note);

  return (
    <View style={styles.container}>
      <NavBar goBack={true}></NavBar>

      <NoteComplete {...note}></NoteComplete>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
});
