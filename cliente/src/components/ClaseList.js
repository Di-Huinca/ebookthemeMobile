import { View, Text, FlatList } from "react-native";
import React from "react";

const ClaseList = ({clases}) => {
  return (
    <FlatList
      data={clases}
      renderItem={({ item }) => {
        console.log(item);
        return <Text>{item.title}</Text>;
      }}
    />
  );
};

export default ClaseList;
