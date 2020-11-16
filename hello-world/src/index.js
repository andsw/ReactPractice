import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Provider from "react-redux";
// import store from "./component/redux/store";

ReactDOM.render(
    // <React.StrictMode>
    //   <App />
    // </React.StrictMode>,
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

// // 这个代码，监听redux文件夹下面的store的变化，重新渲染方可进行初始化和添加操作
// store.subscribe(() => {
//     console.log("re- render...")
//     ReactDOM.render(<App />, document.getElementById('root'));
// })
