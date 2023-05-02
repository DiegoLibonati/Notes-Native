import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import { NavBar } from "../../components/NavBar/NavBar";
import { Search } from "../../components/Search/Search";
import { NotesList } from "../../components/NotesList/NotesList";
import { Dialog } from "../../components/Dialog/Dialog";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigate } from "react-router-native";
import { theme } from "../../theme/theme";

export const NotesPage = () => {
  const navigate = useNavigate();

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
        color={theme.colors.white}
        onPress={() => navigate("/new")}
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
  new: {
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
