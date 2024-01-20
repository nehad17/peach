import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import CustomInput from "../components/customInput/CustomInput";
import CustomButton from "../components/customButton";
import { useNavigation } from "@react-navigation/native";
import { globalStyles } from "../utils/GlobalStyle";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { TextInput } from "react-native-gesture-handler";

const LogInScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSignInPressed = (data) => {
    /*const data = {
      email: email,
      password: password,
    };

    axios
      .post("http://localhost:3000/api/v1/users/login", data)
      .then((response) => {
        console.log(data);
        navigation.navigate("Workout");
      });*/

    navigation.navigate("Home");
    console.log(data);
  };

  const onSignUpPressed = () => {
    navigation.navigate("Sign Up");
  };

  return (
    <View style={globalStyles.root}>
      <Text style={globalStyles.title}>Login</Text>

      <CustomInput
        control={control}
        name="email"
        rules={{ required: "E-Mail is required" }}
        placeholder="E-Mail"
      />

      <CustomInput
        name="password"
        placeholder="Password"
        control={control}
        rules={{
          required: "Password is required",
          minLength: {
            value: 3,
            message: "Password should be at least 3 characters long",
          },
        }}
        secureTextEntry
      />

      <CustomButton text="Login" onPress={handleSubmit(onSignInPressed)} />

      <CustomButton
        text="Don´t have an account? Sign up!"
        onPress={onSignUpPressed}
        type="TERTIARY"
      />
    </View>
  );
};

export default LogInScreen;
