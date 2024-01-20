import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { workouts } from '../../assets/temporary/workouts';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { useEffect } from 'react'



const WorkoutPage = () => {
    const [selectedWorkout, setSelectedWorkout] = useState(null);
    const [checkmark, setCheckmark] = useState(false);
    const [tableHead, setTableHead] = useState(['Set', 'Weight', 'Reps']);
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        if (selectedWorkout) {
            setTableData(selectedWorkout.exercises.reduce((sets, exercise) => sets.concat(exercise.sets), []).map((set, index) => [index + 1, set.weight, set.reps]));
        }
      }, [selectedWorkout]);
    
      const toggleCheckmark = (index) => {
        setCheckmark(!checkmark);
      };
    
      const saveWorkout = () => {
        // code to save workout
      };
    

      return (
        <View style={styles.container}>
          <FlatList
            data={workouts}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => setSelectedWorkout(item)}>
                <View style={styles.workoutContainer}>
                  <Text style={styles.workoutTitle}>{item.name}</Text>
                  <Text style={styles.workoutDetails}>Calories: {item.burned_calories}</Text>
                  <Text style={styles.workoutDetails}>Duration: {item.duration} min</Text>
                </View>
              </TouchableOpacity>
            )}
            style={selectedWorkout ? { display: 'none' } : {}}
          />
          {selectedWorkout && (
            <View>
              {selectedWorkout.exercises.map((exercise, exerciseIndex) => (
                <View key={exerciseIndex}>
                  <Text style={styles.exerciseTitle}>{exercise.name}</Text>
                  <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
                    <Row data={tableHead} style={styles.head} textStyle={styles.text}/>
                    <Rows data={exercise.sets.map((set, setIndex) => [setIndex + 1, set.weight, set.reps])} textStyle={styles.text}/>
                  </Table>
                </View>
              ))}
              <TouchableOpacity style={styles.saveButton} onPress={saveWorkout}>
                <Text style={styles.saveButtonText}>Save Workout</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.backButton} onPress={() => setSelectedWorkout(null)}>
                <Text style={styles.backButtonText}>Back to Workouts</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      );

};

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 10,
    },
    workoutContainer: {
    backgroundColor: 'white',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    elevation: 2,
    },
    workoutTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
    },
    workoutDetails: {
    fontSize: 14,
    color: 'gray',
    },
    exerciseTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
    },
    saveButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'center',
    marginVertical: 10,
    },
    saveButtonText: {
    color: 'white',
    fontWeight: 'bold',
    },
    backButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'center',
    marginVertical: 10,
    },
    backButtonText: {
    color: 'white',
    fontWeight: 'bold',
    },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: { margin: 6 }
    });

export default WorkoutPage;
