import { createStore, applyMiddleware } from "redux";
import * as actionCreators from "./actions/index";
import { persistStore, persistReducer } from "redux-persist";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import logger from "redux-logger";
import reducers from "./reducers/index";
const middleWares = [thunk];
const persistConfig = {
  key: "root",
  storage,
  blacklist: [
    "movieSuggestions",
    "optionActive",
    "movieSlider",
    "displayUserAdvancedSearch",
    "fetchAdvancedSearch",
  ],
};

const persistedReducer = persistReducer(persistConfig, reducers);
const composeEnhancers = composeWithDevTools({
  actionCreators,
  trace: true,
  traceLimit: 25,
});

export let store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(...middleWares))
);

export let persistor = persistStore(store);
