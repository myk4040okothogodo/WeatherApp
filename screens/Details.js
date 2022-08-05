import React,{useState} from "react";
import { View, Text,TouchableOpacity, SafeAreaView, Image, StatusBar, FlatList } from "react-native";

import { COLORS, SIZES, assets, SHADOWS, FONTS } from "../constants";
import { CircleButton, RectButton, SubInfo, DetailsDesc, DetailsBid, FocusedStatusBar } from "../components";
import {weatherData} from "../constants";
import Iconx from   "react-native-vector-icons/Ionicons";
import Iconm from  "react-native-vector-icons/MaterialCommunityIcons";
import Icony from  "react-native-vector-icons/MaterialIcons"


const DetailsHeader = ({ data,liked, navigation }) => (
  <View style={{ width: "100%", height: 373 }}>
    <Image
      source={data.image}
      resizeMode="cover"
      style={{ width: "100%", height: "100%" }}
    />

    <CircleButton
      imgUrl={assets.left}
      handlePress={() => navigation.goBack()}
      left={15}
      top={StatusBar.currentHeight + 10}
    />

    <View style={{
      marginTop:0,
      top    : -(336),
      right  : -(290),
      margin : 10,
      width  : 40,
      height : 40,
      backgroundColor: "white",
      alignItems : "center",
      justifyContent: "center",
      borderRadius: 25,
    }}>
      <Icony 
        name  = {liked  ? "favorite" : "favorite-border"}
        type  = "material"
        color = "red"
        size  = {30}
      />

    </View>
  </View>
);

const Details = ({ route, navigation }) => {
  const [liked, setLiked] = useState(false);
  

  const { data , thiscityWeather} = route.params;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />

      <View
        style={{
          width: "100%",
          position: "absolute",
          bottom: 0,
          paddingVertical: SIZES.font,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(255,255,255,0.5)",
          zIndex: 1.5,
        }}
      >
      
      </View>

      <FlatList
        data={weatherData}
        renderItem={({ item }) => <DetailsBid weather={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: SIZES.extraLarge * 3,
        }}
        ListHeaderComponent={() => (
          <React.Fragment>
            <DetailsHeader data={data} liked={liked} navigation={navigation} />
            <SubInfo cityWeather={thiscityWeather} />
            <View style={{ padding: SIZES.font }}>
              <DetailsDesc data={data}  cityWeather={thiscityWeather} />
            </View>
          </React.Fragment>
        )}
      />
    </SafeAreaView>
  );
};

export default Details;
