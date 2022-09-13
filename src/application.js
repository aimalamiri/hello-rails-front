import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/store'
import { Provider } from 'react-redux';
import Greeting from "./components/Greeting";


function App() {
    return (
        <Greeting />
    );
}

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'),
);
