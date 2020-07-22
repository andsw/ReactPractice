import React from 'react';
import './App.css';
import FunctionComponent from './component/FunctionComponent'
import ClassComponent from "./component/ClassComponent";
import RefComponent from "./component/RefComponent";
import TickTok from "./component/lifecycle/TickTok";
import ConditionRenderComponent from "./component/ConditionRenderComponent";
import ListComponent from "./component/ListComponent";
import VariousFormComponent from "./component/form/VariousFormComponent";
import Parent from "./component/state_promotion/Parent";
import OuterComponent from "./component/nested_component/OuterComponent";

function App() {
    return (
        <div className="App">
            {/*带props的方法组件*/}
            <FunctionComponent data="this is Hello function component ! "/>
            <hr/>
            {/*带props的类组件*/}
            <ClassComponent data="this is Hello class component ! "/>
            <hr/>
            {/*带默认props的方法组件*/}
            <FunctionComponent/>
            <hr/>
            {/*两种方式使用refs*/}
            <RefComponent/>
            <hr/>
            {/*生命周期*/}
            <TickTok/>
            <hr/>
            {/*条件渲染*/}
            <ConditionRenderComponent/>
            <hr/>
            {/*列表和key*/}
            <ListComponent/>
            <hr/>
            {/*各类表单*/}
            <VariousFormComponent/>
            <hr/>
            {/*状态提升*/}
            <Parent/>
            <hr/>
            {/*优先组合使用组件，而不是继承*/}
            <OuterComponent child={<h1>inner component ! </h1>}/>
        </div>
    );
}

export default App;
