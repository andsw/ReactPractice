/**
 * Created by HeShaowen on 2020/7/22.
 */
import React, {Component} from 'react';

export default class OuterComponent extends Component {
    render() {
        return (
            <div>
                {this.props.child}
            </div>
        );
    }
}