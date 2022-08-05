import React, { useState, useEffect } from "react";
import { View, SafeAreaView, FlatList, Animated } from "react-native";
import  { connect } from "react-redux";
import  { getTodaysWeather } from "../stores/citiesANDweathers/weatherActions";
import { NFTCard, HomeHeader, FocusedStatusBar } from "../components";
import { COLORS, citiesData } from "../constants";
import { useFocusEffect } from "@react-navigation/native";
import * as Notifications from "expo-notifications";
import * as Permissions from   "expo-permissions";



Notifications.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldShowAlert: true,
    }
  },
})


const Home = ({getTodaysWeather, todaysWeather, likedCities}) => {
  const ITEM_SIZE = 460
  const [CitiesData, setCitiesData] = useState(citiesData);
  const scrollY = React.useRef(new Animated.Value(0)).current;

  
  useEffect(() => {
    //Permission for ios
    Permissions.getAsync(Permissions.NOTIFICATIONS).then(statusObj => {
      //check if we already have permission
      if (statusObj.status !== "granted") {
        // If permission is not there, ask for the same
        return Permissions.askAsync(Permissions.NOTIFICATIONS)
      }
      return statusObj
    }).then(statusObj => {
      //If permission is still not given throw an error
      if (statusObj.status !== "granted") {
        throw new Error("Permission not granted")
      }
    }).catch(err => {
      return null
    });

    let favcities = ["NAIROBI","KAMPALA","KIGALI"];

    if (likedCities > 0 ) {
      likedCities.map((city)=> {
        if (todaysWeather[city["name"]] !== undefined) {
            triggerlocal(todaysWeather, city["name"])
        }})
    }else {
      favcities.map((city) => {
        if (todaysWeather[city] !== undefined) {
        triggerlocal(todaysWeather, city)
        }})
    }
  }, [todaysWeather]) 


  useFocusEffect(
    React.useCallback(() => {
      getTodaysWeather();
    },[])
  )

   const triggerlocal = (todaysWeather, name) => {
     Notifications.scheduleNotificationAsync({
      content: {
         title: name,
         body : todaysWeather[name]["text"],
      },
       trigger: { seconds:5}
     })
   } 

   const handleSearch = (value) => {
    if (value.length === 0) {
      setCitiesData(citiesData);
    }

    const filteredData = citiesData.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredData.length === 0) {
      setCitiesData(citiesData);
    } else {
      setCitiesData(filteredData);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
    
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <Animated.FlatList
            data={CitiesData}
            onScroll = {Animated.event(
              [{ nativeEvent: {contentOffset : { y : scrollY }}}],
              {useNativeDriver: true }
            )}
            keyExtractor={(item ) => item.id}
            renderItem={({ item , index}) => {
              const inputRange = [
                -1,
                0,
                ITEM_SIZE * index,
                ITEM_SIZE * (index + 1)
              ];
              const opacityInputRange = [
                -1,
                0,
                ITEM_SIZE * index,
                ITEM_SIZE * (index +  .5)
              ];
              const scale = scrollY.interpolate({
                inputRange,
                outputRange: [1,1,1,0]
              });
              const opacity = scrollY.interpolate({
                inputRange  : opacityInputRange,
                outputRange : [1,1,1,0]
              });
              console.log("data :", item.id)            
              return <NFTCard data={item} thiscityWeather={todaysWeather[item.name]} scale={scale} opacity={opacity} /> 
              
              }}
            
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
          />
        </View>

        <View
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: -1.5,
          }}
        >
          <View
            style={{ height: 300, backgroundColor: COLORS.primary }} />
          <View style={{ flex: 1, backgroundColor: COLORS.white }} />
        </View>
      </View>
    </SafeAreaView>
  );
};


function mapStateToProps(state){
  return {
    todaysWeather : state.weatherReducer.todaysWeather,  
    likedCities :   state.likesReducer.likedCities
  }
}


function  mapDispatchToProps(dispatch){
  return {
    getTodaysWeather: () => {
      return dispatch(getTodaysWeather())   
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

