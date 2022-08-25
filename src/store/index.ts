import * as Redux from "@reduxjs/toolkit";
import * as Persist from "redux-persist";
import storage from "redux-persist/lib/storage";

import historyReducer from "~/store/history/reducer";
import settingsReducer from "~/store/settings/reducer";
import uiReducer from "~/store/ui/reducer";

const reducer = Redux.combineReducers({
  history: historyReducer,
  settings: settingsReducer,
  ui: uiReducer,
});

const persistedReducer = Persist.persistReducer(
  {
    key: "root",
    version: 1,
    storage: storage,
  },
  reducer
);

export const store = Redux.configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          Persist.FLUSH,
          Persist.REHYDRATE,
          Persist.PAUSE,
          Persist.PERSIST,
          Persist.PURGE,
          Persist.REGISTER,
        ],
      },
    });
  },
});

export const persistor = Persist.persistStore(store);
