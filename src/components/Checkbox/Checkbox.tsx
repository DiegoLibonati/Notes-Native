import React from "react";
import { View, Pressable, Text, StyleSheet } from "react-native";
import { CheckboxProps } from "../../types/types";
import { theme } from "../../theme/theme";

export const Checkbox = ({ name, active, onPress }: CheckboxProps): JSX.Element => {
  return (
    <View style={styles.checkboxContainer}>
      <Pressable
        style={[
          styles.checkbox,
          { backgroundColor: active ? theme.colors.secondary : "#fff" },
        ]}
        onPress={() => onPress(name)}
      ></Pressable>
      <Text style={styles.checkboxText}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    width: "100%",
  },
  checkbox: {
    width: 20,
    height: 20,
    backgroundColor: theme.colors.white,
    borderColor: theme.colors.secondary,
    borderWidth: 1,
    borderRadius: 50,
  },
  checkboxText: {
    marginLeft: 8,
    fontSize: 20,
    color: theme.colors.white,
  },
});
