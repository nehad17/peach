import React from "react";
import {
    Image,
    ImageBackground,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
    Dimensions, 
    TouchableOpacity 
  } from 'react-native';
  import { useNavigation } from "@react-navigation/native";

  import * as Progress from 'react-native-progress';
  import { LineChart } from 'react-native-chart-kit';
const headerImage = require('../../assets/images/header.jpg')
const notification = require('../../assets/images/notification.png')
const banner = require('../../assets/images/BG.png')
const fire = require('../../assets/images/fire.png')
const model = require('../../assets/images/model.png')
const couple = require('../../assets/images/couple.jpg')
const cycle = require('../../assets/images/cycle.png');
const yoga = require('../../assets/images/yoga.png');
const walk = require('../../assets/images/walk.png');
const next = require('../../assets/images/next.png');
const play = require('../../assets/images/play.png');
const star = require('../../assets/images/Star.png');
const book = require('../../assets/images/Book.png');
const home = require('../../assets/images/Home.png');
const heart = require('../../assets/images/H.png');
const food = require('../../assets/images/food.png');
const profile = require('../../assets/images/User.png');
const plus = require('../../assets/images/Plus2.png');



const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <SafeAreaView style={styles.container}>
        <View style={styles.screen}>
          <Header />
          <Banner />
        </View>
        <View style={{ marginHorizontal: '3%', flex: 1 }}>
          <Label>Overview</Label>
          <View style={{ flexDirection: 'row' }}>
            {data.map((item, index) => (
              <Card data={item} index={index} />
            ))}
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Label>Calorie consumption</Label>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                opacity: 0.5,
                fontSize: 12,
              }}
            >
              Weekly
            </Text>
          </View>
          <View style={{ flex: 1 }}>
            <LineChart
              data={caloriedata}
              width={Dimensions.get('window').width - 20} // from react-native
              height={200}
              yAxisSuffix="kcal"
              chartConfig={{
                backgroundGradientFrom: '#fff',
                backgroundGradientTo: '#fff',
                decimalPlaces: 0,
                color: (opacity = 1) => `rgba(0, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                strokeWidth: 2,
                barPercentage: 0.5,
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
                marginBottom: 20 // add some marginBottom
              }}
            />
          </View>
          <Label>Weight progress</Label>
          <View style={{ flex: 1 }}>
            <LineChart
              data={weightdata}
              width={Dimensions.get('window').width - 20} // from react-native
              height={200}
              yAxisSuffix="kg"
              chartConfig={{
                backgroundGradientFrom: '#fff',
                backgroundGradientTo: '#fff',
                decimalPlaces: 0,
                color: (opacity = 1) => `rgba(0, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                strokeWidth: 2,
                barPercentage: 0.5,
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
                marginBottom: 60 // add some marginBottom
              }}
            />
          </View>

          

        </View>
        <BottomTab navigation={navigation}/>
      </SafeAreaView>
    </ScrollView>
  );
};
  
export default HomeScreen; 

const caloriedata=  {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        data: [2000, 2200, 2100, 2400, 2300, 2500, 2600],
        color: () => '#FF3874', // can be customized
        strokeWidth: 2 // can be customized
      }
    ]
  };

  const weightdata=  {
    labels: ['O.', 'N.', 'D.', 'J.', 'F.'],
    datasets: [
      {
        data: [67.00, 65.00, 64.80, 68.30, 66.20],
        color: () => '#FF3874', // can be customized
        strokeWidth: 2 // can be customized
      }
    ]
  };

  const BottomTab = ({navigation}) => (
    <View style={styles.bottomTabContainer}>
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
      <TouchableOpacity onPress={()=>navigation.navigate("Diet")}>
        <BottomButton image={food} />
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate("Profile")}>
        <BottomButton image={profile} />
      </TouchableOpacity>
    </View>
  );

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
            left: 32,
          }}
        />
      )}
    </>
  );
  

const Card = ({data, index}) => {
    return (
      <View
        style={{
          flex: 1,
          height: index === 1 ? 165 : 150,
          padding: 10,
          alignSelf: 'center',
          backgroundColor: data.color,
          justifyContent: 'space-between',
          marginHorizontal: 8,
          borderRadius: 10,
          shadowColor: 'lightgrey',
          shadowOffset: {width: -5, height: 5},
          shadowOpacity: 0.5,
          shadowRadius: 2,
        }}>
        <Image source={data.image} style={{height: 25, width: 25}} />
        <View style={{alignSelf: 'center', margin: 5}}>
          <Progress.Circle
            size={50}
            progress={data.status / 100}
            showsText
            unfilledColor="#ededed"
            borderColor="#ededed"
            color={data.darkColor}
            direction="counter-clockwise"
            fill="white"
            strokeCap="round"
            thickness={5}
            style={{
              shadowColor: 'grey',
              shadowOffset: {width: 2, height: 2},
              shadowOpacity: 0.1,
              shadowRadius: 1,
            }}
            textStyle={{
              fontSize: 16,
              fontFamily: 'Poppins-Bold',
              fontWeight: 'bold',
            }}
          />
        </View>
        <View>
          <Text style={{fontSize: 10, fontFamily: 'Poppins-Light', color: 'white'}}>
            {'Training     1'}
          </Text>
          <Text style={{fontSize: 10, fontFamily: 'Poppins-Light', color: 'white'}}>
            {'Time'}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{fontFamily: 'Poppins-Regular', color: 'white', fontWeight: 'bold'}}>{data.name} </Text>
          <View
            style={{
              backgroundColor: data.lightColor,
              padding: 1,
              borderRadius: 10,
            }}>
            <Image
              source={next}
              style={{
                height: 12,
                width: 12,
                resizeMode: 'contain',
              }}
            />
          </View>
        </View>
      </View>
    );
  };

const Header = () => (
    <View style={styles.header}>
      <ImageContainer image={headerImage} />
      <HeaderTitle />
      <ImageContainer image={notification} height={'50%'} width={'50%'} />
    </View>
  );
   
  const Banner = () => (
    <>
      <ImageBackground style={styles.banner} source={banner}>
        <View style={styles.bannerContainer}>
          <View style={styles.rowLabel}>
            <View style={styles.fireContainer}>
            </View>
            <Text style={styles.offer}>Merge.</Text>
          </View>
          <OfferText>BE THAVAGE,</OfferText>
          <OfferText>NOT AVERAGE.</OfferText>
        </View>
      </ImageBackground>
      <Image source={model} style={styles.model} resizeMode="contain" />
    </>
  );

  const OfferText = ({children}) => (
    <Text style={styles.offerText}>{children}</Text>
  );
  

const ImageContainer = ({image, height = '100%', width = '100%'}) => (
    <View style={styles.imageContainer}>
      <Image source={image} style={[{height, width}]} />
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
const Label = ({children}) => <Text style={styles.label}>{children}</Text>;
const styles = StyleSheet.create({
    container: {flex: 1},
    header: {
      paddingHorizontal: 5,
      flexDirection: 'row',
      alignItems: 'center',
    },
    title: {paddingHorizontal: 10, flex: 1, justifyContent: 'center'},
    bigTitle: {fontSize: 16, fontFamily: 'Poppins-Medium'},
    smallTitle: {fontSize: 10, fontFamily: 'Poppins-Regular', opacity: 0.6},
    image: {height: '100%', width: '100%'},
    fireImage: {height: 15, width: 15, alignSelf: 'center', margin: 5},
    banner: {
      marginTop: 20,
      padding: 30,
      resizeMode: 'contain',
      borderRadius: 20,
      overflow: 'hidden',
      flexDirection: 'row',
    },
    bannerContainer: {flex: 1},
    label: {fontFamily: 'Poppins-Medium', fontSize: 20, marginVertical: 10},
    model: {
      position: 'absolute',
      right: 0,
      bottom: 0,
      zIndex: 15,
      height: '85%',
      width: '50%',
      transform: [{rotateY: '180deg'}],
    },
    imageContainer: {
      height: 50,
      width: 50,
      borderRadius: 25,
      overflow: 'hidden',
      justifyContent: 'center',
      alignItems: 'center',
    },
    screen: {margin: '3%'},
    offer: {color: 'white', fontFamily: 'Poppins-Regular', fontSize: 14, fontWeight: 'bold'},
    offerText: {color: 'white', fontSize: 18, fontFamily: 'Poppins-Regular',  fontWeight: 'bold'},
  
    rowLabel: {
      flexDirection: 'row',
      alignItems: 'center',
    },

    bottomTabContainer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: 60,
      backgroundColor: '#DBFCFB',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      borderTopWidth: 1,
      borderTopColor: '#dcdcdc',
    },

}); 

const data = [
    {
      name: 'Cycling',
      status: 85,
      image: cycle,
      lightColor: '#FF9FBC',
      color: '#FF3874',
      darkColor: '#FF004D',
    },
    {
      name: 'Walking',
      status: 20,
      image: walk,
      lightColor: '#02DBD7',
      color: '#00B6B3',
      darkColor: '#DBFCFB',
    },
    {
      name: 'Yoga',
      status: 85,
      image: yoga,
      lightColor: '#D775FF',
      color: '#B318B6',
      darkColor: '#FB3DFF',
    },
  ];