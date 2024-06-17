import { configureStore } from '@reduxjs/toolkit'
import authReducer from './reduces/authReducer'

export default configureStore({
  reducer: {
    authReducer: authReducer
  }
})