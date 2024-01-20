import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import CustomInput from "../components/customInput/CustomInput";
import CustomButton from "../components/customButton";
import { useNavigation } from "@react-navigation/native";
import { globalStyles } from "../utils/GlobalStyle";

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedpassword, setConfirmedPassword] = useState("");

  const onNextStepPressed = () => {
    navigation.navigate("Questionaire", {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    });
  };

  const onMergeYourJourneyPressed = () => {
    navigation.navigate("Log in");
  };

  return (
    <ScrollView>
      <View style={globalStyles.root}>
        <Text style={globalStyles.title}>Thanks For Registering!</Text>
        <CustomButton
          text="Merge your journey"
          onPress={onMergeYourJourneyPressed}
        />
      </View>
    </ScrollView>
  );
};

export default SignUpScreen;
