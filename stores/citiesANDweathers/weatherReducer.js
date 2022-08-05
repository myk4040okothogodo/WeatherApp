import * as weatherActions from "./weatherActions";

const initialState = {
   todaysWeather: [],
   error : null,
   loading: false,
}


const weatherReducer = (state = initialState, action) => {
    switch(action.type) {
        case weatherActions.GET_WEATHERS_BEGIN:
            return {
                ...state,
                loading: true
            }
        case weatherActions.GET_WEATHERS_SUCCESS:
            return {
                ...state,
                todaysWeather: action.payload.todaysWeather
            }
      case weatherActions.GET_WEATHERS_FAILURE:
           return {
               ...state,
                error: action.payload.error
           }
      default:
        return state
    }
}

export default weatherReducer;  
