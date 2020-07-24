/**
 * Created by HeShaowen on 2020/7/23.
 */
import React, {Component} from 'react';

// Context 可以让我们无须明确地传遍每一个组件，就能将值深入传递进组件树。
// 为当前的 theme 创建一个 context（“light”为默认值）。
// 当没有使用Context.Provider时，才会使用默认值。
let ThemeContext = React.createContext('light');

export default class ContextComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            color: "blue"
        }
    }

    render() {
        // 使用一个 Provider 来将当前的 theme 传递给以下的组件树。
        // 无论多深，任何组件都能读取这个值。
        // 在这个例子中，我们将 “dark” 作为当前的值传递下去。
        return (
            // <ConsumerContext className="Provider"> 也行
            <ThemeContext.Provider value={this.state.color}>
                <Toolbar />
                <button onClick={() => this.setState({color: "red"})}>change Theme Value</button>
            </ThemeContext.Provider>
        );
    }
}

// 中间的组件再也不必指明往下传递 theme 了。
function Toolbar() {
    return (
        <div>
            <ThemeButton />
        </div>
    );
}

class ThemeButton extends Component {
    // 指定 contextType 读取当前的 theme context。也可以写在类外边👇
    // React 会往上找到最近的 theme Provider，然后使用它的值。
    // 在这个例子中，当前的 theme 值为 “dark”。
    // 这一步指定的操作看似没有关联，但必不可少，他表示了下面的context用的是哪一个context
    // static contextType = ThemeContext;
    render() {
        return <Button theme={this.context} />;
    }
}
ThemeButton.contextType = ThemeContext;

class Button extends Component {
    render() {
        console.log(this.props.theme);
        return <button style={{color: this.props.theme}}>use context button, font color is context value ! </button>
    }
}