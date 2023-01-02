import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

import Layout from "../src/components/Layout";
import { saveClase } from "../api";

const ClaseFormScreen = ({ navigation }) => {
  const [clase, setclase] = useState({
    title: "",
    description: "",
  });

  const handleChange = (name, value) => setclase({ ...clase, [name]: value });
  const handleSubmit = () => {
    saveClase(clase);
    navigation.navigate('Home')
  };
  return (
    <Layout>
      <TextInput
        style={styles.input}
        placeholder="Escriba un titulo"
        placeholderTextColor="#546576"
        onChangeText={(text) => handleChange("title", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Escriba una descripción"
        placeholderTextColor="#546576"
        onChangeText={(text) => handleChange("description", text)}
      />

      <TouchableOpacity style={styles.buttonSave} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Guardar</Text>
        {/*Añadir propiedad "Disabled" con una condicion que no se pueda apretar hasta que esten todos los campos completos */}
      </TouchableOpacity>
    </Layout>
  );
};

export default ClaseFormScreen;

const styles = StyleSheet.create({
  input: {
    width: "90%",
    fontSize: 14,
    marginBottom: 7,
    borderWidth: 1,
    borderColor: "#10ac74",
    height: 35,
    color: "#ffff",
    padding: 4,
    textAlign: "center",
    borderRadius: 5,
  },
  buttonSave: {
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    marginBottom: 3,
    backgroundColor: "#10ac84",
    width: "90%",
  },
  buttonText: {
    color: "#fffff",
    textAlign: "center",
  },
});
