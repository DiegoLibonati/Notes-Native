import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import { NavBar } from "../../components/NavBar/NavBar";
import { Search } from "../../components/Search/Search";
import { NotesList } from "../../components/NotesList/NotesList";

export const NotesPage = () => {
  return (
    <View style={styles.container}>
      <NavBar></NavBar>
      <Search></Search>
      <NotesList></NotesList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
});
