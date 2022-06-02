import React from 'react';
// import ReactDOM from 'react-dom/client';
import { render } from 'react-dom'
import { Provider } from 'react-redux';

import App from './components/app/App.js'
import store from './store/index.js';
import { customPageData } from './utils/customPageData'
import './index.scss';

// const root = ReactDOM.createRoot(document.getElementById('root'));
render(
    <Provider store={store}>
        <App customPageData={customPageData}/>
    </Provider>, document.getElementById('root')
);