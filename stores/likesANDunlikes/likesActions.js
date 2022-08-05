export const LIKE_CITY = 'LIKE_CITY';
export const UNLIKE_CITY = 'UNLIKE_CITY';

export const likecitySuccess = (likedCities) => ({
  type    :   LIKE_CITY,
  payload :   {likedCities}

});

export const unlikecitySuccess = (likedCities) => ({
  type    :  UNLIKE_CITY,
  payload : {likedCities}
})


export function likecity(city, likedZities){
  return dispatch => {
    let likedCities = new Array();
    likedCities = [...likedZities, city];
    dispatch(likecitySuccess(likedCities))
  }
};


export function unlikecity(city, likedZities){
  return dispatch => {
    let likedCities = new Array();
    const index = likedZities.findIndex(likedcity => likedcity.id === city.id);
    let newCitiesliked = [...likedZities];
    if (index > -1){
        newCitiesliked.splice(index, 1);
    } 
    likedCities = newCitiesliked ;
    dispatch(unlikecitySuccess(likedCities))
  }
};
