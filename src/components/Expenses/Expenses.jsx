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
      {props.items.map(item => {
        return (
          <ExpenseItem
            title={item.title}
            date={item.date}
            amount={item.amount}
            key={item.id}
          />
        );
      })}
    </Card>
  );
};