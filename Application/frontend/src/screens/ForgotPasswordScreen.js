import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import CustomInput from "../components/customInput/CustomInput";
import CustomButton from "../components/customButton";
import { useNavigation } from "@react-navigation/native";
import { globalStyles } from "../utils/GlobalStyle";
//import axios from 'axios';

const ForgotPasswordScreen = () => {
  const navigation = useNavigation();
  const [userName, setUserName] = useState("");

  const OnSendPressed = () => {
    navigation.navigate("New Password");
  };

  const onLogInpressed = () => {
    navigation.navigate("Log in");
  };

  return (
    <ScrollView>
      <View style={globalStyles.root}>
        <Text style={globalStyles.title}>Reset your password</Text>
        <CustomInput
          placeholder="Username"
          value={userName}
          setValue={setUserName}
        />

        <CustomButton text="Send" onPress={OnSendPressed} />

        <CustomButton
          text="Back to Log in"
          onPress={onLogInpressed}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

export default ForgotPasswordScreen;
