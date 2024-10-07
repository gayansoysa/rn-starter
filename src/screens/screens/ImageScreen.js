import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetails from "../components/ImageDetails";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetails
        title="Forest"
        imageSource={require("../../../assets/images/forest.jpg")}
        imageScore={9}
      />
      <ImageDetails
        title="Beach"
        imageSource={require("../../../assets/images/beach.jpg")}
        imageScore={10}
      />
      <ImageDetails
        title="Mountain"
        imageSource={require("../../../assets/images/mountain.jpg")}
        imageScore={8}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
