import { useState } from "react";
import NavBar from "./components/NavBar";
import Balance from "./components/Balance";
import IncomeExpense from "./components/income-expense";
import "./App.css";
import History from "./components/History";
import AddTransaction from "./components/AddTransactions";

import { GlobalProvider } from "./context/GlobalState";
function App() {
  return (
    <>
    <GlobalProvider>
      <NavBar />
      <Balance />
      <IncomeExpense />
      <History />
      <AddTransaction />
    </ GlobalProvider >
    </>
  );
}

export default App;
