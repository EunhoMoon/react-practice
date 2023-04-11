import { ExpenseItem } from './ExpenseItem';
import './Expenses.css';
import { Card } from '../UI/Card';
import { ExpensesFilter } from './ExpensesFilter';
import { useState } from 'react';

export const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2023');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  }

  const filteredExpense = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expensesContent = <p>No expenses found.</p>

  if (filteredExpense.length > 0) {
    expensesContent = filteredExpense.length > 0 && filteredExpense.map(expense => {
      return (
        <ExpenseItem
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
          key={expense.id}
        />
      );
    })
  }

  return (
    <Card className='expenses'>
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
      {expensesContent}
    </Card>
  );
};