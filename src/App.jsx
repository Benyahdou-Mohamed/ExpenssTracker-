import { useState,useContext } from 'react'
import {Header} from './Components/Header'
import {Balance} from './Components/Balance'
import {Income} from './Components/Income'
import {TransactionList} from './Components/TransactionList'
import {AddTransaction} from './Components/AddTransaction'
import {GlobalProvider} from './context/GlobalState'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <GlobalProvider>
    <div className="expenss-container">
      <Header/>
      <div className="container">
        <Balance/>
        <Income/>
        <TransactionList/>
        <AddTransaction/>
      </div>
      </div>
      </GlobalProvider>
    </>
  )
}

export default App
