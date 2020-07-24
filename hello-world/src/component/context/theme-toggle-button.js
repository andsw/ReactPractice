import {ThemeContext} from './theme-context';
import React from "react";

function WrapComponent() {
    return <div>
        <ThemeToggleButton/>
    </div>
}

function ThemeToggleButton() {
    // Theme Toggle 按钮不仅仅只获取 theme 值，它也从 context 中获取到一个 toggleTheme 函数
    return (
        <ThemeContext.Consumer>
            {({theme, toggleTheme}) => (
                <button onClick={toggleTheme}
                        style={{backgroundColor: theme.background, color: theme.foreground}}>
                    Toggle Theme
                </button>
            )}
        </ThemeContext.Consumer>
    );
}

export default WrapComponent;