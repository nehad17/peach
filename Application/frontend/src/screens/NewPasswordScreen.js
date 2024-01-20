import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import CustomInput from "../components/customInput/CustomInput";
import CustomButton from "../components/customButton";
import { globalStyles } from "../utils/GlobalStyle";

const NewPasswordScreen = () => {
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const OnSubmitPressed = () => {
    console.warn("OnConfirmPressed");
  };

  const onLogInpressed = () => {
    console.warn("onLogInpressed");
  };

  return (
    <ScrollView>
      <View style={globalStyles.root}>
        <Text style={globalStyles.title}>Reset your password</Text>
        <CustomInput placeholder="Code" value={code} setValue={setCode} />

        <CustomInput
          placeholder="Enter your new password"
          value={newPassword}
          setValue={setNewPassword}
          secureTextEntry
        />

        <CustomButton text="Submit" onPress={OnSubmitPressed} />

        <CustomButton
          text="Back to Log in"
          onPress={onLogInpressed}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

export default NewPasswordScreen;
