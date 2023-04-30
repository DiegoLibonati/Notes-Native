import React from "react";
import { StyleSheet, Text, View, Modal, Pressable } from "react-native";
import { useSelector } from "react-redux";
import { NoteFilter, RootState } from "../../types/types";
import { useDispatch } from "react-redux";
import { handleCloseModal } from "../../slices/ui/uiSlice";
import { Checkbox } from "../Checkbox/Checkbox";
import { handleChangeFilter } from "../../slices/notes/notesSlice";

export const Dialog = () => {
  const { filters } = useSelector((state: RootState) => state.notes);
  const { modal } = useSelector((state: RootState) => state.ui);
  const dispatch = useDispatch();

  const handleCheckbox = (name: string) => {
    return dispatch(handleChangeFilter({ name }));
  };

  return (
    <View style={styles.centeredView}>
      <Modal animationType="fade" transparent={true} visible={modal.isOpen}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "flex-start",
    elevation: 5,
    width: "80%",
  },
  textModal: {
    fontSize: 22,
    alignSelf: "center",
    marginBottom: 5,
  },
  buttonModal: {
    backgroundColor: "#000",
    padding: 10,
    borderRadius: 20,
    marginTop: 20,
    alignSelf: "center",
  },
  textButtonModal: {
    color: "#fff",
    fontSize: 15,
  },
});
