import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function IncomeExpense() {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map(transaction => transaction.amount);
  const income = amounts
    .filter(amount => amount > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts
      .filter(amount => amount < 0)
      .reduce((acc, item) => (acc += item), 0) * -1
  ).toFixed(2);
  return (
    <div className="income-expense-container">
      <div className="income-box">
        <h4>INCOME</h4>
        <p className="income-amount">₹{income}</p>
      </div>
      <div className="expense-box">
        <h4>EXPENSE</h4>
        <p className="expense-amount">₹{expense}</p>
      </div>
    </div>
  );
}

export default IncomeExpense;
