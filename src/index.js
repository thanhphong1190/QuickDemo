import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './components/layout/App';
// import registerServiceWorker from './registerServiceWorker';
import { unregister as unregisterServiceWorker } from './registerServiceWorker'
import { IntlProvider } from 'react-intl';
import { store } from './store';

import './styles/index.css';
import './libs';

ReactDOM.render(
  <Provider store={store}>
    <IntlProvider locale="en">
      <BrowserRouter basename="/">
        <App />
      </BrowserRouter>
    </IntlProvider>
  </Provider>,

  document.getElementById('root')
);

// registerServiceWorker();
unregisterServiceWorker();
