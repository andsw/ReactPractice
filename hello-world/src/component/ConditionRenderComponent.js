/**
 * 条件渲染组件
 * Created by HeShaowen on 2020/7/22.
 */
import React, {Component} from 'react';

function HideableComponent(props) {
    // if (props.show) {
    //     return <h3>Condition-based component ! </h3>;
    // } else {
    //     return null;
    // }
    //记住这个&&使用属性
    return props.show && <h3>Condition-based component ! </h3>
}

export default class ConditionRenderComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            buttonText: "hide",
            show: true
        };
    }



    render() {
        return (
            <div>
                {/*条件渲染组件的两种用法:*/}
                <HideableComponent show={this.state.show}/>
                {this.state.show && <h3>Condition-based component with && !</h3>}
                <button onClick={() => {
                    this.setState({show: !this.state.show,
                        buttonText: this.state.buttonText === 'show' ? 'hide' : 'show'});}}>{this.state.buttonText}</button>
            </div>
        );
    }
}