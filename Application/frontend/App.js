import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Pages
import LoginScreen from "./src/screens/LoginScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import Questionaire from "./src/screens/Questionaire";
import ForgotPasswordScreen from "./src/screens/ForgotPasswordScreen";
import NewPasswordScreen from "./src/screens/NewPasswordScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import EditProfileScreen from "./src/screens/EditProfileScreen";
import WorkoutScreen from "./src/screens/WorkoutScreen";
import ThanksForRegisteringScreen from "./src/screens/ThanksForRegisteringScreen";
import HomeScreen from "./src/screens/HomeScreen";
import DietScreen from "./src/screens/DietScreen"; 
import SearchFood from "./src/screens/SearchFood"; 

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

      <Stack.Screen name="Sign Up" component={SignUpScreen} />
      <Stack.Screen name="Diet" component={DietScreen} />

   

      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={EditProfileScreen} />

        <Stack.Screen name="Log in" component={LoginScreen} />
        <Stack.Screen name="Workout" component={WorkoutScreen} />
        <Stack.Screen name="Questionaire" component={Questionaire} />
        <Stack.Screen name="Forgot Password" component={ForgotPasswordScreen} />
        <Stack.Screen name="New Password" component={NewPasswordScreen} />
        <Stack.Screen name="Thanks For Registering" component={ThanksForRegisteringScreen}/>
        <Stack.Screen name="SearchFood" component={SearchFood} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
