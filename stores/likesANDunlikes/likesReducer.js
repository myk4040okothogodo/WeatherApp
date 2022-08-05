import * as likesActions from "./likesActions";


const initialState = {

  likedCities: [],
}



const likesReducer = (state = initialState, action) => {
  switch(action.type){
    case likesActions.LIKE_CITY:
        return {
        ...state,
        likedCities: action.payload.likedCities
        }
    case likesActions.UNLIKE_CITY:
        return {
        ...state,
        likedCities: action.payload.likedCities

        }
    default:
        return state
    }  
}

export default likesReducer;
