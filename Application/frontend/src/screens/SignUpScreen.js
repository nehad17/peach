import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Touchable } from "react-native";
import CustomInput from "../components/customInput/CustomInput";
import CustomButton from "../components/customButton";
import { useNavigation } from "@react-navigation/native";
import { globalStyles } from "../utils/GlobalStyle";
import { useForm } from "react-hook-form";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Picker } from "@react-native-picker/picker";
import CustomPicker from "../components/customPicker/CustomPicker";
import axios from 'axios';

const EMAIL_REGEX =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [step, setStep] = useState(1);
  const [bmr, setBmr] = useState("");
  const [resultActivitylevel, setresultActivitylevel] = useState("");
  const [recommendedCaloricIntake, setrecommendedCaloricIntake] = useState("");
  const [selectedSex, setselectedSex] = useState();

  const { control, handleSubmit, watch } = useForm({
    defaultValues: {
      firstName: "first name",
      lastName: "last name",
      email: "email",
      password: "schamma04.",
      "password-repeat": "schamma04.",
    },
  });
  const passwordWatching = watch("password");

  const onNextStepPressed = (data) => {
    setStep(step + 1);
  };

  const OnBackPressed = () => {
    setStep(step - 1);
  };

  const onLogInpressed = () => {
    if (step != 1) setStep(step - 1);
    navigation.navigate("Log in");
  };

  const onTermsOfUsePressed = () => {
    console.warn("onTermsOfUsePressed");
  };

  const onPrivacyPressed = () => {
    console.warn("onPrivacyPressed");
  };

  const OnSubmitPressed = (data) => {
    // Calculate the recommended macronutrients
    const recommendedMacronutrients = calculateRecommendedMacronutrients(data);
  
    // Update data object to include the recommended macronutrients
    data.recommendedMacroNutrients = recommendedMacronutrients;

    axios
      .post("http://localhost:3000/api/v1/users/register", data)
      .then((response) => {
        console.log(data);
        navigation.navigate("Thanks For Registering");
      })
      .catch((error) => {
        console.error(error);
      });
  
    console.log(data);
    navigation.navigate("Diet", { recommendedMacronutrients });

  };


  const calculateBMR = (weight, height, age, sex) => {
    if (sex === "male") {
      return 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      return 10 * weight + 6.25 * height - 5 * age - 161;
    }
  };
  
  const calculateActivityFactor = (activityLevel) => {
    switch (activityLevel) {
      case "Sedentary":
        return 1.2;
      case "Lightly active":
        return 1.375;
      case "Moderately active":
        return 1.55;
      case "Very active":
        return 1.725;
      case "Extra active":
        return 1.9;
      default:
        return 1;
    }
  };
  
  const calculateGoalFactor = (goal) => {
    switch (goal) {
      case "Weight loss":
        return 0.85;
      case "Maintenance":
        return 1;
      case "Weight gain":
        return 1.15;
      default:
        return 1;
    }
  };
  
  const calculateRecommendedMacronutrients = (data) => {
    const bmr = calculateBMR(data.weight, data.height, data.age, data.sex);
    const activityFactor = calculateActivityFactor(data.activityLevel);
    const goalFactor = calculateGoalFactor(data.goal);
  
    const recommendedCaloricIntake = bmr * activityFactor * goalFactor;
    const recommendedProteinIntake = data.weight * 2.2; 
    const recommendedFatIntake = (recommendedCaloricIntake * 0.25) / 9; 
    const recommendedCarbohydratesIntake = 
    (recommendedCaloricIntake - (recommendedProteinIntake * 4 + recommendedFatIntake * 9)) / 4; 
  
    return {
      recommendedCaloricIntake,
      recommendedProteinIntake,
      recommendedCarbohydratesIntake,
      recommendedFatIntake,
    };
  };


  return (
    <ScrollView style={globalStyles.root}>
      <View>
        {step === 1 && (
          <View>
            <Text style={globalStyles.title}>Let´s get started</Text>
            <CustomInput
              name="firstName"
              placeholder="First name"
              control={control}
              rules={{
                required: "First Name is required",
                minLength: {
                  value: 2,
                  message: "First Name should be at least 2 characters long",
                },
              }}
            />
            <CustomInput
              name="lastName"
              placeholder="Last name"
              control={control}
              rules={{
                required: "Last Name is required",
                minLength: {
                  value: 2,
                  message: "Last Name should be at least 2 characters long",
                },
              }}
            />
            <CustomInput
              name="email"
              keyboardType="email-address"
              placeholder="Email"
              control={control}
              rules={{
                required: "E-Mail is required",
                pattern: { value: EMAIL_REGEX, message: "E-Mail is invalid" },
              }}
            />
            <CustomInput
              name="password"
              placeholder="Password"
              control={control}
              rules={{
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password should be at least 8 characters long",
                },
              }}
              secureTextEntry
            />
            <CustomInput
              name="password-repeat"
              placeholder="Confirm password"
              control={control}
              secureTextEntry
              rules={{
                validate: (value) =>
                  value === passwordWatching || "Passwords do not match",
              }}
            />

            <CustomButton
              text="Next Step"
              onPress={handleSubmit(onNextStepPressed)}
            />
            <Text style={globalStyles.text}>
              By registering, you confirm that you accept our{" "}
              <Text style={globalStyles.link} onPress={onTermsOfUsePressed}>
                Terms of Use
              </Text>{" "}
              and
              <Text style={globalStyles.link} onPress={onPrivacyPressed}>
                {" "}
                Privacy Policy
              </Text>
            </Text>
            <CustomButton
              text="Already have an account? Login"
              onPress={handleSubmit(onLogInpressed)}
              type="TERTIARY"
              y
            />
          </View>
        )}
        {step === 2 && (
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
                pattern: {
                  value: /^\d+(\.\d{1,2})?$/,
                  message: "Height must be a valid number",
                },
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
              text="Back"
              onPress={OnBackPressed}
              type="SECONDARY"
            />

            <CustomButton
              text="Already have an account? Login"
              onPress={onLogInpressed}
              type="TERTIARY"
            />
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default SignUpScreen;
