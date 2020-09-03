import React from "react";
import Coordinates from "./Coordinates";
import {removeItem, requestGeoCoordinates} from "../../redux/MainPageReducer";
import {connect} from "react-redux";

const HistoryContainer = (props) => {


    return (
       <Coordinates
           removeItem={props.removeItem}
           requestGeoCoordinates={props.requestGeoCoordinates}
           latitude={props.latitude}
           longitude={props.longitude}
           date={props.date}
           coordinates={props.coordinates}
       />
    )
}


const mapStateToProps = (state) => {
    return {
        latitude: state.mainPage.coordinates[state.mainPage.coordinates.length - 1].latitude,
        longitude: state.mainPage.coordinates[state.mainPage.coordinates.length - 1].longitude,
        date: state.mainPage.coordinates[state.mainPage.coordinates.length - 1].date,
        coordinates: state.mainPage.coordinates
    }
}


export default connect(mapStateToProps, {requestGeoCoordinates, removeItem})(HistoryContainer)