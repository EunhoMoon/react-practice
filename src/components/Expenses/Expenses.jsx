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

  return (
    <Card className='expenses'>
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
      {props.items.map(expense => {
        return (
          <ExpenseItem
            title={expense.title}
            date={expense.date}
            amount={expense.amount}
            key={expense.id}
          />
        );
      })}
    </Card>
  );
};