/**
 * Created by HeShaowen on 2020/7/22.
 */
import React, {Component} from 'react';
import PropTypes from "prop-types";

export default class FahrenheitComponent extends Component {

    temperatureChange = (event) => {
        this.props.change(event.target.value);
    };

    onSubmit = (event) => {
        event.preventDefault();
        // this.props.change(this.state.tempState)
    }

    render() {
        return (
            <div>
                <input type="text" value={this.props.temperature} onChange={this.temperatureChange}/> 华氏度
            </div>
        );
    }
}

FahrenheitComponent.propsType = {
    temperature: PropTypes.number.isRequired,
    change: PropTypes.func.isRequired
};