import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
  const [name, setName] = useState("");
  const [password, setPass] = useState("");

  return (
    <View>
      <Text>Enter Name</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(newValue) => setName(newValue)}
      />
      <Text>Welcome {name}. Good Afternoon!</Text>

      <Text>Enter a pasword</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(newPass) => setPass(newPass)}
      />
      {password.length < 5 ? (
        <Text>The password neededs to be more than 5 charactors</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
    fontSize: 20,
  },
});

export default TextScreen;
