import { useSelector } from 'react-redux'
import { Navigate, Route } from 'react-router-dom'


function AuthRoute(route) { 
    const login = useSelector(state => state.authReducer.login)
    
    return login ? <Route key={route.key} path={route.path} element={route.element}/> : <Navigate to="/home"/>
}

export default AuthRoute