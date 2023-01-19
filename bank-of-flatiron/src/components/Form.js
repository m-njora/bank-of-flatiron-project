import React, { useState } from "react";
//import Transaction from "./Transactions";

function AddTransactionForm() {
  const [date, setDate] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("")
  const [amount, setAmount] = useState("")
  function handleSubmit(e) {
    fetch("https://api.npoint.io/fb58ad61f63ea6ba4d8b", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        date: date,
        description: description,
        category: category,
        amount: amount,
      }),
    });
     alert("added successfully")
  }
  return (
<<<<<<< HEAD
    <div className="segment">
=======
    <div className="search">
>>>>>>> 2297bd52223338c2d74507d73412e9e3f1ebae70
      <form onSubmit={handleSubmit} className="ui form">
        <div className="submit">
          <input value={date} onChange={(e) => setDate(e.target.value)} type="date" name="date" />
          <input value={description} onChange={(e) => setDescription(e.target.value)} type="text" name="description" placeholder="Description" />
          <input value={category} onChange={(e) => setCategory(e.target.value)} type="text" name="category" placeholder="Category" />
          <input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" name="amount" placeholder="Amount" step="0.01" />
        </div>
<<<<<<< HEAD
        <button className=" button" type="submit">
=======
        <button className="button" type="submit">
>>>>>>> 2297bd52223338c2d74507d73412e9e3f1ebae70
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;

