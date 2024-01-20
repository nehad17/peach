import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

const CustomButton = ({ onPress, text, type = "PRIMARY" }) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, styles[`container_${type}`]]}
      text={text}
    >
      <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 15,
    marginVertical: 5,
    alignItems: "center",
    borderRadius: 5,
  },

  container_PRIMARY: {
    backgroundColor: "#0078A5",
  },

  container_SECONDARY: {
    borderColor: "#0078A5",
    borderWidth: 1,
  },

  container_TERTIARY: {},

  text: {
    fontWeight: "bold",
    fontFamily: "Outfit",
    color: "#FFF",
  },

  text_TERTIARY: {
    fontWeight: "300",
    fontFamily: "Outfit",
    color: "gray",
  },

  text_SECONDARY: {
    color: "#0078A5",
    fontFamily: "Outfit",
  },
});

export default CustomButton;
