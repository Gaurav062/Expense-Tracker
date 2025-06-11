import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function Transactions() {
  const { transactions, deleteTransaction } = useContext(GlobalContext);
  return (
    <div className="transaction-container">
      <ul className="list">
        {transactions.map((transaction) => (
          <li key={transaction.id} className={transaction.amount < 0 ? 'minus' : 'plus'}>
            <div className="transaction-details">
              <span className="transaction-text">{transaction.text}</span>
              <span className={`transaction-amount ${transaction.amount < 0 ? 'minus' : 'plus'}`}>
                {transaction.amount < 0 ? '-' : '+'}${Math.abs(transaction.amount)}
              </span>
            </div>
            <button 
              className="delete-btn" 
              aria-label="Delete transaction"
              onClick={() => deleteTransaction(transaction.id)}
            >
              ×
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Transactions;