import React, { useEffect } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text } from "react-native";
import { Note } from "../Note/Note";
import { useSelector } from "react-redux";
import { RootState } from "../../types/types";
import { theme } from "../../theme/theme";

export const NotesList = () => {
  const { notes, notesFiltered, isFiltering } = useSelector(
    (state: RootState) => state.notes
  );

  useEffect(() => {
    console.log(notes);
  }, [notes]);

  return (
    <SafeAreaView style={styles.container}>
      {!notes.length && !isFiltering && (
        <Text style={styles.notFoundNotes}>Todavia no tenes notas creadas</Text>
      )}

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
    color: theme.colors.white,
  },
});
