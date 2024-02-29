import React, { useState, useEffect } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { handleFilter, handleIsFiltering } from "../../slices/notes/notesSlice";
import { useDispatch } from "react-redux";
import { theme } from "../../theme/theme";

export const Search = (): JSX.Element => {
  const dispatch = useDispatch();

  const [valueFilter, setValueFilter] = useState<string>("");

  useEffect(() => {
    dispatch(handleFilter({ valueFilter }));
    dispatch(handleIsFiltering({ valueFilter }));
  }, [valueFilter]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search note.."
        onChangeText={setValueFilter}
        value={valueFilter}
        placeholderTextColor={theme.colors.white}
      ></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    alignItems: "center",
    justifyContent: "center",
    height: 75,
  },
  searchInput: {
    width: "80%",
    padding: 10,
    borderRadius: 50,
    borderColor: theme.colors.secondary,
    borderWidth: 1,
    color: theme.colors.white,
  },
});
