/**
 * Created by HeShaowen on 2020/7/22.
 */
import React, {Component} from 'react';

export default class TickTok extends Component {

    constructor(props) {
        super(props);
        this.state = {
            time: new Date()
        };
    }

    tick = () => {
        this.setState({
            time: new Date()
        })
    }

    componentDidMount() {
        this.timerID = setInterval(this.tick, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        return (
            <div>{this.state.time.toLocaleTimeString()}</div>
        );
    }
}