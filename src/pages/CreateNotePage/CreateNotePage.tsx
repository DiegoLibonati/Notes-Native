import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import Constants from "expo-constants";
import { NavBar } from "../../components/NavBar/NavBar";
import { InputWithLabel } from "../../components/InputWithLabel/InputWithLabel";

export const CreateNotePage = () => {
  return (
    <View style={styles.container}>
      <NavBar goBack={true}></NavBar>

      <View style={styles.form}>
        <InputWithLabel
          label="Insert a Title"
          placeholder="Title..."
        ></InputWithLabel>

        <InputWithLabel
          label="Insert a Content"
          placeholder="Content..."
        ></InputWithLabel>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Create</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  form: {
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: 5,
  },
  button: {
    alignSelf: "flex-end",
    backgroundColor: "#000",
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
  },
});
