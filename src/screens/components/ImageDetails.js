import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ImageDetails = (props) => {
  return (
    //we use {} because we want to print a js variable
    <View>
      <Image source={props.imageSource} />
      <Text>{props.title}</Text>
      <Text>Image score - {props.imageScore}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageDetails;
