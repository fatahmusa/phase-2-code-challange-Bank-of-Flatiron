import React, {useState, useEffect}from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [searchTerm, setSearchTerm] = useState("");
  const [transactions, setTransactions] = useState([]);
  useEffect(() =>{
    fetch("http://localhost:8001/transactions")
    .then(resp => resp.json())
    .then(data => setTransactions(data))
  }, [])
  
  
  
  const filteredTransactions = transactions.filter((transaction) => 
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
   
    return (
    <div>
      <Search searchTerm = {searchTerm} setSearchTerm = {setSearchTerm}/>
      <AddTransactionForm setTransactions ={setTransactions}/>
      <TransactionsList transactions = {filteredTransactions}/>
    </div>
  );
}

export default AccountContainer;
