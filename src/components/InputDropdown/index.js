import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import React from "react";
import Item from "../item";
import SelectDropdown from "react-native-select-dropdown";
import Label from "../Label";
import Collapsible from "react-native-collapsible";

const InputDropdown = ({ label, data, collapse, onPress, onChange }) => {
  return (
    <Item marginTop={20}>
      <Item
        minHeight={35}
        width={345}
        borderWidth={1}
        borderRadius={20}
        paddingHorizontal={10}
        paddingVertical={5}
      >
        <TouchableOpacity onPress={() => onPress()}>
          <Label>
            {label}
          </Label>
        </TouchableOpacity>
        <Collapsible collapsed={collapse}>
          <Item height={300} width={"100%"} marginTop={10}>
            <FlatList
              nestedScrollEnabled={true}
              scrollEnabled={true}
              data={data}
              renderItem={({ item, index }) => {
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => {
                      onChange(item);
                      onPress();
                    }}
                  >
                    <Item marginBottom={10}>
                      <Label>
                        {item.label}
                      </Label>
                      <Item borderWidth={1} borderColor={"black"} height={1} />
                    </Item>
                  </TouchableOpacity>
                );
              }}
            />
          </Item>
        </Collapsible>
      </Item>
    </Item>
  );
};

export default InputDropdown;

const styles = StyleSheet.create({
  dropdown2RowStyle: { backgroundColor: "#444", borderBottomColor: "#C5C5C5" },
  dropdown2RowTxtStyle: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "bold"
  }
});
