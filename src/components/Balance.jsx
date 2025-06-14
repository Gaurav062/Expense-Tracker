import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";


function Balance() {

   const { transactions } = useContext(GlobalContext);
   const amounts = transactions.map(transaction => transaction.amount);
   const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return(
  <div className="balance-container">
    <h2>Your Balance</h2>
    <h1>₹{total}</h1>
  </div>);
}

export default Balance;
