import { configureStore } from "@reduxjs/toolkit";
import authReducer from './auth/authSlice'
import movieReducer from './movie/movieSlice'
import { thunk } from "redux-thunk";
import { combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";

//rootReducer
const rootReducer = combineReducers({
    auth: authReducer,
    movie: movieReducer,
})

//config persist store
const persistConfig = {
    key: 'root',
    storage,
}

// create persist reducer
const persistReducer = combineReducers(persistConfig, rootReducer);

//create redux store
export const store = configureStore({
    reducer: persistReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
})

//create persisttor
export const persistor = persistStore(store)