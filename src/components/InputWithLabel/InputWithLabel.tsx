import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { InputWithLabelType } from "../../types/types";
import { theme } from "../../theme/theme";

export const InputWithLabel = ({
  label,
  placeholder,
  inputHeight,
  value,
  placeholderTextColor,
  onChangeText,
}: InputWithLabelType) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        style={[styles.input, { height: inputHeight }]}
        onChangeText={onChangeText}
        value={value}
        placeholderTextColor={placeholderTextColor}
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
    color: theme.colors.white,
  },
  input: {
    borderColor: theme.colors.secondary,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    color: theme.colors.white,
  },
});
