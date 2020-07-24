import * as React from "react";

export const themes = {
    light: {
        foreground: '#FFF',
        background: '#F1F',
    },
    dark: {
        foreground: '#F1F',
        background: '#FFF',
    },
};

// 确保传递给 createContext 的默认值数据结构是调用的组件（consumers）所能匹配的！
export const ThemeContext = React.createContext({
    theme: themes.dark,
    toggleTheme: () => {},
});