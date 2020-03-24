import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import reducers from "./reducers/index";
const middleWares = [thunk];
const persistConfig = {
  key: "root",
  storage,
  blacklist: ["movieSuggestions", "optionActive", " movieSlider", "movieList"]
};

const persistedReducer = persistReducer(persistConfig, reducers);

export let store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(...middleWares))
);
export let persistor = persistStore(store);
