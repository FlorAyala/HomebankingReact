
import Contenedor from './layouts/Contenedor'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Account from './pages/Account';
import Home from './pages/Home'
import CardsMain from './pages/CardsMain';
import LoansMain from './pages/LoansMain'
import Transaction from './pages/Transaction'
import ApplyCard from './pages/ApplyCard'
import ApplyLoans from './pages/ApplyLoans'


function App() {
  return (
    <>
      <BrowserRouter>
        <Contenedor>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/account' element={<Account />} />
            <Route path='/card' element={<CardsMain />} />
            <Route path='/card/applycard' element={<ApplyCard />} />
            <Route path='/loan' element={<LoansMain />} />
            <Route path='/loan/applyloan' element={<ApplyLoans />} />
            <Route path='/transaction' element={<Transaction />} />
          </Routes>
        </Contenedor>
      </BrowserRouter>

    </>
  )
}

export default App

