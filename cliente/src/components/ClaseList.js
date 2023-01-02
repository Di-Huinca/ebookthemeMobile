import { View, Text, FlatList, RefreshControl } from "react-native";
import React, { useState, useEffect } from "react";
import { deleteClase, getClases } from "../../api";

import ClaseItem from "./ClaseItem";

const ClaseList = () => {
  const [refreshing, setRefreshing] = useState();
  const [clases, setClases] = useState([]);

  const loadClases = async () => {
    const data = await getClases();
    setClases(data);
  };

  useEffect(() => {
    loadClases();
  }, []);

  const handleDelete = async (id) => {
    await deleteClase(id);
    await loadClases();
  };

  const renderItem = ({ item }) => {
    return <ClaseItem clase={item} handleDelete={handleDelete} />;
  };

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    await loadClases();
    setRefreshing(false);
  });

  return (
    <FlatList
      style={{ width: "100%" }}
      data={clases}
      keyExtractor={(item) => item.id + ""}
      renderItem={renderItem}
      refreshControl={
        <RefreshControl
          onRefresh={onRefresh}
          colors={["#78e08f"]}
          refreshing={refreshing}
        />
      }
    />
  );
};

export default ClaseList;
