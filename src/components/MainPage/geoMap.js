import React, {useEffect} from 'react'
import {GoogleMap, LoadScript, Marker} from '@react-google-maps/api';
import Geocode from "react-geocode";
import style from "./style.module.css"

const GeoMap = (props) => {

    useEffect(() => {
        const geoFindMe = () => {

            const success = position => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;

                Geocode.setApiKey("AIzaSyDal_A90HrAXBxIgC4jH4MyCKcbPTSnlJo");
                Geocode.fromLatLng(latitude, longitude).then(
                    response => {
                        const address = response.results[0].formatted_address;

                        const gettingWeather = async () => {
                            const api_url =
                                await fetch(`https://openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=439d4b804bc8187953eb36d2a8c26a02&units=metric`);
                            const data = await api_url.json();
                            console.log(data);
                            const temp = data.main.temp
                            const feelsLike = data.main.feels_like
                            const description = data.weather[0].description
                            props.addItem(latitude, longitude, address, temp, feelsLike, description);
                        }
                        gettingWeather()


                    },
                    error => {
                        console.error(error);
                    }
                );
            };
            navigator.geolocation.getCurrentPosition(success);
        };
        geoFindMe()
    }, [])



    const containerStyle = {
        margin: "auto",
        width: '70vw',
        height: '100vh'
    };

    const center = {
        lat: props.latitude,
        lng: props.longitude
    };

    const onMapLoad = map => {
        console.log('map.data: ', map.data)
        // map.data.loadGeoJson('/geo.json')
    }

    return (

        <div>
            <div className={style.info}>
                <div  className={style.block}>
                   <span className={style.name}>Latitude:</span> {props.latitude}, <span className={style.name}>Longitude:</span> {props.longitude}
                </div>

               <div  className={style.block}>
                   <span className={style.name}>Address:</span> {props.address}
               </div>
                <div  className={style.block}>
                   <span className={style.name}>Temperature:</span> {props.temp} degrees Celsius
                </div>
                <div  className={style.block}>
                    <span className={style.name}>Feels Like:</span> {props.feelsLike} degrees Celsius
                </div>
                <div  className={style.block}>
                    <span className={style.name}>Description: </span> {props.description}
                </div>



            </div>

            <LoadScript
                googleMapsApiKey="AIzaSyDal_A90HrAXBxIgC4jH4MyCKcbPTSnlJo"
            >
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={19}
                    onLoad={onMapLoad}
                >
                    <Marker
                        position={center}
                    />
                    <></>
                </GoogleMap>
            </LoadScript>
        </div>
    )
}

export default GeoMap;