import React, { useState, useEffect } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { handleFilter, handleIsFiltering } from "../../slices/notes/notesSlice";
import { useDispatch } from "react-redux";

export const Search = () => {
  const dispatch = useDispatch();

  const [valueFilter, setValueFilter] = useState("");

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
    borderColor: "#666",
    borderWidth: 1,
  },
});
