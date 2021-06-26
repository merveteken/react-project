import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [title, setEnteredTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  //  const [userInput, setUserInput] = useState({
  //    enteredTitle: "",
  //    enteredAmount: "",
  //    enteredDate: "",
  //  });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    //setUserInput({
    //  ...userInput,
    //  enteredTitle:event.target.value,
    //})

    //  setUserInput((prevState) => {
    //    return { ...prevState, enteredTitle: event.target.value };
    //  });
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
    //  setUserInput({
    //    ...userInput,
    //    enteredAmount: event.target.value,
    //  });
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
    //  setUserInput({
    //    ...userInput,
    //    enteredDate: event.target.value,
    //  });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: title,
      amount: +amount,
      date: new Date(date)
    }

    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setAmount('');
    setDate('');
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={title} onChange={titleChangeHandler}></input>
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={amountChangeHandler}
          ></input>
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={date}
            onChange={dateChangeHandler}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type='button' onClick={props.onCancel} >Cancel</button>
        <button type='submit' >Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
