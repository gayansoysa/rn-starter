import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

/*
const HomeScreen = (props) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button // self closing element
        onPress={() => props.navigation.navigate("Components")}
        title="Go to components demo"
      />
      <Button
        title="Go to list demo"
        onPress={() => props.navigation.navigate("Listscreen")}
      />
    </View>
  );
};
*/

// destructed the props
const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button // self closing element
        onPress={() => navigation.navigate("Components")}
        title="Go to components demo"
      />
      <Button
        title="Go to list demo"
        onPress={() => navigation.navigate("Listscreen")}
      />
      <Button
        title="Go to imagescreen"
        onPress={() => navigation.navigate("Imagescreen")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
