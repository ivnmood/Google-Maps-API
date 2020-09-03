import React from 'react'
import GeoMap from "./geoMap";
import {connect} from "react-redux";
import {addItem} from "../../redux/MainPageReducer";


const MainContainer = (props) => {
    return (
        <GeoMap
            latitude={props.latitude}
            longitude={props.longitude}
            address={props.address}
            addItem={props.addItem}
            coordinates={props.coordinates}
            feelsLike={props.feelsLike}
            temp={props.temp}
            description={props.description}
        />
    )
}

const mapStateToProps = (state) => {
    return {
        latitude: state.mainPage.coordinates[state.mainPage.coordinates.length - 1].latitude,
        longitude: state.mainPage.coordinates[state.mainPage.coordinates.length - 1].longitude,
        address: state.mainPage.coordinates[state.mainPage.coordinates.length - 1].address,
        feelsLike: state.mainPage.coordinates[state.mainPage.coordinates.length - 1].feelsLike,
        temp: state.mainPage.coordinates[state.mainPage.coordinates.length - 1].temp,
        description: state.mainPage.coordinates[state.mainPage.coordinates.length - 1].description,
        coordinates: state.mainPage.coordinates
    }
}


export default connect(mapStateToProps, {addItem})(MainContainer)