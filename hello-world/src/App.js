import React, {Component} from 'react';
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
import ContextComponent from "./component/context/ContextComponent";
import {ThemeContext, themes} from './component/context/theme-context';
import WrapComponent from './component/context/theme-toggle-button';
import ForwardRefComponent from "./component/forward_ref/ForwardRefComponent";
import HookNotes from "./component/hook/HookNotes";
import ReduxNotes from "./component/redux/ReduxNote";

class App extends Component {

  constructor(props) {
    super(props);

    // State 也包含了更新函数，因此它会被传递进 context provider。
    this.state = {
      theme: themes.light,
      toggleTheme: () => {
        this.setState(state => ({
          theme:
            state.theme === themes.dark
              ? themes.light
              : themes.dark,
        }));
      },
    };
  }

  render() {
    return (
      <div className="App">
        {/*带props的方法组件*/}
        <FunctionComponent data="this is Hello function component !"/>
        <hr/>
        {/*带props的类组件*/}
        <ClassComponent/>
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
        <hr/>
        {/*使用context(Provider)*/}
        <ContextComponent/>
        <hr/>
        <ThemeContext.Provider value={this.state}>
          {/*<Content/>*/}
          <WrapComponent/>
        </ThemeContext.Provider>
        <hr/>
        {/*转发refs的使用*/}
        <ForwardRefComponent/>
        {/*hook*/}
        <HookNotes/>
        <hr/>
        {/*redux*/}
        <ReduxNotes/>
      </div>);
  }
}

export default App;
