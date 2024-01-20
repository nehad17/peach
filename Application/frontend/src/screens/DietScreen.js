import React, { useState } from 'react';
import {
  Image, Dimensions, SafeAreaView, StyleSheet, View, Text, ScrollView,
  TouchableOpacity, TextInput, Button
} from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';

const { width, height } = Dimensions.get('window');
const home = require('../../assets/images/Home.png');
const heart = require('../../assets/images/H.png');
const plus = require('../../assets/images/Plus2.png');
const food = require('../../assets/images/food.png');
const profile = require('../../assets/images/User.png');
import * as Progress from 'react-native-progress';

const DietScreen = ({ navigation, route }) => {

  const [recommendedCaloricIntake, setRecommendedCaloricIntake] = 
  useState(route.params.recommendedMacronutrients.recommendedCaloricIntake);

  const [consumedKcal, setConsumedKcal] = useState(0);

  const remainingCalories = recommendedCaloricIntake - consumedKcal;



  const [waterIntake, setWaterIntake] = useState(2.1);

  const [breakfastItems, setBreakfastItems] = useState([]);
  const [lunchItems, setLunchItems] = useState([]);
  const [dinnerItems, setDinnerItems] = useState([]);
  const [snackItems, setSnackItems] = useState([]);

  const [consumedProtein, setConsumedProtein] = useState(0.0);
  const [consumedCarbs, setConsumedCarbs] = useState(0.0);
  const [consumedFat, setConsumedFat] = useState(0.0);

  const calculateTotalMacronutrient = (items, nutrient) => {
    return items.reduce((total, foodItem) => total + foodItem[nutrient], 0);
  };

  // Add state to track consumed kcal

  const calculateTotalKcal = (items) => {
    return items.reduce((total, foodItem) => total + foodItem.kcal, 0);
  };

  React.useEffect(() => {
    const totalKcal = calculateTotalKcal([
      ...breakfastItems,
      ...lunchItems,
      ...dinnerItems,
      ...snackItems,
    ]);
    setConsumedKcal(totalKcal);

    const totalProtein = calculateTotalMacronutrient([
      ...breakfastItems,
      ...lunchItems,
      ...dinnerItems,
      ...snackItems,
    ], 'protein');
    setConsumedProtein(totalProtein);

    const totalCarbs = calculateTotalMacronutrient([
      ...breakfastItems,
      ...lunchItems,
      ...dinnerItems,
      ...snackItems,
    ], 'carbs');
    setConsumedCarbs(totalCarbs);

    const totalFat = calculateTotalMacronutrient([
      ...breakfastItems,
      ...lunchItems,
      ...dinnerItems,
      ...snackItems,
    ], 'fat');
    setConsumedFat(totalFat);
  }, [breakfastItems, lunchItems, dinnerItems, snackItems]);

  const Circle = ({ label, value, color }) => {
    return (
      <View style={[styles.circle, { borderColor: color }]}>
        <Text style={styles.circleValue}>{value}</Text>
        <Text style={styles.circleLabel}>{label}</Text>
      </View>
    );
  };

  const handleWaterIntakeChange = (text) => {
    setWaterIntake(text);
  };

  const handleAddWaterIntake = () => {
    setWaterIntake(waterIntake + 1);
  };

  const renderFoodItems = (items) => {
    return items.map((item) => (
      <View key={item.id} style={{ paddingVertical: 5 }}>
        <Text>
          {item.name} - {item.servings} serving{item.servings > 1 ? 's' : ''}, {item.kcal} kcal
        </Text>
      </View>
    ));
  };
  
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <SafeAreaView style={styles.container}>

        <View style={styles.screen}>
          {/*Calender*/}
          <View>
            <CalendarStrip style={{ height: 100, paddingTop: 10, paddingBottom: 10 }} />
            <View
              style={{
                alignSelf: 'center',
                margin: 1,
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                width: '100%',
              }}>
              <View style={styles.circlesContainer}>
                <Circle
                  label="Recommended"
                  value={recommendedCaloricIntake}
                  color="#31B5B6"
                />
                <Circle
                  label="Consumed"
                  value={consumedKcal.toFixed(0)}
                  color="#31B5B6"
                />
                <Circle
                  label="Remaining"
                  value={(recommendedCaloricIntake - consumedKcal).toFixed(0)}
                  color="#31B5B6"
                />
              </View>
            </View>
            <View style={{ alignSelf: 'center', margin: 10, flexDirection: 'row' }}>
              <Progress.Bar
                progress={0.0426666666666667} 
                width={60}
                color="#FF004D"
                borderWidth={1}
                borderColor="#FF9FBC"
                style={{ marginRight: 10 }}
              />
              <Progress.Bar
                progress={0.4878048780487805}
                width={60}
                color="#00B6B3"
                borderWidth={1}
                borderColor="#02DBD7"

                style={{ marginHorizontal: 10 }}
              />
              <Progress.Bar
                progress={0.55}
                width={60}
                color="#B318B6"
                borderWidth={1}
                borderColor="#D775FF"
                style={{ marginLeft: 10 }}
              />
            </View>
            <View style={{ padding: 1, alignSelf: 'center', margin: 10, flexDirection: 'row', marginRight: 10 }}>
              <Text style={{ flex: 1, textAlign: 'center' }}>Protein {6.4}/{route.params.recommendedMacronutrients.recommendedProteinIntake.toFixed()}g</Text>
              <Text style={{ flex: 1, textAlign: 'center' }}>Carbs  {60}/{route.params.recommendedMacronutrients.recommendedCarbohydratesIntake.toFixed()}g</Text>
              <Text style={{ flex: 1, textAlign: 'center' }}>Fats {22}/{route.params.recommendedMacronutrients.recommendedFatIntake.toFixed()}g </Text>
            </View>

            {/*Breakfast*/}
            <View
              style={{
                backgroundColor: 'white',
                width: 1 * SIZES.width - 35,
                margin: 10,
                borderRadius: 10,
                padding: 15,
                shadowColor: '#9e9898',
                elevation: 5,
              }}>
              <Text style={{ fontSize: 10, color: 'grey'}}>Breakfast</Text>
              {renderFoodItems(breakfastItems)}
              <Button
                title="Add to breakfast"
                onPress={() =>
                  navigation.navigate('SearchFood', {
                    mealType: 'breakfast',
                    onAdd: (item) => setBreakfastItems([...breakfastItems, item]),
                  })
                }
              />
            </View>

            {/*Lunch*/}
            <View
              style={{
                backgroundColor: 'white',
                width: 1 * SIZES.width - 35,
                margin: 10,
                borderRadius: 10,
                padding: 15,
                shadowColor: '#9e9898',
                elevation: 5,
              }}>
              <Text style={{ fontSize: 10, color: 'grey'}}>Lunch</Text>
              {renderFoodItems(lunchItems)}
              <Button
                title="Add to lunch"
                onPress={() =>
                  navigation.navigate('SearchFood', {
                    mealType: 'lunch',
                    onAdd: (item) => setLunchItems([...lunchItems, item]),
                  })
                }
              />
            </View>

            {/*Dinner*/}
            <View
              style={{
                backgroundColor: 'white',
                width: 1 * SIZES.width - 35,
                margin: 10,
                borderRadius: 10,
                padding: 15,
                shadowColor: '#9e9898',
                elevation: 5,
              }}>
              <Text style={{ fontSize: 10, color: 'grey'}}>Dinner</Text>
              {renderFoodItems(dinnerItems)}
              <Button
                title="Add to dinner"
                onPress={() =>
                  navigation.navigate('SearchFood', {
                    mealType: 'dinner',
                    onAdd: (item) => setDinnerItems([...dinnerItems, item]),
                  })
                }
              />
            </View>
            {/*Snacks*/}
            <View
              style={{
                backgroundColor: 'white',
                width: 1 * SIZES.width - 35,
                margin: 10,
                marginBottom: 50,
                borderRadius: 10,
                padding: 15,
                shadowColor: '#9e9898',
                elevation: 5,
              }}>
              <Text style={{ fontSize: 10, color: 'grey' }}>Snacks</Text>
              {renderFoodItems(snackItems)}
              <Button
                title="Add to snacks"
                onPress={() =>
                  navigation.navigate('SearchFood', {
                    mealType: 'snacks',
                    onAdd: (item) => setSnackItems([...snackItems, item]),
                  })
                }
              />
            </View>
            <View style={styles.waterWrapper}>
              <Text style={styles.waterHeader}>Water Intake Tracker</Text>
              <Text style={styles.waterText}>Enter your water intake:</Text>
              <TextInput
                style={styles.waterInput}
                keyboardType="numeric"
                value={waterIntake.toString()}
                onChangeText={handleWaterIntakeChange}
              />
              <Button title="Add" onPress={handleAddWaterIntake} />
            </View>
          </View>
        </View>
        <BottomTab navigation={navigation} />
      </SafeAreaView>
    </ScrollView>
  );
};

const BottomTab = ({ navigation }) => (
  <View
    style={{
      position: 'absolute',
      bottom: 10,
      margin: 10,
      marginHorizontal: 25,
      borderRadius: 20,
      padding: 10,
      // width: '100%',
      backgroundColor: '#DBFCFB',
      flexDirection: 'row',
      alignItems: 'center',
    }}>
    <TouchableOpacity onPress={() => navigation.navigate("Home")}>
      <BottomButton image={home} />
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate("Workout")}>
      <BottomButton image={heart} />
    </TouchableOpacity>

    <BottomButton
      image={plus}
      style={{
        position: 'absolute',
        left: '43%',
        top: -25,
        backgroundColor: '#fff',
        padding: 8,
        borderRadius: 20,
      }}
    />
    <BottomButton />
    <TouchableOpacity onPress={() => navigation.navigate("Diet")}>
      <BottomButton image={food} />
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
      <BottomButton image={profile} />
    </TouchableOpacity>

  </View>
);

export const COLORS = {
  accent: '#FF7363',
  purple: '#817DC0',

  black: '#171717',
  white: '#FFFFFF',
  background: '#252C4A',
};

export const SIZES = {
  base: 10,
  width,
  height,
};

const BottomButton = ({ image, style, imageStyle }) => (
  <>
    <View
      style={[
        {
          flex: 1,
          alignSelf: 'center',
          alignItems: 'center',
        },
        style,
      ]}>
      <Image
        source={image}
        style={[
          {
            height: image === plus ? 40 : 30,
            width: image === plus ? 40 : 30,
          },
          imageStyle,
        ]}
      />
    </View>
    {image === home && (
      <View
        style={{
          width: '10%',
          position: 'absolute',
          height: 2,
          backgroundColor: '#FF3874',
          bottom: 0,
          left: 22,
        }}
      />
    )}
  </>
);

export default DietScreen;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circlesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '110%',
    padding: 15,
    marginBottom: 0.2,
  },
  circle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    marginHorizontal: 10,
  },
  circleValue: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  circleLabel: {
    fontSize: 10,
    fontWeight: 'bold',
  },
  container: { flex: 1 },
  header: {
    paddingHorizontal: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  addButton: {
    backgroundColor: '#FF3874',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 5,
    alignSelf: 'flex-end',
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
  title: { paddingHorizontal: 10, flex: 1, justifyContent: 'center' },
  bigTitle: { fontSize: 16, fontFamily: 'Poppins-Medium' },
  smallTitle: { fontSize: 10, fontFamily: 'Poppins-Regular', opacity: 0.6 },
  image: { height: '100%', width: '100%' },
  fireImage: { height: 15, width: 15, alignSelf: 'center', margin: 5 },
  banner: {
    marginTop: 20,
    padding: 30,
    resizeMode: 'contain',
    borderRadius: 20,
    overflow: 'hidden',
    flexDirection: 'row',
  },
  bannerContainer: { flex: 1 },
  label: { fontFamily: 'Poppins-Medium', fontSize: 20, marginVertical: 10 },
  model: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    zIndex: 15,
    height: '85%',
    width: '50%',
    transform: [{ rotateY: '180deg' }],
  },
  imageContainer: {
    height: 50,
    width: 50,
    borderRadius: 25,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  screen: { margin: '3%' },
  offer: { color: 'white', fontFamily: 'Poppins-Regular', fontSize: 14, fontWeight: 'bold' },
  offerText: { color: 'white', fontSize: 18, fontFamily: 'Poppins-Regular', fontWeight: 'bold' },

  rowLabel: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  text: {
    fontSize: 18,
    marginBottom: 12,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  container: {
    alignItems: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  progressBar: {
    backgroundColor: '#f2f2f2',
    height: 20,
    width: '100%',
    borderRadius: 10,
    overflow: 'hidden',
  },
  progressBarInner: {
    backgroundColor: 'blue',
    height: '100%',
    borderRadius: 10,
  },
  waterWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
    marginTop: 0, 
  },
  waterHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  waterText: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
  },
  waterInput: {
    width: '80%',
    height: 40,
    borderRadius: 50,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#00B6B3',
    marginBottom: 20,
  },

});
