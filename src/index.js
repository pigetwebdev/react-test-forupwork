import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, compose } from 'redux'
import MainReducer from './Reducers/MainReducer'
import App from './App';
import './index.css'
import registerServiceWorker from './registerServiceWorker';

const store = compose(window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore)(MainReducer)

ReactDOM.render(<Provider store={store}>
    <App />
</Provider>
, document.getElementById('root'));
registerServiceWorker();
