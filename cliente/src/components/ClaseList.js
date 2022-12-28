import { View, Text, FlatList } from "react-native";
import React from "react";

import ClaseItem from "./ClaseItem";

const ClaseList = ({ clases }) => {
  const renderItem = ({ item }) => {
    return <ClaseItem clase={item} />;
  };

  return (
    <FlatList
      style={{ width: "100%" }}
      data={clases}
      keyExtractor={(item) => item.id + ""}
      renderItem={renderItem}
    />
  );
};

export default ClaseList;
