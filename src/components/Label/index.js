import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Label = ({ children, color, size, textCenter, bold }) => {
  return (
    <Text
      style={[
        color ? { color: color } : { color: "black" },
        size ? { fontSize: size } : null,
        textCenter ? { textAlign: "center" } : null,
        bold ? { fontWeight: "bold" } : null
      ]}
    >
      {children}
    </Text>
  );
};

export default Label;

const styles = StyleSheet.create({});
