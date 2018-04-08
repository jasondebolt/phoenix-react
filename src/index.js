import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import userManager from './utils/userManager';
import { OidcProvider } from "redux-oidc";
import Routes from './router';
import registerServiceWorker from './registerServiceWorker';

//const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

// optional cofiguration
const alertOptions = {
  position: 'bottom center',
  timeout: 5000,
  offset: '30px',
  transition: 'scale'
}

ReactDOM.render(
  <Provider store={store}>
    <AlertProvider template={AlertTemplate} {...alertOptions}>
      <PersistGate loading={null} persistor={persistor}>
        <OidcProvider store={store} userManager={userManager}>
          <Routes />
        </OidcProvider>
      </PersistGate>
    </AlertProvider>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
