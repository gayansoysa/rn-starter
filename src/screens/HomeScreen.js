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
      <Button
        title="Go to counter screen"
        onPress={() => navigation.navigate("Counterscreen")}
      />
      <Button
        title="Go to color screen"
        onPress={() => navigation.navigate("Colorscreen")}
      />
      <Button
        title="Go to color edit screen"
        onPress={() => navigation.navigate("Editcolorscreen")}
      />
      <Button
        title="Go to text screen"
        onPress={() => navigation.navigate("Textscreen")}
      />
      <Button
        title="Go to box screen"
        onPress={() => navigation.navigate("Boxscreen")}
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
