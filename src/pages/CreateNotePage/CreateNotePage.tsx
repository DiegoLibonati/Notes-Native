import { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import Constants from "expo-constants";
import { NavBar } from "../../components/NavBar/NavBar";
import { InputWithLabel } from "../../components/InputWithLabel/InputWithLabel";
import { useDispatch } from "react-redux";
import { handleNewNote } from "../../slices/notes/notesSlice";
import { useNavigate } from "react-router-native";
import { theme } from "../../theme/theme";
import { Note } from "../../types/types";

export const CreateNotePage = (): JSX.Element => {
  const [formData, setFormData] = useState<Pick<Note, "title" | "content">>({
    title: "",
    content: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (): void => {
    const note = {
      id: Number(new Date().getMilliseconds()),
      date: new Date().toLocaleString("default", {
        day: "2-digit",
        month: "long",
      }),
      title: formData.title,
      content: formData.content,
    };

    dispatch(handleNewNote(note));
    navigate("/");
  };

  return (
    <View style={styles.container}>
      <NavBar goBack={true}></NavBar>

      <View style={styles.form}>
        <InputWithLabel
          label="Insert a Title"
          placeholder="Title..."
          value={formData.title}
          placeholderTextColor={theme.colors.white}
          onChangeText={(text) => {
            setFormData({ ...formData, title: text });
          }}
        ></InputWithLabel>

        <InputWithLabel
          label="Insert a Content"
          placeholder="Content..."
          value={formData.content}
          placeholderTextColor={theme.colors.white}
          onChangeText={(text) => {
            setFormData({ ...formData, content: text });
          }}
        ></InputWithLabel>

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
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
    backgroundColor: theme.colors.primary,
  },
  form: {
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: 5,
  },
  button: {
    alignSelf: "flex-end",
    backgroundColor: theme.colors.secondary,
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color: theme.colors.white,
  },
});
