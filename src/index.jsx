import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/app';
import { ErrorBoundry } from './components/pages';
import LoadingScreen from './components/loading-screen';
import store from './store';
import './i18n';
import './components/app/app.scss';

require('es7-object-polyfill');


ReactDOM.render(
    <Provider store={store}>
        <Suspense fallback={<LoadingScreen />}>
            <ErrorBoundry>
                <App />
            </ErrorBoundry>
        </Suspense>
    </Provider>,
    document.getElementById('root'),
);
