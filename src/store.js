import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import promise from 'redux-promise';
import { createUserManager, loadUser } from "redux-oidc";
import userManager from "./utils/userManager";

import reducers from './reducers';

export const persistConfig = {
    key: 'root',
    storage
};

const persistedReducer = persistReducer(persistConfig, reducers);

const loggerMiddleware = store => next => action => {
  console.log("Action type:", action.type);
  console.log("Action payload:", action.payload);
  console.log("State before:", store.getState());
  next(action);
  console.log("State after:", store.getState());
};

export const store = createStore(
    persistedReducer,
    {},
    applyMiddleware(promise, loggerMiddleware)
);

loadUser(store, userManager);

export const persistor = persistStore(store);
