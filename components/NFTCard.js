import React,{useState, useEffect} from "react";
import { useNavigation } from "@react-navigation/native";
import { connect } from "react-redux";
import { Text, View,Animated, Image, TouchableOpacity } from "react-native";
import {likecity, unlikecity } from "../stores/likesANDunlikes/likesActions";
import { COLORS, SIZES, SHADOWS, assets } from "../constants";
import { SubInfo , NFTTitle } from "./SubInfo";
import { CircleButton } from "./Button";
import Iconx from   'react-native-vector-icons/Ionicons';
import Iconm from 'react-native-vector-icons/MaterialCommunityIcons';
import Icony from 'react-native-vector-icons/MaterialIcons';




const NFTCard = ({likedCities,likecity,unlikecity,data,thiscityWeather,opacity,scale }) => {
  const navigation = useNavigation();

  let cityItem = {
    bio     :  data["bio"],
    id      :  data["id"],
    image   :  data["image"],
    latitude:  data["latitude"],
    longitude: data["longitude"],
    name    :  data["name"]
  }

  const currentValue   = new Animated.Value(1);
  const [compliked, compsetLiked] = useState(false);
  const [counter, setCounter] = useState(-1.5);
  const [visible, setVisible] = useState(false);
  const index2 =  8;

 
  useEffect (() =>{
  if (likedCities?.indexOf(cityItem) >= 0 ) {
        compsetLiked(true)
  }else{
       compsetLiked(false)
  }},[])


  const  likeHandler = () => {
    if (compliked == false ){
        setVisible(true)
        likecity(cityItem, likedCities)
    }
    compsetLiked(!compliked)
    unlikecity(cityItem, likedCities)
    setCounter(index2)
  }


  useEffect(() => {
    if(compliked == true){
      Animated.spring(currentValue, {
        toValue: 3,
        friction: 40,
        useNativeDriver: true
      }).start(() => {
        Animated.spring(currentValue,{
          toValue: 0.6,
          friction: 0,
          useNativeDriver: true
        }).start(() => {
          setVisible(false)
        })
      })
    }
  },[compliked])

  return (
    <TouchableOpacity
        onPress = {() => {
            navigation.navigate("Details", {data, thiscityWeather,compliked});
        }}
    >
    <Animated.View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark,
        transform: [{ scale }],
        opacity

      }}
    >
      <View
        style={{
          width: "100%",
          height: 250,
        }}
      >
        <Image
          source={data.image}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "95%",
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
          }}
        />

      {/* <CircleButton imgUrl={assets.heart} right={10} top={10} /> */}
      <View style={{
        marginTop : 0,
        top       : -215,
        right     : -275,
        margin    : 10,
        width     : 40,
        height    : 40,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 40,
      }}>
        <Icony
          name = {compliked && (index2 === counter) ? "favorite" : "favorite-border"}
          type = "material"
          color = "red"
          size = {28}
          onPress = {likeHandler}
        />
      </View>
      <View  style={{ marginTop:0, alignItems:"center", justifyContent:"center"}}>
        {visible && (index2 == counter) &&
          <Animated.View style ={{transform:[{scale: currentValue}]}}>
            <Icony name="favorite"
              size = {40}
              color = "#FF033E"
            />
          </Animated.View>
        }

      </View>
      </View>

      <SubInfo />
    
      <View style={{ width: "100%", padding: SIZES.font }}>
        <View style={{flexDirection:"row", justifyContent:"center", paddingBottom:25}}>
        <NFTTitle
          title={data.name}
          titleSize={SIZES.large}
        />
       </View>
        <View
          style={{
            marginTop: SIZES.font,
            flexDirection: "row",
            justifyContent: "space-between",
            //alignItems: "center",
          }}
        >  
        <Iconx name="sunny" size={42} color="#FFBF00" />
        <Iconx name="cloudy" size={42} color="#A9A9A9" />
        <Iconm name="weather-windy" size={40} color="#231F20" />
        <Iconx name="rainy" size={40} color="#6F7378" />
        </View>
        {(thiscityWeather !== undefined) ? 
          <View style={{ flexDirection:"row", justifyContent:"space-between", fontSize:18, fontWeight: 900}}>
            <Text> {thiscityWeather["sun"]}°C</Text>
            <Text> {thiscityWeather["cloud"]} Oktas</Text>
            <Text> {thiscityWeather["wind"]} km/h</Text>
            <Text> {thiscityWeather["rain"]} mm</Text>
          </View>
          :
          <View style={{ flexDirection:"row", justifyContent:"space-between",fontsize:18, fontWeight: 900}}>
            <Text>0 °C</Text>
            <Text>0 Oktas</Text>
            <Text>0 km/h</Text>
            <Text>0 mm</Text>
          </View>
        }
      </View> 
    </Animated.View>
    </TouchableOpacity>
  );
};


function mapStateToProps(state){
    return {
      likedCities: state.likesReducer.likedCities
    }
}

function mapDispatchToProps(dispatch){
    return {
      likecity: (city, likedZities) => {
        return dispatch(likecity(city, likedZities))
      },
      unlikecity: (city, likedZities) => {
        return dispatch(unlikecity(city, likedZities))
      }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NFTCard);
