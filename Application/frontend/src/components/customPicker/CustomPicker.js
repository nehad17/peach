import React, { Component } from "react";
import { View } from "react-native";
import { globalStyles } from "../../utils/GlobalStyle";
import { Picker } from "@react-native-picker/picker";
class MyPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: "",
    };
  }

  handleChange = (itemValue) => {
    if (itemValue !== "") {
      this.setState({ selectedValue: itemValue });
    }
  };

  render() {
    const { items, title } = this.props;
    const pickerItems = [{ label: title, value: "" }, ...items];
    return (
      <View>
        <Picker
          style={[globalStyles.customInputContainer, { height: 50 }]}
          itemStyle={globalStyles.customInput_Inputtext}
          selectedValue={this.state.selectedValue}
          onValueChange={this.handleChange}
        >
          {pickerItems.map((item, index) => (
            <Picker.Item key={index} label={item.label} value={item.value} />
          ))}
        </Picker>
      </View>
    );
  }
}

export default MyPicker;
