import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Item from "../item";
import Label from "../Label";

const CustomAlert = ({ visible, success }) => {
  return (
    <Item>
      {visible
        ? <Item
            justifycenter
            paddingHorizontal={10}
            width={330}
            height={30}
            borderRadius={15}
            backgroundColor={success ? "lightgreen" : "pink"}
          >
            <Label color={success ? "green" : "red"}>
              {success ? "Submit Success" : "Submit Error"}
            </Label>
          </Item>
        : null}
    </Item>
  );
};

export default CustomAlert;

const styles = StyleSheet.create({});
