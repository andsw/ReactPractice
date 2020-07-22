/**
 * Created by HeShaowen on 2020/7/22.
 */
import React, {Component} from 'react';
import PropTypes from "prop-types";

export default class CelsiusComponent extends Component {0

    temperatureChange = (event) => {
        this.props.change(event.target.value)
    };

    render() {
        return (
            <div>
                <input type="text" value={this.props.temperature} onChange={this.temperatureChange}/> 摄氏度
            </div>
        );
    }
}

CelsiusComponent.propsType = {
    temperature: PropTypes.number.isRequired,
    change: PropTypes.func.isRequired
};