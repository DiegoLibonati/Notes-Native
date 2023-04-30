import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { InputWithLabelType } from "../../types/types";

export const InputWithLabel = ({
  label,
  placeholder,
  inputHeight,
}: InputWithLabelType) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        style={[styles.input, { height: inputHeight }]}
      ></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    width: "100%",
    marginVertical: 5,
  },
  label: {
    paddingBottom: 10,
    fontSize: 20,
  },
  input: {
    borderColor: "#000",
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
  },
});
