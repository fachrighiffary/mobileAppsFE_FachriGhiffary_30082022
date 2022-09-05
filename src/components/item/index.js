import React from "react";
import { StyleSheet, View } from "react-native";

const Item = ({
  children,
  flex,
  justifycenter,
  alignCenter,
  backgroundColor,
  marginTop,
  marginBottom,
  marginRight,
  marginLeft,
  marginVertical,
  marginHorizontal,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingVertical,
  paddingHorizontal,
  height,
  width,
  borderRadius,
  opacity,
  position,
  flexDirection,
  borderWidth,
  borderColor,
  borderTopColor,
  justifyContent,
  alignItems
}) => {
  return (
    <View
      style={[
        flex ? { flex: 1 } : null,
        justifycenter ? { justifyContent: "center" } : null,
        justifyContent ? { justifyContent: justifyContent } : null,
        alignItems ? { alignItems: alignItems } : null,
        alignCenter ? { alignItems: "center" } : null,
        backgroundColor ? { backgroundColor: backgroundColor } : null,
        marginTop ? { marginTop: marginTop } : null,
        marginBottom ? { marginBottom: marginBottom } : null,
        marginRight ? { marginRight: marginRight } : null,
        marginLeft ? { marginLeft: marginLeft } : null,
        marginVertical ? { marginVertical: marginVertical } : null,
        marginHorizontal ? { marginHorizontal: marginHorizontal } : null,
        paddingTop ? { paddingTop: paddingTop } : null,
        paddingBottom ? { paddingBottom: paddingBottom } : null,
        paddingLeft ? { paddingLeft: paddingLeft } : null,
        paddingRight ? { paddingRight: paddingRight } : null,
        paddingVertical ? { paddingVertical: paddingVertical } : null,
        paddingHorizontal ? { paddingHorizontal: paddingHorizontal } : null,
        height ? { height: height } : null,
        width ? { width: width } : null,
        borderRadius ? { borderRadius: borderRadius } : null,
        opacity ? { opacity: opacity } : null,
        position ? { position: position } : null,
        flexDirection ? { flexDirection: flexDirection } : null,
        borderWidth ? { borderWidth: borderWidth } : null,
        borderColor ? { borderColor: borderColor } : null,
        borderTopColor ? { borderTopColor: borderTopColor } : null
      ]}
    >
      {children}
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({});
