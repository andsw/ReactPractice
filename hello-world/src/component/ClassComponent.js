/**
 * Created by HeShaowen on 2020/7/20.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class ClassComponent extends Component {
    render() {
        return (
            <div>{this.props.data}</div>
        );
    }
}

ClassComponent.propsType = {
    data: PropTypes.string.isRequired,
    age: PropTypes.number
};