import React from "react";
import { View, Text } from "react-native";

//componentes
import Layout from "../src/components/Layout";
import ClaseList from "../src/components/ClaseList";

const HomeScreen = () => (
  <Layout>
    <ClaseList />
  </Layout>
);

export default HomeScreen;
