import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Label from "../Label";

const Button = ({
  height,
  width,
  bg,
  txtColor,
  onPress,
  borderRadius,
  borderColor,
  borderWidth,
  label
}) => {
  return (
    <TouchableOpacity
      style={[
        { justifyContent: "center", alignItems: "center" },
        height ? { height: height } : null,
        width ? { width: width } : null,
        bg ? { backgroundColor: bg } : null,
        borderRadius ? { borderRadius: borderRadius } : null,
        borderColor ? { borderColor: borderColor } : null,
        borderWidth ? { borderWidth: borderWidth } : null
      ]}
      onPress={() => {
        onPress();
      }}
    >
      <Label color={txtColor}>
        {label}
      </Label>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({});
