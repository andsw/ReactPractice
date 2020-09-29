/**
 * Created by HeShaowen on 2020/7/27.
 * 可以把高阶组件理解成，参数时组件，返回值也是组件的函数。
 */
import React, {Component} from 'react';
// High Order Component = HOC
// 可以解决横切关注点问题，复用代码。

export default function SimpleHocComponent(WrappedComponent, showData) {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                data: showData
            };
        }
        render() {
            return <WrappedComponent data={this.state.data}/>;
        }
    };
}