import { createAction } from '@reduxjs/toolkit'

export const login = createAction('LOGIN', (data) => {

    const clearInfo ={
        name: data.firstName + ' ' + data.lastName,
        email: data.email,
        password: data.password,
        token: data.token,
        expiresIn: (Date.now() + 1000 * 60 * 60).toString(), // convert to string to make it serializable
        login: true
       
    }
    return {
        payload: clearInfo
    }

})

export const logout = createAction('LOGOUT')