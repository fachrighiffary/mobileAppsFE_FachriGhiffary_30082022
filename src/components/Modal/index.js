import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  View
} from "react-native";
import React from "react";
import ReactNativeModal from "react-native-modal";
import Item from "../item";
import Label from "../Label";

const ModalAlert = ({ isvisible, onClose, onPress, loading }) => {
  return (
    <ReactNativeModal isVisible={isvisible}>
      <Item flex={1} justifycenter alignCenter>
        <Item
          height={200}
          width={343}
          backgroundColor={"white"}
          borderRadius={8}
        >
          <Item
            flexDirection={"row"}
            justifyContent={"space-between"}
            paddingHorizontal={15}
            paddingVertical={15}
          >
            <Label size={18} color={"green"}>
              Confirmation
            </Label>
            <Pressable onPress={() => onClose()}>
              <Label>X</Label>
            </Pressable>
          </Item>
          <Item />
          <Item
            flex={1}
            justifycenter
            borderWidth={1}
            borderColor={"lightgrey"}
            paddingHorizontal={15}
            paddingVertical={15}
          >
            <Label>Confirm To Delete ?</Label>
          </Item>
          <Item
            flexDirection={"row"}
            justifyContent={"flex-end"}
            paddingHorizontal={15}
            paddingVertical={15}
          >
            <Pressable
              onPress={() => onClose()}
              style={{
                ...styles.btn,
                backgroundColor: "grey",
                marginRight: 10
              }}
            >
              <Label color={"white"}>Cancel</Label>
            </Pressable>
            <Pressable
              onPress={() => onPress()}
              style={{ ...styles.btn, backgroundColor: "blue" }}
            >
              {loading
                ? <ActivityIndicator size={"small"} color="white" />
                : <Label color={"white"}>Yes, Delete</Label>}
            </Pressable>
          </Item>
        </Item>
      </Item>
    </ReactNativeModal>
  );
};

export default ModalAlert;

const styles = StyleSheet.create({
  btn: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8
  }
});
