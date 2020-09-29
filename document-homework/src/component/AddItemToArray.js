/**
 * Created by HeShaowen on 2020/7/21.
 */
import React, {Component} from 'react';

export default class AddItemToArray extends Component {

    constructor(props) {
        super(props);
        this.state = {
            array: ["吃饭", "睡觉", "想豆豆"],
            inputValue: ''
        };
        // console.log(this.state.array);
        // 可以使用() => {}方式来实现
        // this.handleSubmit = this.handleSubmit.bind(this)
        // this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.inputValue === "") {
            return;
        }
        this.setState({
            array: this.state.array.concat([this.state.inputValue])
        });
        this.setState({
            inputValue: ""
        })
    }

    handleChange = (event) => {
        console.log(event.target.value);
        this.setState({inputValue: event.target.value});
    }

    render() {
        console.log(this.state.array);
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text"
                           name="mainInput"
                           placeholder="添加内容"
                           value={this.state.inputValue}
                           onChange={this.handleChange}/>
                    <input type="submit" value="提交"/>
                </form>
                <ul>
                    {this.state.array.map(item => <li>{item}</li>)}
                </ul>
            </div>
        );
    }
}