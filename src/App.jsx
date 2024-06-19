
import Contenedor from './layouts/Contenedor'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Account from './pages/Account';
import Home from './pages/Home'
import CardsMain from './pages/CardsMain';
import LoansMain from './pages/LoansMain'
import Transaction from './pages/Transaction'
import ApplyCard from './pages/ApplyCard'
import ApplyLoans from './pages/ApplyLoans'
import Register from './pages/Register'
import Login from './pages/Login';
import Account2 from './pages/Account2'
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AuthRoute from './HOCs/AuthRoute';
import Contact from './pages/Contact';


const routesAuth = [
  {
    path: "/account",
    element: <Account />,
    key: 'account',
  },
  {
    path: '/card',
    element: <CardsMain />,
    key: 'card',
  },
  {
    path: '/loan',
    element: <LoansMain />,
    key: 'loan',
  },
  {
    path: '/transaction',
    element: <Transaction />,
    key: 'transaction',
  },
  {
    path: '/card/applycard',
    element: <ApplyCard />,
    key: 'applycard',
  },
  {
    path: '/loan/applyloan',
    element: <ApplyLoans />,
    key: 'applyloan',
  },
  {
    path: '/account2/:id',
    element: <Account2 />,
    key: 'account2',
  },
  {
    path: '/account2',
    element: <Navigate to='/account2/1' />,
    key: 'account2-navigate',
  },
];
const routesNoAuth = [
  {
    path: '/login',
    element: <Login />,
    key: 'login',
  },
  {
    path: '/register',
    element: <Register />,
    key: 'register',
  }
];

const routesAll = [
{
  path: '/',
  element: <Home />,
  key: 'home',
},
{
  path: '/contact',
  element: <Contact />,
  key: 'contact',
}
]

function App() {
  const login = useSelector(state => state.authReducer.login)
  return (
    <>
      <BrowserRouter>
        <Contenedor>
          <Routes>
                   
            {
              login ? [
                
                routesAuth.map(route => <Route key={route.key} path={route.path} element={route.element} />),
          
              ]:
             
              routesNoAuth.map(route => <Route key={route.key} path={route.path} element={route.element} />)
             
            }
            {
              routesAll.map(route => <Route key={route.key} path={route.path} element={route.element} />)
            }
             
           
          </Routes>
        </Contenedor>
      </BrowserRouter>

    </>
  )
}

export default App


