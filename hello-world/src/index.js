import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./component/redux/store";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

store.subscribe(() => {
    console.log("re- render...")
    ReactDOM.render(<App />, document.getElementById('root'));
})
