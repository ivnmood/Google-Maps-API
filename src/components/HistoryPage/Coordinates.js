import React from "react";
import GeoCoordinate from "./GeoCoordinate";
import style from "./style.module.css"

const Coordinates = (props) => {
    const employeeElement = props.coordinates.map(e => <GeoCoordinate coordinate={e} id={e.id} removeItem={props.removeItem}
                                                                      key={e.id}/>)
    return (
        <div className={style.groupBlocks}>
            {employeeElement}
        </div>
    )
}

export default Coordinates;
