import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { favoriteReducer } from "../reducers/favorite";
import { jobReducer } from "../reducers/jobs";
import thunk from "redux-thunk";
import { persistReducer, persistStore } from "redux-persist";
import sessionStorage from "redux-persist/es/storage/session";
import { encryptTransform } from "redux-persist-transform-encrypt";
import forge from "node-forge";

export const initialState = {
  job: {
    jobs: []
  },
  favorite: {
    jobs: []
  }
};

const md = forge.md.sha256.create();
md.update(process.env.REACT_APP_SECRET_KEY);
const encryptedKey = md.digest().toHex();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: "root",
  storage: sessionStorage,
  transforms: [
    encryptTransform({
      secretKey: encryptedKey,
      onError: (error) => {
        console.log(error);
      }
    })
  ]
};

const mainReducer = combineReducers({
  favorite: favoriteReducer,
  job: jobReducer
});

const persistedReducer = persistReducer(persistConfig, mainReducer);

const store = createStore(
  persistedReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

const persistor = persistStore(store);

export { store, persistor };
