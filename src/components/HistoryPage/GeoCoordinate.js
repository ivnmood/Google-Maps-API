import React from "react";
import style from "./style.module.css";
import * as PropTypes from "prop-types";
import 'antd/dist/antd.css';
import {Modal, Button} from 'antd';

class GeoCoordinate extends React.Component {

    state = {visible: false};

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    render() {
        let {coordinate, id, removeItem} = this.props;


        const removeEmployee = () => {
            removeItem(id)
        }

        const options = {
            era: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            weekday: 'long',
            timezone: 'UTC',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        };

        return <>


            {
                id !== 1 &&
                <div className={style.block} onClick={() => {
                }}>
                <span>
                            <div>  <span className={style.name}>Latitude:</span> {coordinate.latitude}</div>
                            <div><span className={style.name}>Longitude:</span> {coordinate.longitude}</div>
                            <div> <span className={style.name}>Address:</span> {coordinate.address}</div>
                            <div> <span
                                className={style.name}>Date:</span> {coordinate.date.toLocaleString("en", options)}</div>
                            <Button danger onClick={removeEmployee} size={"small"}
                                    className={style.button}>Delete</Button>
                    <Button type="primary" onClick={this.showModal} size={"small"} className={style.button}>
                    Open
                    </Button>
        <Modal
            title="Basic Modal"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
        >
            <div><span className={style.name}>Latitude:</span> {coordinate.latitude}</div>
            <div><span className={style.name}>Longitude:</span> {coordinate.longitude}</div>
            <div> <span className={style.name}>Address:</span> {coordinate.address}</div>
            <div><span className={style.name}>Temperature:</span> {coordinate.temp} degrees Celsius</div>
            <div> <span className={style.name}>Feels Like:</span> {coordinate.feelsLike} degrees Celsius</div>
            <div><span className={style.name}>Description:</span> {coordinate.description}</div>
            <div> <span className={style.name}>Date:</span> {coordinate.date.toLocaleString("en", options)}</div>

        </Modal>
                        </span>
                </div>
            }


        </>


    }
}

GeoCoordinate.propTypes = {
    coordinate: PropTypes.any,
    id: PropTypes.any,
    removeItem: PropTypes.any
}

export default GeoCoordinate;