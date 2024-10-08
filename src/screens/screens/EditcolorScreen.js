import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import ColorCorrection from "../components/ColorCorrection";

const EditcolorScreen = () => {
  return (
    <View>
      <ColorCorrection color="Red" />
      <ColorCorrection color="Green" />
      <ColorCorrection color="Blue" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default EditcolorScreen;
