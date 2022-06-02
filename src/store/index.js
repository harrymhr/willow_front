import { configureStore } from '@reduxjs/toolkit'

import homeReducer from './home/home.reducer'

const reducer = {
    home: homeReducer,
}

const store = configureStore({
    reducer,
    devTools: process.env.NODE_ENV !== 'production',
})

export default store;