import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import { NavBar } from "../../components/NavBar/NavBar";
import { Search } from "../../components/Search/Search";
import { NotesList } from "../../components/NotesList/NotesList";
import { Dialog } from "../../components/Dialog/Dialog";

export const NotesPage = () => {
  return (
    <View style={styles.container}>
      <NavBar filter={true}></NavBar>
      <Search></Search>
      <NotesList></NotesList>
      <Dialog></Dialog>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
});
