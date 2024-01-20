import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import CustomInput from "../components/customInput/CustomInput";
import CustomButton from "../components/customButton";
import { useNavigation } from "@react-navigation/native";
import { globalStyles } from "../utils/GlobalStyle";
import { useForm } from "react-hook-form";
import axios from "axios";

const Questionaire = ({ route }) => {
  const navigation = useNavigation();
  /*const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [goal, setGoal] = useState("");
  const [activitylevel, setActivitylevel] = useState("");*/
  const { control, handleSubmit, watch } = useForm({
    defaultValues: {
      age: "19",
      sex: "Male",
      height: "180",
      weight: "90",
      goal: "Weightloss",
      activitylevel: "high",
    },
  });
  const { firstName, lastName, email, password } = route.params;

  const OnSubmitPressed = (dataQuestionary) => {
    /*axios
      .post("http://localhost:3000/api/v1/users/register", data)
      .then((response) => {
        console.log(data);
        navigation.navigate("Thanks For Registering");
      })
      .catch((error) => {
        console.error(error);
      });*/
    const personalData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    };

    const merged = Object.assign(dataQuestionary, personalData);

    console.log(merged);
  };

  const onLogInpressed = () => {
    // TODO: HOMEPGAE
    navigation.navigate("Log in");
  };
  const onResendPress = () => {
    console.warn("onResendPress");
  };

  return (
    <ScrollView style={globalStyles.root}>
      <View>
        <Text style={globalStyles.title}>Tell us more about you.</Text>

        <CustomInput
          name="age"
          keyboardType="number-pad"
          placeholder="Age"
          control={control}
          rules={{
            required: "Age is required",
          }}
        />

        <CustomInput
          name="sex"
          placeholder="Sex"
          control={control}
          inputType="picker"
          options={[
            { label: "Male", value: "male" },
            { label: "Female", value: "female" },
          ]}
          rules={{
            required: "Sex is required",
          }}
        />

        <CustomInput
          name="height"
          keyboardType="numeric"
          placeholder="Height in cm"
          control={control}
          rules={{
            required: "Height is required",
          }}
        />

        <CustomInput
          name="weight"
          keyboardType="numeric"
          placeholder="Weight in kg"
          control={control}
          rules={{
            required: "Weight is required",
          }}
        />

        <CustomInput
          name="goal"
          placeholder="Goal"
          control={control}
          rules={{
            required: "Goal is required",
          }}
        />

        <CustomInput
          name="activitylevel"
          placeholder="Activity level"
          control={control}
          rules={{
            required: "Activity level is required",
          }}
        />
        <CustomButton
          text="Finish Registration"
          onPress={handleSubmit(OnSubmitPressed)}
        />

        <CustomButton
          text="Already have an account? Login"
          onPress={onLogInpressed}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

export default Questionaire;
