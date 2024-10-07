import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend 1", age: 20 },
    { name: "Friend 2", age: 20 },
    { name: "Friend 3", age: 20 },
    { name: "Friend 4", age: 20 },
    { name: "Friend 5", age: 20 },
    { name: "Friend 6", age: 20 },
    { name: "Friend 7", age: 20 },
  ];

  return (
    <View style={styles.viewStyle}>
      <FlatList
        style={styles.listStyle}
        keyExtractor={(friend) => friend.name}
        data={friends}
        renderItem={({ item }) => {
          // element === { item: { name: 'Friend 1'}, index : 0}
          return (
            <Text style={styles.testStyle}>
              {item.name} - Age {item.age}
            </Text>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  testStyle: {
    marginVertical: 10,
  },
  viewStyle: {
    padding: 20,
  },
  listStyle: {
    borderWidth: 1,
    padding: 5,
  },
});

export default ListScreen;
