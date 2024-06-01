import React, { useState } from "react";

function AddTransactionForm({setTransactions}) {

  const[formData, setFormData] = useState ({
    date :"",
    description :"",
    category :"",
    amount:"",
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData ({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  const newTransaction = {
    
      date: formData.date,
      description: formData.description,
      category: formData.category,
      amount:parseFloat(formData.amount),
    };
  
  fetch("http://localhost:8001/transactions", {
  method:"POST",
  headers: {
  "Content-Type": "application/json",
  },
  body: JSON.stringify(newTransaction),
})
.then((resp) => resp.json())
.then((data) => {
  setTransactions((previousTransactions)=> [...previousTransactions, data]);
  setFormData({
    date:"",
    description:"",
    category:"",
    amount:"",
  })
  });
};
  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="inline fields">
          <input type="date" name="date" value={formData.date} onChange={handleChange} />
          <input type="text" name="description" value={formData.description} onChange={handleChange} placeholder="Description" />
          <input type="text" name="category" value={formData.category} onChange={handleChange} placeholder="Category" />
          <input type="number" name="amount" value={formData.amount} onChange={handleChange}placeholder="Amount" step="0.01" />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
