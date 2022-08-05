import React from "react";
import { View, Text, Image } from "react-native";
import { COLORS, SIZES, FONTS } from "../constants";

const DetailsBid = ({ weather }) => {
    return (
       <View
          style = {{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginVertical: SIZES.base,
              paddingHorizontal: SIZES.base,
          }}
          key = {weather.id}
      >
          <Image 
              source = {weather.image}
              resizeMode = "contain"
              style = {{ width: 48, height: 48 }}
          />
          <View 
             style = {{
                 flex: 1,
                 alignItems: "center",
                 paddingHorizontal: SIZES.base,
             }}
           >
          <Text
              style = {{
                  fontFamily: FONTS.semiBold,
                  fontSize: SIZES.small,
                  color:  COLORS.primary,
              }}
           >
               Bid placed by {weather.name}
           </Text>
           <Text 
               style = {{
                  fontFamily: FONTS.regular,
                  fontSize: SIZES.small - 2,
                  color: COLORS.secondary,
                  marginTop: 3,
               }} 
           >
           { bid.date }
           </Text>
         </View>
      </View>
    );
};

export default DetailsBid;
