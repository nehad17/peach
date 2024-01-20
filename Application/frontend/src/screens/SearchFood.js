import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import axios from 'axios';

const SearchFood = ({ navigation, route}) => {
  const [barcode, setBarcode] = useState('');
  const [searchResults, setSearchResults] = useState({});
  const { mealType } = route.params;

  const handleSearch = () => {
    axios.get(`https://world.openfoodfacts.org/api/v0/product/${barcode}.json`)
      .then(response => {
        setSearchResults(response.data.product);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleAddToMeal = () => {
    const foodItem = {
      name: searchResults.product_name,
      kcal: searchResults.nutriments && searchResults.nutriments['energy-kcal'],
      id: searchResults.id,
      servings: 1, // You can change this to allow the user to choose the number of servings
    };
  
    route.params.onAdd(foodItem);
    navigation.goBack();
  };
  

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Enter Barcode"
          placeholderTextColor="#9e9898"
          value={barcode}
          onChangeText={setBarcode}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>
      {searchResults.product_name ? (
        <View>
          <Text>Name: {searchResults.product_name}</Text>
          <Text>Energy: {searchResults.nutriments && searchResults.nutriments['energy-kcal']} kcal</Text>
          <Text>Fat: {searchResults.nutriments && searchResults.nutriments.fat} g</Text>
          <Text>Protein: {searchResults.nutriments && searchResults.nutriments.proteins} g</Text>
          <Text>Carbohydrate: {searchResults.nutriments && searchResults.nutriments.carbohydrates} g</Text>
          <Text>Fiber: {searchResults.nutriments && searchResults.nutriments.fiber} g</Text>
          <Text>Salt: {searchResults.nutriments && searchResults.nutriments.salt} g</Text>
          <Text>Sugar: {searchResults.nutriments && searchResults.nutriments.sugars} g</Text>
          <TouchableOpacity style={styles.addButton} onPress={handleAddToMeal}>
            <Text style={styles.addButtonText}>Add to Meal</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <Text>No results found.</Text>
      )}
    </SafeAreaView>
  );
};
export default SearchFood;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    borderRadius: 25,
    paddingHorizontal: 15,
    marginVertical: 15,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#171717',
  },
  searchButton: {
    backgroundColor: '#007AFF',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginLeft: 10,
  },
  searchButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
  addButton: {
    backgroundColor: '#FFC107',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginTop: 15,
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
})
