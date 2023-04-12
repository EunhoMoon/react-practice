import './ExpenseForm.css';
import { useState } from 'react';

export const ExpenseForm = (props) => {
  const [enteredInput, setEnteredInput] = useState({
    title: '',
    amount: '',
    date: '',
  });

  const inputChangeHandler = (event) => {
    setEnteredInput((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredInput.title,
      amount: +enteredInput.amount,
      date: new Date(enteredInput.date),
    };

    props.onSaveExpenseDate(expenseData);
    setEnteredInput({
      title: '',
      amount: '',
      date: ''
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            name='title'
            value={enteredInput.title}
            onChange={inputChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            name='amount'
            min='0.01'
            step='0.01'
            value={enteredInput.amount}
            onChange={inputChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            name='date'
            min='2021-01-01'
            max='2023-12-31'
            value={enteredInput.date}
            onChange={inputChangeHandler}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='button' onClick={props.onCancel}>Cancel</button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};