import { StyleSheet } from "react-native";
import { colors } from "../../assets/colors/colors";
import { Font } from "react-native";
// import { color } from "react-native-reanimated";

export const globalStyles = StyleSheet.create({
  root: {
    padding: "10%",
    backgroundColor: colors.backgroundColor,
    height: "100%",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.black,
    margin: 10,
    fontFamily: "Outfit",
  },

  text: {
    fontFamily: "Poppins",
    color: colors.textOnWhite,
    fontWeight: "400",
    marginVertical: 10,
  },

  eigenerTextStyle: {
    fontFamily: "Poppins",
    color: colors.gruen,
    fontWeight: "bold",
    fontSize: 30,
    marginVertical: 10,
  },

  link: {
    color: colors.primary,
  },

  // CUSTOM INPUT
  customInputContainer: {
    backgroundColor: "white",
    width: "100%",

    // border
    borderColor: "#e8e8e8",
    borderWidth: 1,
    borderRadius: 5,

    // padding
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  customInput_Inputtext: {
    fontFamily: "Poppins",
    fontWeight: "300",
    color: "gray",
    padding: 15,
  },
  // WORKOUTS PAGE
  workoutContainer: {
    backgroundColor: "#0078A5",
    padding: "4%",
    marginVertical: 5,
    borderRadius: 5,
    elevation: 2,
  },

  workoutTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
    fontFamily: "Outfit",
    marginBottom: 10,
  },

  workoutTitleDetail: {
    fontSize: 40,
    textTransform: "uppercase",
    fontWeight: "bold",
    color: "black",
    fontFamily: "Outfit",
    marginBottom: 20,
  },

  workoutDetails: {
    fontSize: 14,
    color: colors.textOnGray,
    fontFamily: "Poppins",
  },

  exerciseContainer: {
    marginBottom: 30,
  },

  exerciseTitle: {
    fontWeight: "bold",
    fontFamily: "Outfit",
    fontSize: 16,
    marginBottom: 8,
  },

  head: { height: 40, backgroundColor: "#f1f8ff" },
  exerciseText: { margin: 9, fontFamily: "Poppins" },
});
