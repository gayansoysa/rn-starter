import React, {useState} from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import ColorCorrection from "../components/ColorCorrection";

const EditcolorScreen = () => {

  const [red , setRed] = useState(0);
  const [green , setGreen] = useState(0);
  const [blue , setBlue] = useState(0);

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
