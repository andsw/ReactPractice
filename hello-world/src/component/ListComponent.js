/**
 * Created by HeShaowen on 2020/7/22.
 */
import React, {Component} from 'react';

export default class ListComponent extends Component {
    render() {
        return (
            <div>
                <h4>列表组件：</h4>
                {['aaa', 'bbb', 'ccc', 'ddd'].map((item) => <li key={item}>{item}</li>)}
            </div>
        );
    }
}