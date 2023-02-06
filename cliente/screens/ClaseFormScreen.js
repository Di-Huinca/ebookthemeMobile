import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";

import Layout from "../src/components/Layout";
import { saveClase, getClase } from "../api";

const ClaseFormScreen = ({ navigation, route }) => {
  const [clase, setClase] = useState({
    title: "",
    description: "",
  });

  const handleChange = (name, value) => setClase({ ...clase, [name]: value });
  const handleSubmit = () => {
    saveClase(clase);
    navigation.navigate("Home");
  };

  useEffect(() => {
    if (route.params && route.params.id) {
      console.log(route.params);
      navigation.setOptions({ headerTitle: "Editar clase" }); //error: al entrar primero en una clase con id luego si quiero crear una nueva tarea el titulo es "editar clase" y no "nueva clase"

      (async () => {
        const clase = await getClase(route.params.id);
        setClase({title: clase.title, description: clase.description})
      })();
    }
  }, []);

  return (
    <Layout>
      <TextInput
        style={styles.input}
        placeholder="Escriba un titulo"
        placeholderTextColor="#546576"
        onChangeText={(text) => handleChange("title", text)}
        value={clase.title}
        />
      <TextInput
        style={styles.input}
        placeholder="Escriba una descripción"
        placeholderTextColor="#546576"
        onChangeText={(text) => handleChange("description", text)}
        value={clase.description}
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
