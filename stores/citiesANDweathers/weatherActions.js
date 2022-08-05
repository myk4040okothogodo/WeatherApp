import axios from "axios";
import {citiesData} from "../../constants";
export const GET_WEATHERS_BEGIN = "GET_WEATHERS_BEGIN";
export const GET_WEATHERS_SUCCESS = "GET_WEATHERS_SUCCESS";
export const GET_WEATHERS_FAILURE = "GET_WEATHERS_FAILURE";

APIkey ="4cbc0d6e-cbf3-11ec-a8d3-0242ac130002-4cbc0ddc-cbf3-11ec-a8d3-0242ac130002"
APIkey2 ="5a782f767c1d4721a5f92535220308"

export const getWeathersBegin = () => ({
    type: GET_WEATHERS_BEGIN
})

export const getWeathersSuccess = (todaysWeather) => ({
    type: GET_WEATHERS_SUCCESS,
    payload: {todaysWeather}

})

export const getWeathersFailure = (error) => ({
    type: GET_WEATHERS_FAILURE,
    payload: {error}
})

export function getTodaysWeather(){
    return dispatch => {
      //dispatch(getWeathersBegin());

      let todaysWeather = new Object();
      let hourNow = new Date().getHours()

      citiesData?.map((city)=> {
          let lat = city.latitude;
          let lng = city.longitude;
          //console.log("longitude :",lng, "latitude :", lat)
          const params = 'airTemperature,cloudCover,gust,precipitation';
          //let apiUrl = `https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}`;
          let apiUrl = `https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}`;
          let apiUrl2 = `https://api.weatherapi.com/v1/current.json?key=${APIkey2}&q=${city.name}`
           
         //todaysWeather[city.name] =
           return axios({
               method: 'get',
               url : apiUrl2,
               headers : {
                   Accept: "application/json"
               }
           }).then((response) => {
              if (response.status == 200) {
                  //console.log(response.data["current"]["cloud"])
                
                    return todaysWeather[city.name] = {
                         rain :  response.data["current"]["precip_mm"],
                         cloud : response.data["current"]["cloud"],
                         wind :  response.data["current"]["gust_kph"],
                         sun  :  response.data["current"]["temp_c"],
                         text :  response.data["current"]["condition"]["text"],
                         icon :  response.data["current"]["condition"]["icon"],
                       };
                  //console.log("todaysWeather :", todaysWeather[city.name])
                  dispatch(getWeathersSuccess(todaysWeather))
              } else {
                   return  todaysWeather[city.name] =  {
                     rain : "0.00",
                     cloud: "0.00",
                     wind:  "0.00",
                     sun:   "0.00",
                     text:  " ",
                     icon:  "//cdn.weatherapi.com/weather/64x64/day/122.png",
                  };
              }
                 dispatch(getWeathersSuccess(todaysWeather))
                 // console.log(todaysWeather[city.name]["cloud"])
           }).catch((error)=>{
              console.log("error :", error)
              return todaysWeather[city.name] = {
                  rain:  "0.00",
                  cloud: "0.00",
                  wind:  "0.00",
                  sun :  "0.00",
                  text:  " ",
                  icon: "//cdn.weatherapi.com/weather/64x64/day/122.png"
              }
           })
        dispatch(getWeathersSuccess(todaysWeather))
      //console.log("todaysWeather: ", todaysWeather)
      })
      dispatch(getWeathersSuccess(todaysWeather))
       
   }
}
