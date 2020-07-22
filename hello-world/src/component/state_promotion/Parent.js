/**
 * Created by HeShaowen on 2020/7/22.
 */
import React, {Component} from 'react';
import CelsiusComponent from "./CelsiusComponent";
import FahrenheitComponent from "./FahrenheitComponent";

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

// 当多个组件需要共享状态时，可以将需要共享的状态提升至共同的父组件
export default class Parent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            c: 37,
            f: 0
        };
    }

    changeCelsius = (c) => {
        console.log("c -> f")
        this.setState({
            c: c,
            f: toFahrenheit(c)
        });

    }

    changeFahrenheit = (f) => {
        this.setState({
            f: f,
            c: toCelsius(f)
        })
    }

    render() {
        return (
            <div>
                <CelsiusComponent temperature={this.state.c} change={this.changeCelsius}/>
                <FahrenheitComponent temperature={this.state.f} change={this.changeFahrenheit}/>
            </div>
        );
    }
}