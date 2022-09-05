import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL, GETALLCUSTOMER } from "../../network/api";
import Item from "../item";
import Label from "../Label";

const ListCustomer = ({ navigation, data, onDelete, onPress }) => {
  const goToUpdate = id => {
    navigation.navigate("updatecustomer", id);
  };

  return (
    <Item>
      {data &&
        data.map((item, index) => {
          return (
            <Item
              key={index}
              marginBottom={10}
              flexDirection={"row"}
              justifyContent={"space-between"}
              width={330}
            >
              <Item flexDirection={"row"} alignCenter>
                <Image
                  source={{ uri: `https://i.pravatar.cc/50?u=${index}` }}
                  style={styles.img}
                />
                <Item marginLeft={10}>
                  <TouchableOpacity
                    onPress={() => {
                      goToUpdate(item.CUST_ID);
                    }}
                  >
                    <Item width={200}>
                      <Label
                        size={18}
                      >{`${item.FIRST_NAME} ${item.LAST_NAME}`}</Label>
                    </Item>
                  </TouchableOpacity>
                  <Label size={12}>
                    Branch Name : {item.BRANCH_NAME}
                  </Label>
                  <Label size={12}>
                    Product Name: {item.PRODUCT_NAME}
                  </Label>
                  <Label size={12}>
                    Tenor : {item.TENOR_ID}
                  </Label>
                </Item>
              </Item>
              <Item>
                <TouchableOpacity
                  style={styles.btnDelete}
                  onPress={() => {
                    onPress(item.CUST_ID);
                  }}
                >
                  <Label color={"white"} bold>
                    X
                  </Label>
                </TouchableOpacity>
              </Item>
            </Item>
          );
        })}
    </Item>
  );
};

export default ListCustomer;

const styles = StyleSheet.create({
  btnDelete: {
    height: 25,
    width: 25,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5
  },
  img: {
    height: 80,
    width: 80
  }
});
