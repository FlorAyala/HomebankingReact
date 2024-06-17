import { createReducer } from '@reduxjs/toolkit'
import { login } from '../actions/authActions'
import { logout } from '../actions/authActions'

const initialState = {
    login: false,
    token: '',
    expiresIn: '',
   

    user: {
        name: '',
        email: '',
        password: '',

    },
    transaction: {},
    transactionStatus: false,
    transactionError: '',

}

const authReducer = createReducer(initialState, (builder) => {
    builder.addCase(login, (state, action) => {

        return {
            ...state,
            user: {
                name: action.payload.name,
                email: action.payload.email,
                password: action.payload.password,
                //token: action.payload.token
            },
            token: action.payload.token,
            expiresIn: action.payload.expiresIn,
            login: action.payload.login
        }
    })
    .addCase(logout , (state, action) => {
        return initialState;
    })
  
   
})


export default authReducer