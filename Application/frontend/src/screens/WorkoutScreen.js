import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  ScrollView,
} from "react-native";
import { workouts } from "../../assets/temporary/workouts";
import CustomButton from "../components/customButton";
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell,
} from "react-native-table-component";
import { useEffect } from "react";
import { globalStyles } from "../utils/GlobalStyle";

const WorkoutPage = () => {
  const [selectedWorkout, setSelectedWorkout] = useState(null);
  const [checkmark, setCheckmark] = useState(false);
  const [tableHead, setTableHead] = useState(["Set", "Weight", "Reps"]);
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    if (selectedWorkout) {
      setTableData(
        selectedWorkout.exercises
          .reduce((sets, exercise) => sets.concat(exercise.sets), [])
          .map((set, index) => [index + 1, set.weight, set.reps])
      );
    }
  }, [selectedWorkout]);

  const toggleCheckmark = (index) => {
    setCheckmark(!checkmark);
  };

  const onSaveWorkoutPressed = () => {
    //
  };

  return (
    <View style={globalStyles.root}>
      <FlatList
        data={workouts}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => setSelectedWorkout(item)}>
            <View style={globalStyles.workoutContainer}>
              <Text style={globalStyles.workoutTitle}>{item.name}</Text>
              <Text style={globalStyles.workoutDetails}>
                Calories: {item.burned_calories}
              </Text>
              <Text style={globalStyles.workoutDetails}>
                Duration: {item.duration} min
              </Text>
            </View>
          </TouchableOpacity>
        )}
        style={selectedWorkout ? { display: "none" } : {}}
      />
      {selectedWorkout && (
        <ScrollView>
          <View>
            <Text style={globalStyles.workoutTitleDetail}>
              {selectedWorkout.name}
            </Text>
            {selectedWorkout.exercises.map((exercise, exerciseIndex) => (
              <View key={exerciseIndex} style={globalStyles.exerciseContainer}>
                <Text style={globalStyles.exerciseTitle}>{exercise.name}</Text>
                <Table borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}>
                  <Row
                    data={tableHead}
                    style={globalStyles.head}
                    textStyle={globalStyles.exerciseText}
                  />
                  <Rows
                    data={exercise.sets.map((set, setIndex) => [
                      setIndex + 1,
                      set.weight,
                      set.reps,
                    ])}
                    textStyle={globalStyles.exerciseText}
                  />
                </Table>
              </View>
            ))}
            <CustomButton text="Save Workout" onPress={onSaveWorkoutPressed} />
            <CustomButton
              text="Back to Workouts"
              onPress={() => setSelectedWorkout(null)}
              type="SECONDARY"
            />
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default WorkoutPage;
