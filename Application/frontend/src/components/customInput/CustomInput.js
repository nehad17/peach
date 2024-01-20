import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";
import { Controller } from "react-hook-form";
import { globalStyles } from "../../utils/GlobalStyle";
const CustomInput = ({
  control,
  name,
  rules = {},
  placeholder,
  secureTextEntry,
  keyboardType,
  inputType = "text",
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <>
          <View
            style={[
              globalStyles.customInputContainer,
              { borderColor: error ? "red" : "#e8e8e8" },
            ]}
          >
            <TextInput
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              value={value}
              style={globalStyles.customInput_Inputtext}
              keyboardType={keyboardType}
              secureTextEntry={secureTextEntry}

              /*setValue={setEmail}*/
            />
          </View>
          {error && (
            <Text style={{ color: "red", alignSelf: "stretch" }}>
              {error.message || "Error"}
            </Text>
          )}
        </>
      )}
    />
  );
};

export default CustomInput;
