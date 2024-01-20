import React, { useState } from "react";
import { View, Text, Image, TextInput, Picker } from "react-native";

const ProfileScreen = () => {
  const [firstName, setFirstName] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [goal, setGoal] = useState("");
  const [activityLevel, setActivityLevel] = useState("");

  return (
    <View>
      <Image
        // source={require('../../assets/images/')}
        style={{ width: 100, height: 100, borderRadius: 50 }}
      />
      <Text>Hello {firstName}</Text>

      <TextInput
        value={firstName}
        onChangeText={(text) => setFirstName(text)}
        placeholder="First Name"
      />

      <TextInput
        value={height}
        onChangeText={(text) => setHeight(text)}
        placeholder="Height (cm)"
      />

      <TextInput
        value={weight}
        onChangeText={(text) => setWeight(text)}
        placeholder="Weight (kg)"
      />

      <Picker
        selectedValue={goal}
        onValueChange={(itemValue) => setGoal(itemValue)}
      >
        <Picker.Item label="Weight Loss" value="weight-loss" />
        <Picker.Item label="Muscle Gain" value="muscle-gain" />
        <Picker.Item label="Maintenance" value="maintenance" />
      </Picker>

      <Picker
        selectedValue={activityLevel}
        onValueChange={(itemValue) => setActivityLevel(itemValue)}
      >
        <Picker.Item label="Sedentary" value="sedentary" />
        <Picker.Item label="Lightly Active" value="lightly-active" />
        <Picker.Item label="Moderately Active" value="moderately-active" />
        <Picker.Item label="Very Active" value="very-active" />
      </Picker>
    </View>
  );
};

export default ProfileScreen;
