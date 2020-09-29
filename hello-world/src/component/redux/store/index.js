import {applyMiddleware, createStore} from "redux";
import reducer from "../reducer/reducer";
import thunk from "redux-thunk";

// 没有最外层对store的监听进而对app中的ReduxNote组件的重新渲染，ReduxNote就无法对store的修改做出响应。
// 使用redux-thunk使得传入dispatch中的实参可以为包括异步语句的函数。
const store = createStore(reducer, applyMiddleware(thunk));

export default store;
