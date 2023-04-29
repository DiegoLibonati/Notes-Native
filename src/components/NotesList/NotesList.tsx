import React from "react";
import { FlatList, SafeAreaView, StyleSheet, Text } from "react-native";
import { Note } from "../Note/Note";
import { useSelector } from "react-redux";
import { RootState } from "../../types/types";

export const NotesList = () => {
  const { notes, notesFiltered, isFiltering } = useSelector(
    (state: RootState) => state.notes
  );

  return (
    <SafeAreaView style={styles.container}>
      {isFiltering && !notesFiltered.length ? (
        <Text style={styles.notFoundNotes}>No se encontraron notas</Text>
      ) : (
        <FlatList
          numColumns={2}
          data={notesFiltered.length ? notesFiltered : notes}
          renderItem={({ item }) => <Note key={item.id} {...item}></Note>}
        ></FlatList>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  notFoundNotes: {
    textAlign: "center",
    fontSize: 15,
  },
});
