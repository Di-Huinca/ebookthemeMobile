import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const ClaseItem = ({ clase, handleDelete }) => {
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity>
        <Text style={styles.itemTitle}>{clase.title}</Text>
        <Text style={styles.itemDescription}>{clase.description}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{ backgroundColor: "#ee5253", padding: 7, borderRadius: 5 }}
        onPress={() => handleDelete(clase.id)}
      >
        <Text>Eliminar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "#333",
    padding: 20,
    marginVertical: 8,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemTitle: {
    color: "#fff",
  },
  itemDescription: {
    color: "#fff",
  },
});

export default ClaseItem;
