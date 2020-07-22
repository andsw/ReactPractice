/**
 * Created by HeShaowen on 2020/7/20.
 */
import React, {Component} from 'react';

export default class RefComponent extends Component {

    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.buttonClick = this.buttonClick.bind(this);
    }

    buttonClick() {
        const ref = this.myRef.current;
        console.log(ref.value);
        this.myInputRef.value = ref.value;
        ref.value = ''
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.myRef}/>
                <button onClick={this.buttonClick}>提交</button>
                <input type="text" ref={input => this.myInputRef = input} placeholder="显示提交的内容"/>
            </div>
        );
    }
}