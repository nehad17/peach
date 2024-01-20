import React from 'react';
import {Image,  SafeAreaView, StyleSheet, View, Text, ScrollView,
  TextInput,
  FlatList,
  TouchableOpacity,} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


  import {Dimensions} from 'react-native';

  import { useNavigation } from '@react-navigation/native';
const {width, height} = Dimensions.get('window');
const headerImage = require('../../assets/images/header.jpg')
const notification = require('../../assets/images/notification.png')
const home = require('../../assets/images/Home.png');
const heart = require('../../assets/images/H.png');
const plus = require('../../assets/images/Plus2.png');
const food = require('../../assets/images/food.png');
const profile = require('../../assets/images/User.png');

import { LineChart } from 'react-native-chart-kit';

const ProfileScreen = ({navigation}) => {

  
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
    <SafeAreaView style={styles.container}>
    <View style={styles.screen}>
    <Header />
    <Text></Text>
    <Text style={styles.profileTitle}>Data overview</Text>
    <Text></Text>
    <Text></Text>
    <View style={{ flexDirection: 'row'}}>
    <View>
    <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 }}>Goal</Text>
    

<TouchableOpacity
    activeOpacity={0.8}
    style={{
      backgroundColor: 'white',
      width: 0.45 * SIZES.width - 35,
      margin: 10,
      height: 190,
      borderRadius: 30,
      padding: 15,
      shadowColor: '#9e9898',
      justifyContent: 'center', 
      elevation: 5,
    }}>
      
    <Image 
        source={require('../../assets/images/weightloss.jpg')}
        style={{ width: '77%', height: '100%', borderRadius: 30 }}
    />
    
</TouchableOpacity>
  </View>
  
  <View> 
  <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 }}>Weight progress</Text>
  <LineChart
    marginHorizontal={80}
    data={caloriedata}
    width={0.6 * SIZES.width - 35} // set to the same width as the first box
    height={190} // set to the same height as the first box
    yAxisSuffix=" Kg"
    chartConfig={{
      backgroundGradientFrom: '#fff',
      backgroundGradientTo: '#fff',
      decimalPlaces: 2,
      color: (opacity = 1) => `rgba(0, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      strokeWidth: 1,
      barPercentage: 1,
      useShadowColorFromDataset: false,
      withVerticalLabels: true,
      withHorizontalLabels: true,
      propsForVerticalLabels: {
        fontFamily: 'Helvetica',
        fontSize: 12, // increase font size to 12
        color: '#828282',
      },
      propsForHorizontalLabels: {
        fontFamily: 'Helvetica',
        fontSize: 12, // increase font size to 12
        color: '#828282',
      },
      formatYLabel: (value) => `${value} kcal`,
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16,
      backgroundColor: 'white',
      elevation: 4,
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.2,
      shadowRadius: 2,
      marginBottom: 60, // add some marginBottom
    }}
  />
  </View>
  
</View>

<View style={{ flexDirection: 'row'}}>
  
<TouchableOpacity
  activeOpacity={0.8}
  style={{
    backgroundColor: '#d4f5fb',
    width: 0.5 * SIZES.width - 35,
    margin: 10,
    height: 135,
    borderRadius: 30,
    padding: 15,
    shadowColor: '#9e9898',
    elevation: 5,
  }}>
  <View
    style={{
      flexDirection: 'row',
      alignItems: 'center',
    }}>
    <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Water</Text>
    <Image
      source={require('../../assets/images/waterdrop.png')}
      style={{
        width: 20,
        height: 40,
        marginLeft: 30,
      }}
    />
  </View>
  <Text>
    <Text style={{fontSize: 40,fontWeight: 'bold'}}>2.1</Text>
    <Text style={{fontSize: 16,opacity: 20, fontWeight: 'bold'}}> Liters</Text>
  </Text>
</TouchableOpacity>
  

  <TouchableOpacity
    activeOpacity={0.8}
    style={{
      backgroundColor: '#f9f0c4',
      width: 0.5 * SIZES.width - 35,
      margin: 10,
      height: 135,
      borderRadius: 30,
      padding: 15,
      shadowColor: '#9e9898',
      elevation: 5,
    }}>
    {/* Content for second box */}
    <View
    style={{
      
    }}>
      <Text>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Calories  </Text>
      <Image
      source={require('../../assets/images/calorie_icon.png')}
      style={{ width: 30, height: 30, marginLeft: 0, }}
    />

      
</Text>
  <Text>
  <Text style={{fontSize: 30,fontWeight: 'bold'}}>1454</Text>
  <Text style={{fontSize: 16,opacity: 20, fontWeight: 'bold'}}> kCal</Text>
</Text>
  </View>
  </TouchableOpacity>
</View>

    
</View>

<View style={{ flexDirection: 'row'}}>
  <TouchableOpacity
    activeOpacity={0.8}
    style={{
      backgroundColor: '#fbdcfe',
      width: 1 * SIZES.width - 35,
      margin: 10,
      height: 135,
      marginBottom: 70, 
      borderRadius: 30,
      padding: 15,
      shadowColor: '#9e9898',
      elevation: 5,
    }}>
    {/* Content for first box */}
    <View
    style={{
      
    }}>

<Text>
  <Text style={{}}></Text>
  <Text style={{}}></Text>
  </Text>
 
  <View style={{flexDirection: 'row', alignItems: 'center'}}>
  <Text style={{fontSize: 25, fontWeight: 'bold'}}>Activity</Text>
  <Image
      source={require('../../assets/images/activity.png')}
      style={{ width: 30, height: 40, marginLeft: 10, }}
    />

  <View style={{flex: 1, alignItems: 'flex-end'}}>
    <Text style={{fontSize: 25, fontWeight: 'bold'}}>Weight</Text>
  </View>
</View>
<View style={{flexDirection: 'row', alignItems: 'center'}}>
<Text style={{fontSize: 20, opacity: 0.7, fontWeight: 'bold', color:'black'}}>Very active</Text>
  <View style={{flex: 1, alignItems: 'flex-end'}}>
    <Text style={{fontSize: 20,opacity: 0.7, fontWeight: 'bold', color:'black'}}>68 Kg</Text>
  </View>
</View>
  </View>
  </TouchableOpacity>
  

 
</View>

  
    <BottomTab navigation={navigation} />
    </SafeAreaView>
    </ScrollView>
    );
    };


const ImageContainer = ({image, height = '100%', width = '100%'}) => (
  <View style={styles.imageContainer}>
    <Image source={image} style={[{height, width}]} />
  </View>
);

const caloriedata=  {
  labels: ['O.', 'N.', 'D.', 'J.', 'F.'],
  datasets: [
    {
      data: [67.00, 65.00, 64.80, 68.30, 66.20],
      color: () => '#FF3874', // can be customized
      strokeWidth: 2 // can be customized
    }
  ]
};



export default ProfileScreen;



const styles = StyleSheet.create({
  container: {
  flex: 1,
  },
  header: {
    paddingHorizontal: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  screen: {margin: '3%'},
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  goal: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  goalTitle: {
    flex: 1,
  },
  goalProgress: {
    fontWeight: 'bold',
  },
  activity: {
    fontSize: 16,
  },
  weight: {
    fontSize: 16,
  },
  height: {
    fontSize: 16,
  },
  currentCalories: {
    fontSize: 16,
  },
  image: {height: '100%', width: '100%'},

  imageContainer: {
    height: 50,
    width: 50,
    borderRadius: 25,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {paddingHorizontal: 10, flex: 1, justifyContent: 'center'},
    bigTitle: {fontSize: 16, fontFamily: 'Poppins-Medium'},
    profileTitle: {fontSize: 40, paddingTop: 10, fontWeight:'bold'}, 
    smallTitle: {fontSize: 10, fontFamily: 'Poppins-Regular', opacity: 0.6},
});



const Header = () => (
    <View style={styles.header}>
      <ImageContainer image={headerImage} />
      <HeaderTitle />
      <ImageContainer image={notification} height={'50%'} width={'50%'} />
    </View>
  );


  const HeaderTitle = () => {
    const currentDate = new Date().toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
    
    return (
      <View style={styles.title}>
        <Text style={styles.bigTitle}>Hi, Schamma</Text>
        <Text style={styles.smallTitle}>{currentDate}</Text> 
      </View>
    );
  };


  const BottomTab = ({navigation}) => (
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
        <TouchableOpacity onPress={()=>navigation.navigate("Home")}>
        <BottomButton image={home} />
        </TouchableOpacity>
  <TouchableOpacity onPress={()=>navigation.navigate("Workout")}>
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
      <TouchableOpacity onPress={()=>navigation.navigate("Diet")}>
      <BottomButton image={food} />
      </TouchableOpacity>
     <TouchableOpacity onPress={()=>navigation.navigate("Profile")}>
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

  const BottomButton = ({image, style, imageStyle}) => (
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
              height: image === plus ? 40 : 20,
              width: image === plus ? 40 : 20,
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