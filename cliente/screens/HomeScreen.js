import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { getClases } from "../api";

//componentes
import ClaseList from "../src/components/ClaseList";

const HomeScreen = () => {
  const [clases, setClases] = useState([]);

  const loadClases = async () => {
    const data = await getClases();
    setClases(data);
  };

  useEffect(() => {
    loadClases();
  }, []);

  return (
    <View>
      <ClaseList clases = {clases}/>
      <Text>Hola puro</Text>
    </View>
  );
};

export default HomeScreen;
