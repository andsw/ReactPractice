/**
 * Created by HeShaowen on 2020/7/22.
 */
import React, {Component} from 'react';

export default class VariousFormComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '1',
            textareaValue: '请添加内容',
            fruits: ["apple", "pineapple", "banana"],
            selectedFruit: 'banana'
        }
    }

    handleTextInputChange = (event) => {
        this.setState({
            value: event.target.value
        })
    }

    handleTextareaChange = (event) => {
        this.setState({
            textareaValue: event.target.value
        })
    };

    handleSelectChange = (event) => {
        this.setState({
            selectedFruit: event.target.value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log("text input : " + this.state.value);
        console.log("textarea : " + this.state.textareaValue);
        console.log("select : " + this.state.selectedFruit);
    }

    // 一个监听变更方法监听多个input，使用name来判断是哪个发生了变化！
    handleMultipleInputChange = (event) => {
        const target = event.target;
        if (target.name === 'l1') {
            console.log(target.name + " value : " + event.target.value);
        } else {
            console.log(target.name + ' value : ' + event.target.value);
        }
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleTextInputChange} value={this.state.value}/>

                    <textarea name="area" id="area" cols="30" rows="10"
                              onChange={this.handleTextareaChange}
                              value={this.state.textareaValue}/>
                    <select onChange={this.handleSelectChange} value={this.selectedFruit}>
                        {this.state.fruits.map(fruit => <option key={fruit} value={fruit}>{fruit}</option>)}
                    </select>
                    {/*<input type="file"/> 略！*/}

                    {/*以下示例多个组件一个变更方法*/}
                    <input type="text" onChange={this.handleMultipleInputChange} name="i1"/>
                    <input type="text" onChange={this.handleMultipleInputChange} name="i2"/>

                    <input type="submit" value="提交"/>
                </form>
            </div>
        );
    }
}