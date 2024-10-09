import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const ColorCorrection = ({ color, onIncrease, onDecrease }) => {
  return (
    //sting iterpalation
    <View>
      <Text>{color}</Text>
      <Button
        title={`More ${color}`}
        onPress={() => {
          onIncrease();
        }}
      />
      <Button
        title={`Less ${color}`}
        onPress={() => {
          onDecrease();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorCorrection;
