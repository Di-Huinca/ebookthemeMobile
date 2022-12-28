import { View, Text, StyleSheet } from "react-native";
import React from "react";

const ClaseItem = ({clase}) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemTitle}>{clase.title}</Text>
      <Text style={styles.itemDescription}>{clase.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "#333",
    padding: 20,
    marginVertical: 8,
    borderRadius: 5,
  },
  itemTitle:{
    color: "#fff"
  },
  itemDescription:{
    color: "#fff"
  }
});

export default ClaseItem;
