import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import ColorCorrection from "../components/ColorCorrection";

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
  // state === {red: number,green: number,blue: number}
  // action === {colorToChage : 'red' || 'green' || 'blue' , amount: 15 || -15}

  switch (action.colorToChange) {
    case "red":
      return { ...state, red: state.red + action.amount };
    case "green":
      return { ...state, green: state.green + action.amount };
    case "blue":
      return { ...state, blue: state.blue + action.amount };
    default:
      return state;
  }
};

const EditcolorScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });

  return (
    <View>
      <ColorCorrection
        onIncrease={() => {}}
        onDecrease={() => {}}
        color="Red"
      />
      <ColorCorrection
        onIncrease={() => {}}
        onDecrease={() => {}}
        color="Green"
      />
      <ColorCorrection
        onIncrease={() => {}}
        onDecrease={() => {}}
        color="Blue"
      />

      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      ></View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default EditcolorScreen;
