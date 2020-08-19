import React from 'react';
import {Header} from "./components/Header";
import {Balance} from "./components/Balance";
import {Expenses} from "./components/Expenses";
import {Transaction} from "./components/Transaction";
import {AddTrans} from "./components/AddTrans";
import {GlobalProvider} from "./context/Globalcontetx"
import './App.css';

function App() {
  return (
    <GlobalProvider >
      <Header />
      <div class="container">
        <Balance />
      </div>
      <Expenses />
      <Transaction />
      <AddTrans />
    </GlobalProvider>
  );
}

export default App;
