import { combineReducers, configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({

});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
