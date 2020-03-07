import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import reducers from "./reducers/index";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["movieSuggestions"]
};

const persistedReducer = persistReducer(persistConfig, reducers);

export let store = createStore(persistedReducer);
export let persistor = persistStore(store);
