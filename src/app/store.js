import { configureStore, combineReducers  } from '@reduxjs/toolkit'
import campsiteReducer from '../features/campsites/campsiteSlice'
import campsiteDetailsReducer from '../features/campsites/camsiteDetailSlice'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'



//persist configuration
const persistConfig = {
    key : "root",
    version : 1,
    storage
}

const reducer = combineReducers({
    campSiteData : campsiteReducer,
    campSiteDetails : campsiteDetailsReducer,
})

const persistedReducer = persistReducer(persistConfig, reducer);



// export default store
const store = configureStore({
    
    //Reducers
    reducer : persistedReducer,
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
    
})

export default store