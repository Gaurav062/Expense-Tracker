import { useContext  ,useState} from "react";
import { GlobalContext } from "../context/GlobalState";


function AddTransaction() {

  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
 const { transactions, addTransaction } = useContext(GlobalContext); // Fix casing
 
    function handleSubmit(event) {
    event.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text : text,
      amount : +amount, // Convert amount to a numbers
    }
    addTransaction(newTransaction);
 
       
    }

  return (
    <div className="add-transaction-container">
      <form action="submit" className="add-transaction-form"
      onSubmit={handleSubmit}>
        <h3>Add new transaction</h3>
        <div className="form-control">
          <label htmlFor="text"    >Text</label>
          <input type="text" placeholder="Enter text..."  onChange={(e) => {setText(e.target.value)
    
          } } />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input type="number" placeholder="Enter amount..."  onChange={(e) => {setAmount(e.target.value)
    
          } }  />
        </div>
        <button className="btn"   >Add transaction</button>
      </form>
    </div>
  );
}

export default AddTransaction;