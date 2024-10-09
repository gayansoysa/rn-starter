import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const ColorCorrection = ({color}) => {
  return (
    //sting iterpalation
    <View>
      <Text>{color}</Text>
      <Button title={`More ${color}`} onPress={() => {}} />
      <Button title={`Less ${color}`} onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorCorrection;
