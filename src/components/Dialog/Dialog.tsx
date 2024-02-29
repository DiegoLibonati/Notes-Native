import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Modal,
  Pressable,
  Dimensions,
} from "react-native";
import { useSelector } from "react-redux";
import { NoteFilter, RootState } from "../../types/types";
import { useDispatch } from "react-redux";
import { handleCloseModal } from "../../slices/ui/uiSlice";
import { Checkbox } from "../Checkbox/Checkbox";
import { handleChangeFilter } from "../../slices/notes/notesSlice";
import { theme } from "../../theme/theme";

export const Dialog = (): JSX.Element => {
  const { filters } = useSelector((state: RootState) => state.notes);
  const { modal } = useSelector((state: RootState) => state.ui);
  const dispatch = useDispatch();

  const handleCheckbox = (name: string): void => {
    dispatch(handleChangeFilter({ name }));
    return;
  };

  return (
    <Modal animationType="fade" transparent={true} visible={modal.isOpen}>
      <View style={styles.centeredView}>
        <View style={styles.modal}>
          <Text style={styles.textModal}>Filter by</Text>
          {filters.map((filter: NoteFilter) => {
            return (
              <Checkbox
                key={filter.id}
                name={filter.name}
                active={filter.isActive}
                onPress={handleCheckbox}
              ></Checkbox>
            );
          })}
          <Pressable
            onPress={() => dispatch(handleCloseModal())}
            style={styles.buttonModal}
          >
            <Text style={styles.textButtonModal}>Close</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modal: {
    alignItems: "center",
    justifyContent: "flex-start",
    width: "75%",
    height: "40%",
    backgroundColor: theme.colors.primary,
    borderRadius: 10,
    padding: 10,
  },
  textModal: {
    fontSize: 25,
    color: theme.colors.white,
  },
  buttonModal: {
    position: "absolute",
    alignSelf: "flex-end",
    bottom: 5,
    right: 5,
    backgroundColor: theme.colors.secondary,
    padding: 10,
    borderRadius: 10,
  },
  textButtonModal: {
    color: theme.colors.white,
  },
});
