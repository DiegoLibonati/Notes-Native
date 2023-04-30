import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import { NavBar } from "../../components/NavBar/NavBar";
import { Search } from "../../components/Search/Search";
import { NotesList } from "../../components/NotesList/NotesList";
import { Dialog } from "../../components/Dialog/Dialog";
import Ionicons from "@expo/vector-icons/Ionicons";

export const NotesPage = () => {
  return (
    <View style={styles.container}>
      <NavBar filter={true}></NavBar>
      <Search></Search>
      <NotesList></NotesList>
      <Dialog></Dialog>

      <Ionicons
        name="pencil"
        size={30}
        style={styles.new}
        color={"#000"}
        onPress={() => console.log("create")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  new: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 10,
    right: 10,
    borderRadius: 50,
    elevation: 1,
    backgroundColor: "#fff",
    padding: 10,
    fontSize: 25,
  },
});
