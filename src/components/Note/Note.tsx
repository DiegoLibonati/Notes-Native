import React from "react";
import { StyleSheet, Text, TouchableNativeFeedback, View } from "react-native";
import { NoteType } from "../../types/types";
import { useNavigate } from "react-router-native";

export const Note = ({ id, date, title, content }: NoteType) => {
  const navigate = useNavigate();

  return (
    <TouchableNativeFeedback onPress={() => navigate(`/${id}`)}>
      <View style={styles.container}>
        <Text style={styles.date}>{date}</Text>
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>
        <Text style={styles.content} numberOfLines={5}>
          {content}
        </Text>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2FA",
    padding: 5,
    margin: 5,
    borderRadius: 10,
    height: 200,
  },
  date: {
    alignSelf: "flex-end",
    fontSize: 10,
  },
  title: {
    alignSelf: "center",
    fontSize: 21,
    textAlign: "center",
  },
  content: {
    fontSize: 14,
    marginTop: 8,
  },
});
