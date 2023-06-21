import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import {apiSlice} from "../api/apiSlice";
import authReducer from '../slice/authSlice'
import { tenantSlice } from "../slice/tenantSlice";
import rootReducer from "../slice/rootReducer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer, persistStore } from "redux-persist";


const createDebugger = require('redux-flipper').default;
const additionalMiddleware = [createDebugger()];
// Define the persist config
const persistConfig = {
    key: 'root',
    storage: AsyncStorage, 
    // Optionally, you can blacklist or whitelist specific reducers
    // blacklist: ['reducerToExclude'],
    // whitelist: ['reducerToPersist'],
  };
   

  const persistedReducer = persistReducer(persistConfig, rootReducer);




export const store = configureStore({
    reducer: persistedReducer,
    middleware:(getDefaultMiddleware) =>
    getDefaultMiddleware({serializableCheck: false,}).concat(apiSlice.middleware).concat(additionalMiddleware), // Disable serializable check for AsyncStorage compatibility
    
    devTools: true
    
});

export const persistor = persistStore(store);

