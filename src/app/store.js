import { configureStore, combineReducers  } from '@reduxjs/toolkit'
import campsiteReducer from '../features/campsites/campsiteSlice'
import campsiteDetailsReducer from '../features/campsites/camsiteDetailSlice'
import userReducer from '../features/users/userSlice'
import userUpdateReducer from '../features/users/updateUserSlice'



const reducer = combineReducers({
    campSiteData : campsiteReducer,
    campSiteDetails : campsiteDetailsReducer,
    userData : userReducer,
    userUpdate : userUpdateReducer

})


// export default store
const store = configureStore({
    
    //Reducers
    reducer : reducer,
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
    
})

export default store