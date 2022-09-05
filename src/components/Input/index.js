import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import Item from "../item";

const Input = ({ label, onChange, value, keyboardType, maxLength }) => {
  return (
    <Item
      marginTop={35}
      height={20}
      width={342}
      borderWidth={1}
      borderColor="black"
      paddingHorizontal={5}
      justifycenter
      borderTopColor="transparent"
    >
      <TextInput
        maxLength={maxLength}
        keyboardType={keyboardType === "number" ? "number-pad" : "default"}
        placeholder={label}
        value={value}
        onChangeText={text => onChange(text)}
      />
    </Item>
  );
};

export default Input;

const styles = StyleSheet.create({});
