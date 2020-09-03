const SET_GEOCOORDINATES = 'SET_GEOCOORDINATES';
const REMOVE_ITEM = 'REMOVE_ITEM';
const ADD_ITEM = 'ADD_ITEM';


let initialState = {
    coordinates: [
        {
            id: 1,
            latitude:  -21.8052,
            longitude: -49.0898,
            date: new Date('December 17, 1995 03:24:00'),
            address: "Unnamed Road, Iacanga - SP, 17180-000, Brazil",
            temp: 25,
            feelsLike: 30,
            description: 'Sunny'
        }
    ]

};

const MainReducers = (state = initialState, action) => {

    switch (action.type) {
        case SET_GEOCOORDINATES: {
            return {
                ...state,
                coordinates: [...action.coordinates]
            }
        }
        case REMOVE_ITEM: {
            return {coordinates: [...state.coordinates].filter(coordinates => coordinates.id !== action.id)}
        }
        case ADD_ITEM: {
            const newItem = {
                latitude: action.latitude,
                longitude: action.longitude,
                date: (new Date()),
                address: action.address,
                temp: action.temp,
                feelsLike: action.feelsLike,
                description: action.description,
                id: ((new Date()).getTime())
            }
            return {
                ...state,
                coordinates: [...state.coordinates, newItem],
            }
        }

        default:
            return state;
    }

};


export const setGeoCoordinates = (coordinates) => ({type: SET_GEOCOORDINATES, coordinates})
export const removeGeoItem = (id) => ({type: REMOVE_ITEM, id})
export const addGeoItem = (latitude, longitude, address, temp, feelsLike, description) => ({type: ADD_ITEM, latitude, longitude, address, temp, feelsLike, description})


export const requestGeoCoordinates = () => {
    return  (dispatch) => {
        dispatch(setGeoCoordinates())

    }
}

export const removeItem = (id) => (dispatch) => {
    dispatch(removeGeoItem(id))
}

export const addItem = (latitude, longitude, address, temp, feelsLike, description) => (dispatch) => {
    dispatch(addGeoItem(latitude, longitude, address, temp, feelsLike, description))
}

export default MainReducers;